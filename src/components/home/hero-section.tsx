import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Cpu, Zap } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { homeContent } from "@/lib/content/home";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Button } from "@/components/ui/button";
import { HeroDownloadButton } from "@/components/download/hero-download-button";
import { InteractiveAppPreview } from "./interactive-app-preview";

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[55rem] h-[30rem] bg-gradient-to-tr from-primary/20 via-secondary/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="mb-6">
          <Eyebrow>{t(homeContent.hero.eyebrow, locale)}</Eyebrow>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] max-w-5xl">
          <span className="text-foreground">{t(homeContent.hero.titlePrimary, locale)}</span>{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
            {t(homeContent.hero.titleSecondary, locale)}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-dim max-w-3xl leading-relaxed">
          {t(homeContent.hero.subtitle, locale)}
        </p>

        {/* Highlight pill */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-dim">
          <Sparkles className="h-3.5 w-3.5 text-secondary" />
          <span>{t(homeContent.hero.badge, locale)}</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <HeroDownloadButton locale={locale} />

          <Link href={localizedPath(locale, "/pricing")}>
            <Button variant="outline" size="lg" className="rounded-xl px-6 font-semibold gap-2">
              <span>{locale === "es" ? "Ver Planes y Precios" : "Explore Pricing Plans"}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Interactive App Window Showcase */}
        <div className="mt-14 sm:mt-18 w-full">
          <InteractiveAppPreview locale={locale} />
        </div>
      </div>
    </section>
  );
}
