"use client";

import { Dialog } from "radix-ui";
import { loreText } from "@/lib/content";

export function LorePanel({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm" />
        <Dialog.Content
          className="border-border bg-card fixed top-1/2 left-1/2 z-[91] w-[min(92vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-8 shadow-2xl focus:outline-none"
          aria-describedby="lore-panel-description"
        >
          <Dialog.Title className="text-heading font-display text-foreground">
            The lore behind the cathedral
          </Dialog.Title>
          <div
            id="lore-panel-description"
            className="text-muted-foreground mt-4 space-y-4 text-sm leading-relaxed"
          >
            {loreText.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <Dialog.Close
            aria-label="Close"
            className="border-border text-muted-foreground hover:border-accent hover:text-accent absolute top-4 right-4 rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors"
          >
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
