"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Raven } from "@/components/motion/raven";
import { LorePanel } from "@/components/easter-eggs/lore-panel";
import { useKonamiCode } from "@/hooks/use-konami-code";
import { getFlag, setFlag } from "@/lib/persisted-flag";

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  );
}

export function KonamiEasterEgg() {
  const [unlocked, setUnlocked] = useState(false);
  const [loreOpen, setLoreOpen] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    setUnlocked(getFlag("konami-found"));

    console.log(
      "%cYou opened the console. A cathedral rewards curiosity.",
      "color: #d4af37; font-family: monospace; font-size: 12px;",
    );
    console.log(
      "%cTry an old cheat code. Or just press ?.",
      "color: #b300b3; font-family: monospace; font-size: 12px;",
    );
  }, []);

  useKonamiCode(() => {
    const alreadyFound = getFlag("konami-found");
    setFlag("konami-found");
    setUnlocked(true);
    setLoreOpen(true);
    if (!alreadyFound) {
      setToast(true);
      setTimeout(() => setToast(false), 4500);
    }
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) return;
      if (event.key === "?") {
        setLoreOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {unlocked && <Raven mode="companion" />}
      <LorePanel open={loreOpen} onOpenChange={setLoreOpen} />
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border-border bg-card/90 fixed bottom-4 left-4 z-[80] max-w-[240px] rounded-2xl border px-4 py-3 text-sm shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6"
            role="status"
          >
            <p className="text-foreground">You found the raven.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
