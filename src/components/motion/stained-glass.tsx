"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A gothic lancet window rendered as segmented, glowing panes —
 * decorative background texture only, never load-bearing for content.
 */
export function StainedGlass({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 240 400"
      className={cn("pointer-events-none select-none", className)}
      animate={reduceMotion ? undefined : { opacity: [0.5, 0.72, 0.5] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id="glass-violet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--violet)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--violet)" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="glass-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.05" />
        </linearGradient>
        <clipPath id="lancet-arch">
          <path d="M120 4 C60 4 24 56 24 120 L24 396 L216 396 L216 120 C216 56 180 4 120 4 Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#lancet-arch)">
        <rect x="24" y="4" width="96" height="200" fill="url(#glass-violet)" />
        <rect x="120" y="4" width="96" height="200" fill="url(#glass-gold)" />
        <rect x="24" y="204" width="64" height="192" fill="url(#glass-gold)" opacity="0.6" />
        <rect x="88" y="204" width="64" height="192" fill="url(#glass-violet)" opacity="0.7" />
        <rect x="152" y="204" width="64" height="192" fill="url(#glass-gold)" opacity="0.5" />
      </g>

      {/* leading (the dark metal tracery between panes) */}
      <g stroke="color-mix(in oklab, var(--gold) 55%, transparent)" strokeWidth="1.4" fill="none">
        <path d="M120 4 C60 4 24 56 24 120 L24 396 L216 396 L216 120 C216 56 180 4 120 4 Z" />
        <path d="M120 4 L120 396" />
        <path d="M24 204 L216 204" />
        <path d="M72 120 L72 396" />
        <path d="M168 120 L168 396" />
        <circle cx="120" cy="90" r="26" />
      </g>
    </motion.svg>
  );
}
