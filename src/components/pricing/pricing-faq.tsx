"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { pricingContent } from "@/lib/content/pricing";

interface PricingFaqProps {
  locale: Locale;
}

export function PricingFaq({ locale }: PricingFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full">
      <div className="text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>{locale === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
          {locale === "es" ? "Dudas sobre Precios y Planes" : "Everything You Need to Know"}
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {pricingContent.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-line bg-panel/70 backdrop-blur-sm overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-5 text-left font-semibold text-sm sm:text-base text-foreground cursor-pointer hover:bg-muted/40 transition-colors"
              >
                <span>{t(faq.question, locale)}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-primary" : "text-dim"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-dim leading-relaxed border-t border-line/50 pt-3 animate-in fade-in-50 duration-150">
                  {t(faq.answer, locale)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
