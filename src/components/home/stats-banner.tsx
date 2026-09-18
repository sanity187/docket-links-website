import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { homeContent } from "@/lib/content/home";

interface StatsBannerProps {
  locale: Locale;
}

export function StatsBanner({ locale }: StatsBannerProps) {
  return (
    <section className="border-y border-line bg-panel-muted/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-line">
          {homeContent.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center px-4 pt-4 lg:pt-0">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-primary">
                {t(stat.value, locale)}
              </span>
              <span className="mt-2 text-sm sm:text-base font-bold text-foreground">
                {t(stat.label, locale)}
              </span>
              <span className="mt-1 text-xs text-dim max-w-[200px] leading-relaxed">
                {t(stat.description, locale)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
