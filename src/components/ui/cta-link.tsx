import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "gold";
  className?: string;
};

const base =
  "relative inline-flex items-center justify-center overflow-hidden rounded-sm border px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] transition-all duration-300 hover:-translate-y-0.5";

const variants = {
  solid:
    "border-transparent bg-gradient-to-r from-destructive to-primary text-white shadow-[0_14px_44px_-18px_var(--violet)] hover:shadow-[0_18px_54px_-14px_var(--violet)]",
  outline:
    "border-border bg-foreground/[0.03] text-foreground backdrop-blur hover:border-primary/60",
  gold: "border-accent/60 text-accent hover:bg-accent/10",
};

export function CtaLink({ href, children, variant = "outline", className }: CtaLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classes = cn(base, variants[variant], className);

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
