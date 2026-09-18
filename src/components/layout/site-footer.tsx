import Link from "next/link";
import { Scale, ShieldCheck, Mail, Phone, MapPin, Github } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { siteConfig } from "@/lib/site-config";
import { footerContent } from "@/lib/content/common";
import { LanguageSwitcher } from "./language-switcher";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  return (
    <footer className="border-t border-line bg-panel/60 backdrop-blur-sm mt-24">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Slogan Column */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link
              href={localizedPath(locale, "/")}
              className="flex items-center gap-2.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <Scale className="h-4 w-4" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-xs text-dim leading-relaxed">
              {t(footerContent.tagline, locale)}
            </p>

            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{t(footerContent.unlimitedSeatsBadge, locale)}</span>
            </div>
          </div>

          {/* Platform & Solutions Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              {locale === "es" ? "Plataforma" : "Platform"}
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-dim">
              <li>
                <Link href={localizedPath(locale, "/#features")} className="hover:text-primary transition-colors">
                  {locale === "es" ? "Expedientes en Tiempo Real" : "Real-Time Docket Feed"}
                </Link>
              </li>
              <li>
                <Link href={localizedPath(locale, "/#technology")} className="hover:text-primary transition-colors">
                  {locale === "es" ? "Arquitectura Rust + SQLite" : "Rust + SQLite Architecture"}
                </Link>
              </li>
              <li>
                <Link href={localizedPath(locale, "/pricing")} className="hover:text-primary transition-colors">
                  {locale === "es" ? "Planes y Precios" : "Pricing & Volume Rates"}
                </Link>
              </li>
              <li>
                <Link href={localizedPath(locale, "/download")} className="hover:text-primary transition-colors">
                  {locale === "es" ? "Descargar Aplicación" : "Download Native App"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Practice Areas Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              {locale === "es" ? "Áreas de Práctica" : "Practice Areas"}
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-dim">
              <li>
                <Link href={localizedPath(locale, "/#features")} className="hover:text-primary transition-colors">
                  {locale === "es" ? "Defensa Penal (Título 18)" : "Criminal Defense (Title 18)"}
                </Link>
              </li>
              <li>
                <Link href={localizedPath(locale, "/#features")} className="hover:text-primary transition-colors">
                  {locale === "es" ? "Tránsito y DUI (Título 75)" : "Traffic & DUI (Title 75)"}
                </Link>
              </li>
              <li>
                <Link href={localizedPath(locale, "/#features")} className="hover:text-primary transition-colors">
                  {locale === "es" ? "Desahucios y Reclamos Civiles" : "Landlord-Tenant & Civil Claims"}
                </Link>
              </li>
              <li>
                <Link href={localizedPath(locale, "/#technology")} className="hover:text-primary transition-colors">
                  {locale === "es" ? "Preclasificación Postal CASS" : "USPS CASS Direct Mail"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Corporate Info Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              {locale === "es" ? "Contacto y Soporte" : "Contact & Support"}
            </h4>
            <div className="flex flex-col gap-2 text-xs text-dim">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                <span>{siteConfig.address.formatted}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Github className="h-3.5 w-3.5 shrink-0 text-primary" />
                <a
                  href={siteConfig.release.releasesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub Releases
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Compliance, and Language */}
        <div className="mt-12 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dim">
          <p>{t(footerContent.copyright, locale)}</p>

          <p className="max-w-md text-center sm:text-right text-[11px] leading-relaxed">
            {t(footerContent.complianceNotice, locale)}
          </p>

          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
