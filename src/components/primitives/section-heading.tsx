import * as React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Component = "h2",
  className,
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center"
      ? "text-center items-center mx-auto"
      : align === "right"
      ? "text-right items-end ml-auto"
      : "text-left items-start";

  return (
    <div className={cn("flex flex-col max-w-3xl", alignmentClass, className)}>
      {eyebrow && (
        <div className="mb-4">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}

      <Component className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
        {title}
      </Component>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-dim leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
