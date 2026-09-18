import { Download, Scale, Users, Mail, ArrowRight } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { homeContent } from "@/lib/content/home";
import { SectionHeading } from "@/components/primitives/section-heading";

interface WorkflowSectionProps {
  locale: Locale;
}

export function WorkflowSection({ locale }: WorkflowSectionProps) {
  const getStepIcon = (name: string) => {
    switch (name) {
      case "download":
        return <Download className="h-5 w-5 text-primary" />;
      case "scale":
        return <Scale className="h-5 w-5 text-secondary" />;
      case "users":
        return <Users className="h-5 w-5 text-amber-400" />;
      case "mail":
        return <Mail className="h-5 w-5 text-emerald-400" />;
      default:
        return <Scale className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <section id="workflow" className="py-20 sm:py-28 bg-panel-muted/30 border-y border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t(homeContent.workflow.eyebrow, locale)}
          title={t(homeContent.workflow.title, locale)}
          subtitle={t(homeContent.workflow.subtitle, locale)}
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {homeContent.workflow.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-line bg-panel/90 p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-primary/30 group-hover:text-primary/60 transition-colors">
                    {step.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted border border-line">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-bold text-foreground">
                  {t(step.title, locale)}
                </h3>

                <p className="mt-3 text-xs text-dim leading-relaxed">
                  {t(step.description, locale)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/60">
                <span className="text-[11px] font-semibold text-primary">
                  {t(step.highlight, locale)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
