"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

export function SideRail() {
  const pathname = usePathname();
  const [active, setActive] = useState<string>(nav[0]?.href ?? "");

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = nav.map((item) => item.href.split("#")[1]);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(`/#${visible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <nav
      aria-label="Section progress"
      className="fixed left-6 top-1/2 z-55 hidden -translate-y-1/2 flex-col gap-4 xl:flex"
    >
      {nav.map((item) => {
        const isActive = active === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            className="group flex items-center gap-2.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-foreground/50 transition-colors hover:text-accent"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`h-[2px] transition-all duration-300 ${
                isActive
                  ? "w-9 bg-accent shadow-[0_0_10px_var(--gold)]"
                  : "w-3.5 bg-foreground/50 group-hover:bg-accent"
              }`}
              aria-hidden="true"
            />
            <span className={isActive ? "text-accent opacity-100" : "opacity-0 group-hover:opacity-100"}>
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
