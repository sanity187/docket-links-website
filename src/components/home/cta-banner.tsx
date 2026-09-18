import Link from "next/link";
import { Download, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  locale: Locale;
}

export function CtaBanner({ locale }: CtaBannerProps) {
  const isEs = locale === "es";

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-panel via-panel-muted to-primary/10 p-8 sm:p-16 shadow-2xl overflow-hidden text-center">
          {/* Ambient light glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-6">
            <Zap className="h-3.5 w-3.5" />
            <span>{isEs ? "Prueba Gratuita sin Tarjeta" : "Free Forever Tier Available"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-foreground max-w-3xl mx-auto leading-tight">
            {isEs
              ? "¿Listo para Dominar los Expedientes Judiciales de su Región?"
              : "Ready to Supercharge Your Firm's Lead Acquisition?"}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-dim max-w-2xl mx-auto leading-relaxed">
            {isEs
              ? "Descargue DocketLinks Browser hoy. Experimente consultas locales instantáneas en menos de 10ms y comience con 25 casos mensuales gratuitos."
              : "Download DocketLinks Browser today. Experience sub-10ms local queries and start with 25 free monthly leads and unlimited team members."}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={localizedPath(locale, "/download")}>
              <Button variant="glow" size="lg" className="gap-2 font-bold px-8">
                <Download className="h-5 w-5" />
                <span>{isEs ? "Descargar DocketLinks Gratis" : "Download Free Desktop App"}</span>
              </Button>
            </Link>

            <Link href={localizedPath(locale, "/pricing")}>
              <Button variant="outline" size="lg" className="rounded-xl px-6 font-semibold gap-2">
                <span>{isEs ? "Ver Todos los Planes" : "View Subscription Plans"}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-dim">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              {isEs ? "Usuarios ilimitados en todo plan" : "Unlimited firm users included"}
            </span>
            <span>•</span>
            <span>{isEs ? "Sin tarjeta de crédito para comenzar" : "No credit card required for Free tier"}</span>
            <span>•</span>
            <span>{isEs ? "Windows, macOS y Linux" : "Windows, macOS & Linux"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
