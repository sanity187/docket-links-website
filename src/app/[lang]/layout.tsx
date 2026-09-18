import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { isLocale, locales, type Locale, defaultLocale } from "@/lib/i18n/config";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { siteConfig } from "@/lib/site-config";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const isEs = locale === "es";

  return {
    title: {
      default: isEs
        ? `${siteConfig.name} - Inteligencia de Expedientes Judiciales en Tiempo Real`
        : `${siteConfig.name} - Real-Time Court Docket Intelligence & Leads`,
      template: `%s | ${siteConfig.name}`,
    },
    description: isEs
      ? "Plataforma nativa de escritorio para monitoreo de expedientes judiciales en Pensilvania, calificación de casos y preclasificación postal CASS de USPS."
      : siteConfig.description,
    keywords: [
      "court docket leads",
      "Pennsylvania dockets",
      "legal lead generation",
      "criminal defense leads",
      "traffic ticket leads",
      "USPS CASS presort",
      "law firm direct mail",
      "docket scraping",
    ],
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: isEs ? "es_ES" : "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    icons: {
      icon: "/icon.svg",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070b14" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale: Locale = lang;

  return (
    <html lang={locale} suppressHydrationWarning className="h-full">
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider locale={locale}>
            <SiteHeader locale={locale} />
            <main className="flex-1">{children}</main>
            <SiteFooter locale={locale} />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
