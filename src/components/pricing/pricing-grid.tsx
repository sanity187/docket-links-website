"use client";

import { useState } from "react";
import { Users, ShieldCheck } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { pricingContent } from "@/lib/content/pricing";
import { BillingToggle } from "./billing-toggle";
import { PricingCard } from "./pricing-card";

interface PricingGridProps {
  locale: Locale;
}

export function PricingGrid({ locale }: PricingGridProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="flex flex-col gap-10 w-full">
      {/* Billing Selector & Unlimited Users Banner */}
      <div className="flex flex-col items-center gap-6">
        <BillingToggle annual={annual} onToggle={setAnnual} locale={locale} />

        <div className="inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-primary/10 px-5 py-2.5 text-xs sm:text-sm text-foreground shadow-sm text-center">
          <Users className="h-4 w-4 text-primary shrink-0" />
          <span className="font-semibold">{t(pricingContent.unlimitedUsersCallout, locale)}</span>
        </div>
      </div>

      {/* 5-Tier Responsive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
        {pricingContent.plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            annual={annual}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
