import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { downloadContent } from "@/lib/content/download";
import { PageShell } from "@/components/primitives/page-shell";
import { PlatformDownloadCards } from "@/components/download/platform-download-cards";
import { ReleaseNotesCard } from "@/components/download/release-notes-card";
import { CtaBanner } from "@/components/home/cta-banner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  return {
    title: t(downloadContent.title, locale),
    description: t(downloadContent.subtitle, locale),
  };
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) {
    notFound();
  }
  const locale: Locale = lang;

  return (
    <PageShell
      eyebrow={t(downloadContent.eyebrow, locale)}
      title={
        <span>
          {locale === "es"
            ? "Descargar DocketLinks Browser"
            : "Download DocketLinks Browser"}
        </span>
      }
      subtitle={t(downloadContent.subtitle, locale)}
      badge={`v${downloadContent.version} • Windows, macOS & Linux`}
    >
      <PlatformDownloadCards locale={locale} />
      <ReleaseNotesCard locale={locale} />
      <CtaBanner locale={locale} />
    </PageShell>
  );
}
