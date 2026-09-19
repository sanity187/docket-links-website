import { type Locale } from "@/lib/i18n/config";

// A localized value where translations live side-by-side: { en: "...", es: "..." }
export type I18nString = {
  en: string;
  es?: string;
};

export type I18nField<T> = {
  en: T;
  es?: T;
};

export interface LocalizedNavItem {
  key: string;
  label: I18nString;
  href: string;
  badge?: I18nString;
}

export interface LocalizedFaqItem {
  question: I18nString;
  answer: I18nString;
  category?: string;
}

export interface LocalizedStatItem {
  value: I18nString;
  label: I18nString;
  description: I18nString;
}

export interface LocalizedPricingPlan {
  id: string;
  name: I18nString;
  priceMonthly: number; // in dollars
  priceAnnualMonthly: number; // monthly equivalent when paid annually
  costPerLead: string;
  monthlyLeads: number;
  dailyLeads: number;
  tagline: I18nString;
  popular?: boolean;
  unlimitedUsers: boolean;
  features: I18nString[];
  highlights?: I18nString[];
  cta: I18nString;
  ctaHref: string;
  // Dynamic Stripe metadata
  priceId?: string;
  productId?: string;
  isLive?: boolean;
  currency?: string;
  interval?: string;
}

export interface StripeAddonPlan {
  id: string;
  productId: string;
  priceId: string;
  name: I18nString;
  description: I18nString;
  unitAmountCents: number;
  unitPriceDollars: number;
  currency: string;
  minQuantity: number;
}


export interface LocalizedFeatureItem {
  id: string;
  title: I18nString;
  description: I18nString;
  badge?: I18nString;
  iconName: string;
  details?: I18nString[];
}

export interface LocalizedWorkflowStep {
  step: string;
  title: I18nString;
  description: I18nString;
  highlight: I18nString;
  iconName: string;
}
