import Link from "next/link";
import { Download } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { MegaMenu } from "./mega-menu";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

interface DesktopNavProps {
  locale: Locale;
}

export function DesktopNav({ locale }: DesktopNavProps) {
  return (
    <div className="hidden lg:flex items-center justify-between gap-6 flex-1 ml-8">
      {/* Navigation Links with Mega Menu */}
      <nav className="flex items-center gap-1" aria-label="Main Navigation">
        <MegaMenu locale={locale} />

        <Link
          href={localizedPath(locale, "/pricing")}
          className="px-3.5 py-2 text-sm font-medium rounded-lg text-dim hover:text-foreground hover:bg-muted/70 transition-colors"
        >
          {locale === "es" ? "Precios" : "Pricing"}
        </Link>
      </nav>

      {/* Utility items: Language, Theme, and Download CTA */}
      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <ThemeToggle />

        <Link href={localizedPath(locale, "/download")}>
          <Button variant="glow" size="sm" className="gap-1.5 font-semibold">
            <Download className="h-4 w-4" />
            <span>{locale === "es" ? "Descargar v1.14.1" : "Download v1.14.1"}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
