"use client";

import { useEffect, useState } from "react";
import { MousePointer2, MousePointer2Off } from "lucide-react";
import { getFlag, setFlag } from "@/lib/persisted-flag";
import { toggleCursorEngine } from "@/lib/cursor-events";

export function CursorToggle() {
  const [disabled, setDisabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDisabled(getFlag("cursor-disabled"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !disabled;
    setDisabled(next);
    setFlag("cursor-disabled", next);
    toggleCursorEngine(!next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        disabled ? "Enable the custom cursor" : "Disable the custom cursor"
      }
      aria-pressed={!disabled}
      className="border-border text-foreground/80 hover:border-accent hover:text-accent hidden h-9 w-9 items-center justify-center rounded-full border transition-colors sm:inline-flex"
    >
      {mounted && disabled ? (
        <MousePointer2Off className="h-4 w-4" aria-hidden="true" />
      ) : (
        <MousePointer2 className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
