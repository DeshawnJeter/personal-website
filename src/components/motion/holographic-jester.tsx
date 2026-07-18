"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A quiet, translucent jester silhouette — a nod to comedy-as-observation
 * (see storyChapters "worlds") rendered as a holographic projection rather
 * than a mascot. Purely decorative; never competes with real content.
 */
export function HolographicJester({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  const float = reduceMotion
    ? undefined
    : {
        y: [0, -16, 0],
        rotate: [-2, 2, -2],
      };

  const flicker = reduceMotion
    ? undefined
    : {
        opacity: [0.96, 1, 0.97, 1, 0.96],
      };

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "pointer-events-none mix-blend-screen select-none",
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.svg
        viewBox="0 0 220 260"
        className="h-full w-full"
        animate={float}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="jester-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--violet)" />
            <stop offset="55%" stopColor="var(--gold)" />
            <stop offset="100%" stopColor="var(--violet)" />
          </linearGradient>
          <filter id="jester-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.g
          stroke="url(#jester-gradient)"
          strokeWidth="1.1"
          fill="none"
          filter="url(#jester-glow)"
          animate={flicker}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* three-pointed hat */}
          <path d="M60 92 C50 40, 78 18, 96 46 C104 22, 132 22, 130 50 C150 26, 172 44, 158 92" />
          <circle cx="60" cy="92" r="4" />
          <circle cx="130" cy="50" r="4" />
          <circle cx="158" cy="92" r="4" />

          {/* mask / face plane */}
          <path d="M52 96 Q109 76 166 96 L162 150 Q109 176 56 150 Z" />

          {/* diamond eyes */}
          <path d="M84 118 L94 128 L84 138 L74 128 Z" />
          <path d="M134 118 L144 128 L134 138 L124 128 Z" />

          {/* smile */}
          <path d="M86 148 Q109 164 132 148" />

          {/* collar ruff */}
          <path d="M40 160 Q109 190 178 160 L168 182 Q109 206 50 182 Z" />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}
