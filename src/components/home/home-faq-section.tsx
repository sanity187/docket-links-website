"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { homeContent } from "@/lib/content/home";
import { SectionHeading } from "@/components/primitives/section-heading";

interface HomeFaqSectionProps {
  locale: Locale;
}

export function HomeFaqSection({ locale }: HomeFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isEs = locale === "es";

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={isEs ? "PREGUNTAS FRECUENTES" : "COMMON QUESTIONS"}
          title={isEs ? "Todo lo que Necesita Saber" : "Frequently Asked Questions"}
          subtitle={
            isEs
              ? "Respuestas a dudas comunes sobre cumplimiento ético, fuentes de expedientes y rendimiento"
              : "Clear answers on legal compliance, Pennsylvania docket coverage, and technical specifications"
          }
          align="center"
        />

        <div className="mt-12 flex flex-col gap-3">
          {homeContent.faqs.map((faq, idx) => {
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
    </section>
  );
}
