"use client";

import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { pricingContent } from "@/lib/content/pricing";

interface BillingToggleProps {
  annual: boolean;
  onToggle: (annual: boolean) => void;
  locale: Locale;
}

export function BillingToggle({ annual, onToggle, locale }: BillingToggleProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <div className="inline-flex items-center rounded-xl border border-line bg-panel p-1 shadow-sm">
        <button
          type="button"
          onClick={() => onToggle(false)}
          className={`cursor-pointer rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
            !annual
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-dim hover:text-foreground"
          }`}
        >
          {t(pricingContent.billingToggle.monthly, locale)}
        </button>

        <button
          type="button"
          onClick={() => onToggle(true)}
          className={`cursor-pointer rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
            annual
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-dim hover:text-foreground"
          }`}
        >
          <span>{t(pricingContent.billingToggle.annual, locale)}</span>
        </button>
      </div>

      <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>{t(pricingContent.billingToggle.saveBadge, locale)}</span>
      </div>
    </div>
  );
}
