import { Cpu, Database, Zap, Mail, ShieldAlert, Check, X } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { homeContent } from "@/lib/content/home";
import { SectionHeading } from "@/components/primitives/section-heading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TechArchitectureSectionProps {
  locale: Locale;
}

export function TechArchitectureSection({ locale }: TechArchitectureSectionProps) {
  const isEs = locale === "es";

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "cpu":
        return <Cpu className="h-6 w-6 text-primary" />;
      case "database":
        return <Database className="h-6 w-6 text-secondary" />;
      case "zap":
        return <Zap className="h-6 w-6 text-amber-400" />;
      case "mail":
        return <Mail className="h-6 w-6 text-emerald-400" />;
      default:
        return <Cpu className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section id="technology" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t(homeContent.techSection.eyebrow, locale)}
          title={t(homeContent.techSection.title, locale)}
          subtitle={t(homeContent.techSection.subtitle, locale)}
          align="center"
        />

        {/* 4 Tech Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeContent.techSection.pillars.map((pillar) => (
            <Card
              key={pillar.id}
              className="border-line bg-panel/75 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/60 border border-line">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  {pillar.badge && (
                    <Badge variant="outline" className="text-[10px] font-bold">
                      {t(pillar.badge, locale)}
                    </Badge>
                  )}
                </div>

                <CardTitle className="mt-4 text-lg">
                  {t(pillar.title, locale)}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-xs leading-relaxed">
                  {t(pillar.description, locale)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Native Architecture vs Generic Web Portal Comparison */}
        <div className="mt-16 rounded-3xl border border-line-strong bg-panel/90 p-8 sm:p-12 shadow-xl backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-foreground">
              {isEs ? "Arquitectura Nativa vs Portales Web Genéricos" : "Native Architecture vs. Generic Web Portals"}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-dim leading-relaxed">
              {isEs
                ? "Vea por qué el enfoque local de DocketLinks deja atrás a los competidores basados únicamente en el navegador"
                : "Why our local-first, native architecture crushes standard browser-based competitors"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Generic Web Portal Card */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase tracking-wider">
                <X className="h-5 w-5" />
                <span>{isEs ? "Portales Web Tradicionales" : "Traditional Web-Only Lead Portals"}</span>
              </div>
              <ul className="flex flex-col gap-3 text-xs text-dim">
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{isEs ? "Se congelan al cargar tablas con miles de registros de expedientes" : "Browser freezes and lags when loading tables with thousands of court dockets"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{isEs ? "Cobros adicionales abusivos por cada usuario o abogado adicional" : "Hefty per-seat licensing penalties penalizing firm growth"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{isEs ? "Sin preclasificación postal; usted paga franqueo de tarifa completa" : "No postal CASS presort; firms waste 30-50% paying full first-class stamps"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{isEs ? "Filtrado lento a través de llamadas API remotas con latencia de 2-4 segundos" : "Slow remote API filtering with 2-4 second roundtrip lag"}</span>
                </li>
              </ul>
            </div>

            {/* DocketLinks Advantage Card */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 flex flex-col gap-4 shadow-lg">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <Check className="h-5 w-5" />
                <span>{isEs ? "DocketLinks Browser (Rust + Tauri v2)" : "DocketLinks Browser (Rust + Tauri v2)"}</span>
              </div>
              <ul className="flex flex-col gap-3 text-xs text-dim">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-foreground">{isEs ? "Motor SQLite local con búsquedas instantáneas en menos de 10 milisegundos" : "Local relational SQLite engine delivering sub-10ms instant queries"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-foreground">{isEs ? "Usuarios ilimitados en cada plan para toda la firma legal" : "Unlimited team members on every single subscription tier"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-foreground">{isEs ? "Preclasificación CASS automatizada con códigos de barras de bandeja postal (ahorro 30-50%)" : "Automated CASS address certification & tray presorting saving 30-50% postage"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-foreground">{isEs ? "Control de colisión y bloqueo de casos para evitar dobles contactos" : "Multi-attorney collision guard preventing embarrassing double contacts"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
