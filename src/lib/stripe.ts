// Server-only Stripe catalog fetching utility.
// Never expose STRIPE_SECRET_KEY to client-side bundles.

import { type Locale } from "@/lib/i18n/config";
import { pricingContent } from "@/lib/content/pricing";
import { LocalizedPricingPlan, StripeAddonPlan } from "@/lib/content/types";

if (typeof window !== "undefined") {
  throw new Error("Stripe secret integration must only be executed on the server.");
}

interface StripeProductItem {
  id: string;
  name: string;
  description: string | null;
  active: boolean;
  metadata?: Record<string, string>;
}

interface StripePriceItem {
  id: string;
  product: string;
  unit_amount: number | null;
  currency: string;
  recurring: {
    interval: string;
    interval_count: number;
  } | null;
  active: boolean;
}

interface StripeCatalog {
  products: StripeProductItem[];
  prices: StripePriceItem[];
}

const STRIPE_API_BASE = "https://api.stripe.com/v1";

const DEFAULT_ADDON_PLAN: StripeAddonPlan = {
  id: "lead-addon-pack",
  productId: "prod_VHlCv7i8RtjR5M",
  priceId: "price_1UHBfvCg1c7gGUHKoCQSYC2c",
  name: {
    en: "Lead & Enrichment Add-On Pack",
    es: "Paquete Adicional de Casos y Enriquecimientos",
  },
  description: {
    en: "On-demand additional court docket leads and phone/address enrichments. Valid across all plans.",
    es: "Casos de expedientes y enriquecimientos telefónicos/postales adicionales bajo demanda. Válido en todos los planes.",
  },
  unitAmountCents: 60,
  unitPriceDollars: 0.60,
  currency: "usd",
  minQuantity: 100,
};

/**
 * Fetch active products and prices directly from Stripe REST API on the server.
 * Uses Next.js ISR cache with a 1-hour revalidation window.
 */
export async function fetchStripeCatalog(): Promise<StripeCatalog | null> {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.warn("[stripe] STRIPE_SECRET_KEY is not configured in environment; using static defaults.");
    return null;
  }

  try {
    const headers = {
      Authorization: `Bearer ${secretKey}`,
      Accept: "application/json",
    };

    // Parallel fetch of active products and prices
    const [prodRes, priceRes] = await Promise.all([
      fetch(`${STRIPE_API_BASE}/products?active=true&limit=100`, {
        headers,
        next: { revalidate: 3600, tags: ["stripe-plans"] },
      }),
      fetch(`${STRIPE_API_BASE}/prices?active=true&limit=100`, {
        headers,
        next: { revalidate: 3600, tags: ["stripe-plans"] },
      }),
    ]);

    if (!prodRes.ok || !priceRes.ok) {
      console.warn(
        `[stripe] Failed to fetch catalog from Stripe: products=${prodRes.status}, prices=${priceRes.status}`
      );
      return null;
    }

    const [prodData, priceData] = await Promise.all([
      prodRes.json() as Promise<{ data: StripeProductItem[] }>,
      priceRes.json() as Promise<{ data: StripePriceItem[] }>,
    ]);

    return {
      products: prodData.data || [],
      prices: priceData.data || [],
    };
  } catch (err) {
    console.warn("[stripe] Error querying Stripe API:", err);
    return null;
  }
}

/**
 * Merge live Stripe plan pricing with localized features, tooltips, and badges.
 */
export async function getDynamicPricingPlans(): Promise<LocalizedPricingPlan[]> {
  const basePlans = pricingContent.plans;
  const catalog = await fetchStripeCatalog();

  if (!catalog) {
    return basePlans;
  }

  const { products, prices } = catalog;

  return basePlans.map((plan) => {
    // Free and enterprise plans are not recurring Stripe subscription prices
    if (plan.id === "free" || plan.id === "enterprise") {
      return {
        ...plan,
        isLive: true,
      };
    }

    // Match product in Stripe catalog by plan ID or name
    const matchedProduct = products.find((p) => {
      const nameLower = p.name.toLowerCase();
      if (plan.id === "starter" && nameLower.includes("starter")) return true;
      if (plan.id === "pro" && (nameLower.includes("pro") || nameLower.includes("professional"))) return true;
      if (plan.id === "scale" && nameLower.includes("scale")) return true;
      return false;
    });

    if (!matchedProduct) {
      return plan;
    }

    // Find active recurring price for this product
    const recurringPrice = prices.find(
      (pr) => pr.product === matchedProduct.id && pr.active && pr.recurring !== null
    );

    if (!recurringPrice || recurringPrice.unit_amount == null) {
      return {
        ...plan,
        productId: matchedProduct.id,
      };
    }

    const priceMonthly = Math.round(recurringPrice.unit_amount / 100);
    // No discount for annual billing; annual locks in current rates
    const priceAnnualMonthly = priceMonthly;

    return {
      ...plan,
      productId: matchedProduct.id,
      priceId: recurringPrice.id,
      priceMonthly,
      priceAnnualMonthly,
      currency: recurringPrice.currency,
      interval: recurringPrice.recurring?.interval || "month",
      isLive: true,
    };
  });
}

/**
 * Get dynamic add-on pack pricing (Lead/Enrichment Addon Pack) from Stripe.
 */
export async function getDynamicAddons(): Promise<StripeAddonPlan> {
  const catalog = await fetchStripeCatalog();
  if (!catalog) {
    return DEFAULT_ADDON_PLAN;
  }

  const { products, prices } = catalog;

  // Find addon product
  const addonProduct = products.find((p) => {
    const nameLower = p.name.toLowerCase();
    return nameLower.includes("addon") || nameLower.includes("pack");
  });

  if (!addonProduct) {
    return DEFAULT_ADDON_PLAN;
  }

  const addonPrice = prices.find(
    (pr) => pr.product === addonProduct.id && pr.active && pr.recurring === null
  );

  if (!addonPrice || addonPrice.unit_amount == null) {
    return DEFAULT_ADDON_PLAN;
  }

  const unitAmountCents = addonPrice.unit_amount;
  const unitPriceDollars = unitAmountCents / 100;

  return {
    ...DEFAULT_ADDON_PLAN,
    productId: addonProduct.id,
    priceId: addonPrice.id,
    unitAmountCents,
    unitPriceDollars,
    currency: addonPrice.currency,
  };
}
