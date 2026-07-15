"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-sm border border-accent/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent/10"
    >
      Print / Save as PDF
    </button>
  );
}
