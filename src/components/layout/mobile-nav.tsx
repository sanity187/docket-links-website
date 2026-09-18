"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download, ChevronRight } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { megaMenuContent } from "@/lib/content/mega-menu";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  locale: Locale;
}

export function MobileNav({ locale }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex lg:hidden items-center gap-2">
      <ThemeToggle />

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="h-10 w-10 text-foreground"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 bg-panel/95 backdrop-blur-2xl p-6 overflow-y-auto border-t border-line flex flex-col justify-between animate-in fade-in-50 slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-6">
            {/* Quick CTAs */}
            <div className="flex flex-col gap-2">
              <Link
                href={localizedPath(locale, "/download")}
                onClick={() => setIsOpen(false)}
              >
                <Button variant="glow" size="lg" className="w-full gap-2 font-bold justify-center">
                  <Download className="h-4 w-4" />
                  <span>{locale === "es" ? "Descargar App v1.14.1" : "Download App v1.14.1"}</span>
                </Button>
              </Link>

              <Link
                href={localizedPath(locale, "/pricing")}
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 text-sm font-semibold rounded-xl border border-line bg-muted/50 hover:bg-muted transition-colors"
              >
                {locale === "es" ? "Ver Planes de Precios" : "View Pricing Plans"}
              </Link>
            </div>

            {/* Categorized Menu Links */}
            <div className="flex flex-col gap-6 pt-2">
              {megaMenuContent.categories.map((cat) => (
                <div key={cat.id} className="flex flex-col gap-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t(cat.label, locale)}
                  </div>
                  <div className="flex flex-col gap-1 pl-2 border-l border-line">
                    {cat.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={localizedPath(locale, link.href)}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-2 text-sm text-foreground hover:text-primary transition-colors"
                      >
                        <span>{t(link.title, locale)}</span>
                        <ChevronRight className="h-3.5 w-3.5 text-dim" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer of Mobile Drawer */}
          <div className="pt-6 mt-6 border-t border-line flex items-center justify-between">
            <span className="text-xs text-dim">
              {locale === "es" ? "Idioma:" : "Language:"}
            </span>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
