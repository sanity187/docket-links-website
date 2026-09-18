import Link from "next/link";
import { Check, Users, Sparkles, Zap, ArrowRight } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
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
  const isEnterprise = plan.id === "enterprise";

  return (
    <Card
      className={`relative flex flex-col justify-between transition-all duration-300 ${
        plan.popular
          ? "border-primary shadow-xl shadow-primary/10 bg-panel/95 scale-[1.02] z-10"
          : "border-line bg-panel/75 hover:border-line-strong hover:shadow-lg"
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md">
            <Sparkles className="h-3 w-3" />
            {locale === "es" ? "Más Popular" : "Most Popular"}
          </span>
        </div>
      )}

      <div>
        <CardHeader className="pt-8">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-black">{t(plan.name, locale)}</CardTitle>
            <Badge variant="outline" className="font-mono text-[11px] font-bold">
              {plan.costPerLead}
            </Badge>
          </div>

          <CardDescription className="min-h-[40px] mt-2 text-xs">
            {t(plan.tagline, locale)}
          </CardDescription>

          {/* Pricing Header */}
          <div className="mt-6 flex items-baseline gap-1">
            {isEnterprise ? (
              <span className="text-4xl font-extrabold text-foreground">
                {locale === "es" ? "A Medida" : "Custom"}
              </span>
            ) : isFree ? (
              <span className="text-4xl font-extrabold text-foreground">$0</span>
            ) : (
              <>
                <span className="text-4xl font-extrabold text-foreground">${price}</span>
                <span className="text-xs text-dim">
                  {annual
                    ? locale === "es"
                      ? "/mes (anual)"
                      : "/mo (billed annually)"
                    : locale === "es"
                    ? "/mes"
                    : "/mo"}
                </span>
              </>
            )}
          </div>

          {/* Unlimited Users Guarantee Badge */}
          <div className="mt-4 flex items-center gap-1.5 rounded-lg bg-primary/10 px-2.5 py-1.5 text-xs font-semibold text-primary">
            <Users className="h-3.5 w-3.5 shrink-0" />
            <span>{locale === "es" ? "Usuarios y miembros ilimitados" : "Unlimited team members"}</span>
          </div>
        </CardHeader>

        <CardContent className="pt-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-dim mb-3">
            {locale === "es" ? "Qué incluye este plan:" : "What's included:"}
          </div>

          <ul className="flex flex-col gap-2.5">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-dim">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-foreground/90 leading-relaxed">
                  {t(feature, locale)}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>

      <CardFooter className="pt-6">
        <Link
          href={
            plan.ctaHref.startsWith("mailto:")
              ? plan.ctaHref
              : localizedPath(locale, plan.ctaHref)
          }
          className="w-full"
        >
          <Button
            variant={plan.popular ? "glow" : "default"}
            size="lg"
            className="w-full justify-center font-bold gap-2"
          >
            <span>{t(plan.cta, locale)}</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
