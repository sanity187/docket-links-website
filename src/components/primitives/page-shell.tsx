import * as React from "react";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

interface PageShellProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
  badge?: string;
  className?: string;
}

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
  badge,
  className,
}: PageShellProps) {
  return (
    <div className={cn("flex flex-col min-h-[70vh] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden", className)}>
      {/* Background ambient lighting effects */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[36rem] h-[20rem] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-10 w-[24rem] h-[16rem] bg-secondary/10 rounded-full blur-[80px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl w-full">
        {/* Header Hero Container */}
        <div className="rounded-3xl border border-line bg-panel/70 backdrop-blur-xl p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align="center"
            as="h1"
          />

          {badge && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-semibold text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-ping" />
              {badge}
            </div>
          )}
        </div>

        {/* Dynamic Page Content */}
        {children && <div className="mt-12 sm:mt-16 flex flex-col gap-16">{children}</div>}
      </div>
    </div>
  );
}
