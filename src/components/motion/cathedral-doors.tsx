"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CathedralArches } from "@/components/motion/cathedral-arches";

const EASE = [0.16, 1, 0.3, 1] as const;

const panelClasses =
  "absolute inset-y-0 w-1/2 bg-gradient-to-b from-[var(--navy)] via-[var(--obsidian)] to-[var(--void)]";

export function CathedralDoors() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(true);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0.25 : 0.6;

  useEffect(() => {
    document.body.style.overflow = mounted ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="bg-background fixed inset-0 z-[100]" aria-hidden={open}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={open}
        aria-label="Open the cathedral doors and enter the site"
        className="focus-visible:outline-accent relative block h-full w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px]"
      >
        <CathedralArches className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/3 w-full opacity-70" />

        <motion.span
          aria-hidden="true"
          initial={false}
          animate={{ x: open ? "-100%" : "0%" }}
          transition={{ duration, ease: EASE }}
          onAnimationComplete={() => {
            if (!open) return;
            setMounted(false);
            document.getElementById("main")?.focus();
          }}
          className={cn(panelClasses, "border-accent/40 left-0 border-r")}
        >
          <span
            aria-hidden="true"
            className="border-accent/20 absolute inset-4 rounded-sm border"
          />
          <span
            aria-hidden="true"
            className="border-accent/70 absolute top-1/2 right-6 h-10 w-10 -translate-y-1/2 rounded-full border-2 sm:h-12 sm:w-12"
          />
        </motion.span>

        <motion.span
          aria-hidden="true"
          initial={false}
          animate={{ x: open ? "100%" : "0%" }}
          transition={{ duration, ease: EASE }}
          className={cn(panelClasses, "border-accent/40 right-0 border-l")}
        >
          <span
            aria-hidden="true"
            className="border-accent/20 absolute inset-4 rounded-sm border"
          />
          <span
            aria-hidden="true"
            className="border-accent/70 absolute top-1/2 left-6 h-10 w-10 -translate-y-1/2 rounded-full border-2 sm:h-12 sm:w-12"
          />
        </motion.span>
      </button>
    </div>
  );
}
