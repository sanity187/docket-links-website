import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { pricingContent } from "@/lib/content/pricing";
import { PageShell } from "@/components/primitives/page-shell";
import { PricingGrid } from "@/components/pricing/pricing-grid";
import { PricingComparisonTable } from "@/components/pricing/pricing-comparison-table";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { CtaBanner } from "@/components/home/cta-banner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  return {
    title: t(pricingContent.title, locale),
    description: t(pricingContent.subtitle, locale),
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale: Locale = lang;

  return (
    <PageShell
      eyebrow={t(pricingContent.eyebrow, locale)}
      title={
        <span>
          {locale === "es"
            ? "Precios Claros. Retorno de Inversión Predecible."
            : "Transparent Pricing. Predictable Legal ROI."}
        </span>
      }
      subtitle={t(pricingContent.subtitle, locale)}
      badge={
        locale === "es"
          ? "Usuarios Ilimitados en Cada Plan • Nivel Gratuito de por Vida"
          : "Unlimited Team Seats • Free Forever Tier Included"
      }
    >
      <PricingGrid locale={locale} />
      <PricingComparisonTable locale={locale} />
      <PricingFaq locale={locale} />
      <CtaBanner locale={locale} />
    </PageShell>
  );
}
