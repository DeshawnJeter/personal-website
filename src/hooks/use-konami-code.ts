"use client";

import { useEffect, useRef } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  );
}

export function useKonamiCode(onUnlock: () => void) {
  const progress = useRef(0);
  const onUnlockRef = useRef(onUnlock);
  onUnlockRef.current = onUnlock;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) return;

      const expected = KONAMI_SEQUENCE[progress.current];
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (key === expected) {
        progress.current += 1;
        if (progress.current === KONAMI_SEQUENCE.length) {
          progress.current = 0;
          onUnlockRef.current();
        }
      } else {
        progress.current = key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
}
