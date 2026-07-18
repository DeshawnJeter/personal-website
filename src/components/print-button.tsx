"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border-accent/60 text-accent hover:bg-accent/10 rounded-sm border px-4 py-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors"
    >
      Print / Save as PDF
    </button>
  );
}
