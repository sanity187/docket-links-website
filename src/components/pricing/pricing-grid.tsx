"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Zap, ShieldCheck, Check, ArrowRight, Sparkles } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { pricingContent } from "@/lib/content/pricing";
import { LocalizedPricingPlan, StripeAddonPlan } from "@/lib/content/types";
import { BillingToggle } from "./billing-toggle";
import { PricingCard } from "./pricing-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingGridProps {
  locale: Locale;
  plans?: LocalizedPricingPlan[];
  addonPlan?: StripeAddonPlan | null;
}

const ADDON_PRESETS = [100, 250, 500, 1000, 2500];

export function PricingGrid({ locale, plans, addonPlan }: PricingGridProps) {
  const [annual, setAnnual] = useState(false);
  const [addonQuantity, setAddonQuantity] = useState(250);

  const rawPlans = plans && plans.length > 0 ? plans : pricingContent.plans;
  // Filter out enterprise from standard card grid as enterprise is custom
  const standardPlans = rawPlans.filter((p) => p.id !== "enterprise");
  const isEs = locale === "es";

  const unitRate = addonPlan?.unitPriceDollars ?? 0.6;
  const totalAddonPrice = Math.round(addonQuantity * unitRate);

  return (
    <div className="flex flex-col gap-10 w-full">
      {/* Billing Selector & Trust Callouts */}
      <div className="flex flex-col items-center gap-4">
        <BillingToggle annual={annual} onToggle={setAnnual} locale={locale} />

        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs text-foreground shadow-sm">
            <Users className="h-3.5 w-3.5 text-primary shrink-0" />
            <span className="font-semibold">{t(pricingContent.unlimitedUsersCallout, locale)}</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium">
              {t(pricingContent.liveRatesBadge, locale)}
            </span>
          </div>
        </div>
      </div>

      {/* 4-Tier Balanced Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {standardPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            annual={annual}
            locale={locale}
          />
        ))}
      </div>

      {/* Enterprise Custom Solutions Callout */}
      <div className="rounded-2xl border border-line bg-panel/60 p-6 backdrop-blur-sm shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-md">
              {t(pricingContent.enterpriseCallout.badge, locale)}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-foreground">
              {t(pricingContent.enterpriseCallout.title, locale)}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-dim leading-relaxed">
            {t(pricingContent.enterpriseCallout.description, locale)}
          </p>
        </div>

        <Link
          href={pricingContent.enterpriseCallout.ctaHref}
          className="shrink-0 w-full md:w-auto"
        >
          <Button
            variant="outline"
            className="w-full md:w-auto justify-center font-bold text-sm h-11 px-5 gap-2 rounded-xl border-line-strong hover:bg-muted hover:border-primary/50 text-foreground"
          >
            <span>{t(pricingContent.enterpriseCallout.cta, locale)}</span>
            <ArrowRight className="h-4 w-4 text-primary" />
          </Button>
        </Link>
      </div>

      {/* Interactive Lead & Enrichment Add-on Pack Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-b from-panel/90 to-panel/60 p-6 sm:p-8 backdrop-blur-md shadow-xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Zap className="h-3.5 w-3.5" />
              <span>{t(pricingContent.addonPackSection.badge, locale)}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {t(pricingContent.addonPackSection.title, locale)}
            </h3>

            <p className="text-sm text-dim leading-relaxed">
              {t(pricingContent.addonPackSection.description, locale)}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-dim">
              {pricingContent.addonPackSection.features.map((feature, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-400" />
                  {t(feature, locale)}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Calculator & Action Card */}
          <div className="w-full lg:w-auto min-w-[300px] sm:min-w-[340px] flex flex-col gap-4 rounded-2xl border border-line bg-card/70 p-5 shadow-lg">
            <div className="text-xs font-semibold uppercase tracking-wider text-dim">
              {t(pricingContent.addonPackSection.quantityLabel, locale)}
            </div>

            {/* Quantity presets pills */}
            <div className="grid grid-cols-5 gap-1.5">
              {ADDON_PRESETS.map((qty) => (
                <button
                  key={qty}
                  type="button"
                  onClick={() => setAddonQuantity(qty)}
                  className={`py-1.5 text-xs font-bold rounded-lg transition-all ${addonQuantity === qty
                      ? "bg-primary text-primary-foreground shadow-sm scale-105"
                      : "bg-muted/60 text-dim hover:bg-muted hover:text-foreground"
                    }`}
                >
                  {qty.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Price calculation block */}
            <div className="flex items-baseline justify-between pt-2 border-t border-line">
              <div>
                <div className="text-xs text-dim">
                  {t(pricingContent.addonPackSection.unitRateLabel, locale)} ${unitRate.toFixed(2)} / {t(pricingContent.addonPackSection.leadUnit, locale)}
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  {addonQuantity.toLocaleString()} {t(pricingContent.addonPackSection.leadsAndEnrichments, locale)}
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-foreground">
                  ${totalAddonPrice.toLocaleString()}
                </span>
                <span className="text-xs text-dim block">{t(pricingContent.addonPackSection.oneTime, locale)}</span>
              </div>
            </div>

            <Link href={localizedPath(locale, "/download")} className="w-full">
              <Button
                variant="outline"
                size="default"
                className="w-full justify-center font-bold gap-2 bg-primary/10 hover:bg-primary/20 border-primary/30 text-foreground"
              >
                <span>{t(pricingContent.addonPackSection.cta, locale)}</span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

