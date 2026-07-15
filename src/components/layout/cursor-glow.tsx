"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!canHover || prefersReducedMotion) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        raf = 0;
      });
    };

    const onOverInteractive = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea");
      dotRef.current?.classList.toggle("cursor-dot--active", Boolean(interactive));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOverInteractive, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOverInteractive);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden [@media(hover:hover)_and_(pointer:fine)]:block" aria-hidden="true">
      <div
        ref={glowRef}
        className="fixed left-0 top-0 -ml-44 -mt-44 h-88 w-88 mix-blend-screen"
        style={{
          width: 360,
          height: 360,
          marginLeft: -180,
          marginTop: -180,
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--violet) 15%, transparent) 0%, color-mix(in oklab, var(--cyan) 6%, transparent) 40%, transparent 66%)",
        }}
      />
      <div
        ref={dotRef}
        className="cursor-dot fixed left-0 top-0 h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-foreground transition-transform duration-200"
      />
    </div>
  );
}
