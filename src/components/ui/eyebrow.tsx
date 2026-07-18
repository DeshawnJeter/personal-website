import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-accent flex items-center gap-3.5 font-mono text-[11px] tracking-[0.34em] uppercase",
        "after:from-border after:h-px after:flex-1 after:bg-gradient-to-r after:to-transparent",
        className,
      )}
    >
      {children}
    </p>
  );
}
