"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import { stripLocalePrefix, localizedPath } from "@/lib/i18n/paths";
import { useLocale } from "@/lib/i18n/locale-context";

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    // Set cookie for browser preference persistence
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;SameSite=Lax`;

    // Calculate new path: strip old locale and apply new locale (English produces clean /path)
    const basePath = stripLocalePrefix(pathname, currentLocale);
    const newPath = localizedPath(newLocale, basePath);

    router.push(newPath);
  };

  return (
    <div
      className="inline-flex items-center gap-1 rounded-lg border border-line bg-panel/80 p-1 text-xs backdrop-blur-sm"
      aria-label="Language selection"
    >
      <Globe className="ml-1.5 h-3.5 w-3.5 text-dim shrink-0" aria-hidden="true" />
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => handleSwitch(locale)}
            aria-current={isActive ? "true" : undefined}
            className={`cursor-pointer rounded-md px-2 py-1 font-semibold uppercase tracking-wider transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
              isActive
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-dim hover:text-foreground hover:bg-muted/70"
            }`}
            aria-label={`Switch language to ${localeNames[locale]}`}
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}
