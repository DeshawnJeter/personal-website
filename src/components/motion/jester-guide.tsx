"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HolographicJester } from "@/components/motion/holographic-jester";
import { useActiveSection } from "@/hooks/use-active-section";
import { chapters, jesterLines } from "@/lib/content";
import { getFlag, setFlag } from "@/lib/persisted-flag";

const SECTION_IDS = ["hero", ...chapters.map((c) => c.id)];
const VISIBLE_MS = 4800;

// Only ever mounted on the homepage — see the pathname guard in
// `site-chrome.tsx`, which gates this alongside the other narrative-only
// decoration (fog, ambient raven, Konami easter egg).
export function JesterGuide() {
  const reduceMotion = useReducedMotion();
  const activeId = useActiveSection(SECTION_IDS);
  const [dismissed, setDismissed] = useState(true);
  const [visible, setVisible] = useState(false);
  const [caption, setCaption] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastShownFor = useRef<string | null>(null);

  useEffect(() => {
    setDismissed(getFlag("jester-dismissed"));
  }, []);

  useEffect(() => {
    if (dismissed || !activeId) return;
    if (lastShownFor.current === activeId) return;
    lastShownFor.current = activeId;

    const line = jesterLines.chapters[activeId];
    if (!line) return;

    setCaption(line);
    setVisible(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setVisible(false), VISIBLE_MS);
  }, [activeId, dismissed]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (dismissed) return null;

  const handleJesterClick = () => {
    const asides = jesterLines.asides;
    const pick = asides[Math.floor(Math.random() * asides.length)];
    setCaption(pick ?? "");
    setVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setVisible(false), VISIBLE_MS);
  };

  const handleDismiss = () => {
    setFlag("jester-dismissed");
    setDismissed(true);
  };

  return (
    <div
      className="fixed right-4 bottom-4 z-[65] flex items-end gap-2 sm:right-6 sm:bottom-6"
      aria-live="polite"
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={
              reduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.96 }
            }
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border-border bg-card/90 relative max-w-[220px] rounded-2xl border px-4 py-3 text-sm leading-snug shadow-lg backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Hide the jester guide"
              className="text-muted-foreground hover:text-accent absolute top-1.5 right-1.5 text-[10px] leading-none"
            >
              ✕
            </button>
            <p className="text-foreground pr-3">{caption}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={handleJesterClick}
        aria-label="The jester, your guide through this site"
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        animate={
          reduceMotion
            ? undefined
            : { opacity: visible ? 1 : 0, scale: visible ? 1 : 0.85 }
        }
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: visible ? "auto" : "none" }}
        className="h-16 w-14 shrink-0"
      >
        <HolographicJester className="h-full w-full" />
      </motion.button>
    </div>
  );
}
