import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { pricingContent } from "@/lib/content/pricing";
import { LocalizedPricingPlan } from "@/lib/content/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  plan: LocalizedPricingPlan;
  annual: boolean;
  locale: Locale;
}

export function PricingCard({ plan, annual, locale }: PricingCardProps) {
  const price = annual ? plan.priceAnnualMonthly : plan.priceMonthly;
  const isFree = plan.id === "free";

  // Distinct button styles for visual hierarchy
  const isPopular = plan.popular;

  return (
    <Card
      className={`relative flex flex-col justify-between transition-all duration-300 rounded-2xl ${
        isPopular
          ? "border-primary shadow-2xl shadow-primary/15 bg-panel/95 scale-[1.02] z-10"
          : "border-line bg-panel/75 hover:border-line-strong hover:shadow-lg"
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md">
            <Sparkles className="h-3 w-3" />
            {t(pricingContent.cardLabels.popularBadge, locale)}
          </span>
        </div>
      )}

      <div>
        <CardHeader className="pt-7 pb-3 px-6">
          {/* Row 1: Plan Name & Clean Status Badge */}
          <div className="flex items-center justify-between gap-2 min-h-[32px]">
            <CardTitle className="text-2xl font-black tracking-tight text-foreground">
              {t(plan.name, locale)}
            </CardTitle>
            {isFree ? (
              <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider text-primary border-primary/30 bg-primary/10 whitespace-nowrap shrink-0">
                {t(pricingContent.cardLabels.payAsYouGoBadge, locale)}
              </Badge>
            ) : plan.id === "starter" ? (
              <Badge variant="outline" className="text-[10px] font-medium text-dim border-line-strong whitespace-nowrap shrink-0">
                {t(pricingContent.cardLabels.soloPracticeBadge, locale)}
              </Badge>
            ) : plan.id === "scale" ? (
              <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider text-amber-400 border-amber-500/30 bg-amber-500/10 whitespace-nowrap shrink-0">
                {t(pricingContent.cardLabels.highVolumeBadge, locale)}
              </Badge>
            ) : null}
          </div>

          {/* Row 2: Tagline */}
          <CardDescription className="h-9 mt-1 text-xs line-clamp-2 leading-relaxed text-dim">
            {t(plan.tagline, locale)}
          </CardDescription>

          {/* Row 3: Price Display */}
          <div className="mt-4">
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl font-extrabold tracking-tight text-foreground">
                ${price.toLocaleString()}
              </span>
              <span className="text-xs text-dim whitespace-nowrap">
                {annual && !isFree
                  ? t(pricingContent.cardLabels.annualInterval, locale)
                  : t(pricingContent.cardLabels.monthlyInterval, locale)}
              </span>
            </div>

            {/* Lock in your rates badge placed cleanly under the price */}
            <div className="h-6 mt-1.5 flex items-center">
              {annual && !isFree ? (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {t(pricingContent.cardLabels.saveBadge, locale)}
                </span>
              ) : null}
            </div>
          </div>

          {/* Row 4: Dedicated Quota & Cost-Per-Lead Metric Strip */}
          <div className="mt-2.5 flex items-center justify-between gap-1.5 rounded-xl border border-line bg-muted/40 px-3 py-2 text-xs">
            <span className="font-semibold text-foreground text-[11px] sm:text-xs whitespace-nowrap shrink-0">
              {plan.monthlyLeads.toLocaleString()} {t(pricingContent.cardLabels.leadsPerMonth, locale)}
            </span>
            <span className="font-mono text-[11px] font-bold text-primary whitespace-nowrap shrink-0">
              {plan.costPerLead}
            </span>
          </div>
        </CardHeader>

        <CardContent className="pt-2 px-6 pb-4">
          <div className="text-[10px] font-bold uppercase tracking-wider text-dim mb-3">
            {t(pricingContent.cardLabels.whatsIncluded, locale)}
          </div>

          <ul className="flex flex-col gap-2">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs min-h-[36px]">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-foreground/90 leading-snug">
                  {t(feature, locale)}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>

      <CardFooter className="pt-4 pb-6 px-6">
        <Link
          href={localizedPath(locale, plan.ctaHref)}
          className="w-full"
        >
          <Button
            variant={isPopular ? "glow" : isFree ? "outline" : "default"}
            size="default"
            className={`w-full justify-center font-bold text-sm h-11 px-4 gap-2 rounded-xl transition-all ${
              isFree
                ? "border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary"
                : isPopular
                ? "shadow-lg shadow-primary/25"
                : "bg-primary text-primary-foreground hover:brightness-110"
            }`}
          >
            <span className="truncate">{t(plan.cta, locale)}</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
