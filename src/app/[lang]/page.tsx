import { notFound } from "next/navigation";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";
import { HeroSection } from "@/components/home/hero-section";
import { StatsBanner } from "@/components/home/stats-banner";
import { TechArchitectureSection } from "@/components/home/tech-architecture-section";
import { WorkflowSection } from "@/components/home/workflow-section";
import { HomeFaqSection } from "@/components/home/home-faq-section";
import { CtaBanner } from "@/components/home/cta-banner";

export default async function HomePage({
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
    <div className="flex flex-col">
      <HeroSection locale={locale} />
      <StatsBanner locale={locale} />
      <TechArchitectureSection locale={locale} />
      <WorkflowSection locale={locale} />
      <HomeFaqSection locale={locale} />
      <CtaBanner locale={locale} />
    </div>
  );
}
