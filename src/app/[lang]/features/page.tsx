import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { featuresContent } from "@/lib/content/features";
import { PageShell } from "@/components/primitives/page-shell";
import { LeadExplorerPreview } from "@/components/features/lead-explorer-preview";
import { ClaimedLeadsPreview } from "@/components/features/claimed-leads-preview";
import { CtaBanner } from "@/components/home/cta-banner";
import {
  Search,
  Mail,
  Users,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  return {
    title: t(featuresContent.hero.title, locale),
    description: t(featuresContent.hero.subtitle, locale),
  };
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale: Locale = lang;
  const f = featuresContent;

  return (
    <PageShell
      eyebrow={t(f.hero.eyebrow, locale)}
      title={t(f.hero.title, locale)}
      subtitle={t(f.hero.subtitle, locale)}
      badge={t(f.hero.badge, locale)}
    >
      <div className="flex flex-col gap-16 md:gap-24 w-full">
        {/* Section 1: Lead Explorer Deep Dive */}
        <section className="flex flex-col gap-8 w-full">
          {/* Header Narrative */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/40">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Layers className="w-3.5 h-3.5" />
                <span>{t(f.leadExplorer.badge, locale)}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {t(f.leadExplorer.title, locale)}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t(f.leadExplorer.description, locale)}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 max-w-sm text-xs leading-relaxed text-slate-300">
              <span className="font-semibold text-blue-400 block mb-1">
                {locale === "es" ? "Próximo Paso del Flujo:" : "Workflow Note:"}
              </span>
              {t(f.leadExplorer.workflowNote, locale)}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {f.leadExplorer.highlights.map((h) => (
              <div
                key={h.id}
                className="p-4 rounded-xl bg-card/60 border border-border/60 hover:border-blue-500/30 transition-all flex flex-col gap-2"
              >
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-blue-400" />
                  <span>{t(h.title, locale)}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(h.description, locale)}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Recreated Lead Explorer UI */}
          <div className="w-full">
            <LeadExplorerPreview locale={locale} />
          </div>
        </section>

        {/* Section 2: Claimed Leads, Enrichment & CRM Workspace */}
        <section className="flex flex-col gap-8 w-full pt-12 border-t border-border/40">
          {/* Header Narrative */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/40">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t(f.claimedLeads.badge, locale)}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {t(f.claimedLeads.title, locale)}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {t(f.claimedLeads.description, locale)}
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {f.claimedLeads.highlights.map((h) => (
              <div
                key={h.id}
                className="p-4 rounded-xl bg-card/60 border border-border/60 hover:border-purple-500/30 transition-all flex flex-col gap-2"
              >
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-purple-400" />
                  <span>{t(h.title, locale)}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t(h.description, locale)}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Recreated Claimed Leads & Drawer UI */}
          <div className="w-full">
            <ClaimedLeadsPreview locale={locale} />
          </div>
        </section>

        {/* Section 3: Ecosystem & Upcoming Feature Deep Dives */}
        <section className="flex flex-col gap-8 w-full pt-8 border-t border-border/40">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              {t(f.upcomingFeatures.eyebrow, locale)}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {t(f.upcomingFeatures.title, locale)}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {t(f.upcomingFeatures.subtitle, locale)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {f.upcomingFeatures.cards.map((card) => {
              const icons = {
                search: Search,
                mail: Mail,
                users: Users,
                cpu: Cpu,
              };
              const IconComponent =
                icons[card.icon as keyof typeof icons] || Sparkles;

              return (
                <div
                  key={card.id}
                  className="p-6 rounded-2xl bg-card/40 border border-border/60 hover:border-blue-500/30 transition-all flex flex-col gap-4 relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                      {t(card.badge, locale)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {t(card.title, locale)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(card.description, locale)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Call to Action Banner */}
        <CtaBanner locale={locale} />
      </div>
    </PageShell>
  );
}
