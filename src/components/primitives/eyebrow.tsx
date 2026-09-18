import * as React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Eyebrow({ children, className, ...props }: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
        className
      )}
      {...props}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
      {children}
    </div>
  );
}
