import Link from "next/link";
import { Scale } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { siteConfig } from "@/lib/site-config";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

interface SiteHeaderProps {
  locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-panel/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Lockup */}
        <Link
          href={localizedPath(locale, "/")}
          className="flex items-center gap-2.5 group select-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
            <Scale className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              Browser
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav locale={locale} />

        {/* Mobile Navigation Drawer Trigger */}
        <MobileNav locale={locale} />
      </div>
    </header>
  );
}
