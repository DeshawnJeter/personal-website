"use client";

import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";
import { useActiveSection } from "@/hooks/use-active-section";

export function SideRail() {
  const pathname = usePathname();
  const ids = nav.map((item) => item.href.split("#")[1] ?? "");
  const activeId = useActiveSection(ids);
  const active = `/#${activeId}`;

  if (pathname !== "/") return null;

  return (
    <nav
      aria-label="Section progress"
      className="fixed top-1/2 left-6 z-55 hidden -translate-y-1/2 flex-col gap-4 xl:flex"
    >
      {nav.map((item) => {
        const isActive = active === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            className="group text-foreground/50 hover:text-accent flex items-center gap-2.5 font-mono text-[9.5px] tracking-[0.2em] uppercase transition-colors"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`h-[2px] transition-all duration-300 ${
                isActive
                  ? "bg-accent w-9 shadow-[0_0_10px_var(--gold)]"
                  : "bg-foreground/50 group-hover:bg-accent w-3.5"
              }`}
              aria-hidden="true"
            />
            <span
              className={
                isActive
                  ? "text-accent opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
