"use client";

import { useEffect, useRef } from "react";

const RAVEN_PATH =
  "M4 14 C10 8, 18 6, 24 10 C22 6, 24 2, 28 3 C26 6, 28 9, 32 8 C36 7, 40 9, 40 13 C34 12, 28 14, 22 18 C16 22, 8 20, 4 14 Z";

function RavenSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={RAVEN_PATH} fill="currentColor" />
    </svg>
  );
}

/**
 * Ambient mode: a single distant raven that crosses the sky rarely, via a
 * long CSS keyframe loop (see `.raven-ambient` in globals.css) — cheap,
 * GPU-only, and automatically neutralized by the site's global
 * prefers-reduced-motion rule.
 *
 * Companion mode: rendered only after the Konami code is found. Follows the
 * pointer with a slight lag — an eased rAF loop rather than
 * `cursor-glow.tsx`'s direct 1:1 tracking, so it trails like a companion
 * instead of snapping to the cursor.
 */
export function Raven({ mode }: { mode: "ambient" | "companion" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode !== "companion") return;
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!canHover) return;

    let raf = 0;
    let targetX = window.innerWidth - 120;
    let targetY = 120;
    let x = targetX;
    let y = targetY;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX - 40;
      targetY = event.clientY - 60;
    };

    const tick = () => {
      const ease = prefersReducedMotion ? 1 : 0.08;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [mode]);

  if (mode === "ambient") {
    return (
      <div
        className="raven-ambient pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
        aria-hidden="true"
      >
        <RavenSvg className="text-foreground/30 absolute top-[12%] h-5 w-9" />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="text-accent pointer-events-none fixed top-0 left-0 z-[64] h-6 w-11"
      aria-hidden="true"
    >
      <RavenSvg className="h-full w-full drop-shadow-[0_0_6px_var(--gold)]" />
    </div>
  );
}
