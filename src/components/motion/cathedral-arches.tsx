import { cn } from "@/lib/utils";

/**
 * Vaulted-ceiling rib lines, rendered as thin converging strokes fading
 * toward the floor of the section — a quiet architectural echo, not a set
 * piece. Static (no motion) so it never fights for attention with content.
 */
export function CathedralArches({ className }: { className?: string }) {
  const ribs = [
    "M120 0 C40 90, 10 220, -60 420",
    "M120 0 C70 100, 50 240, 0 440",
    "M120 0 C110 120, 108 260, 100 460",
    "M120 0 C130 120, 132 260, 140 460",
    "M120 0 C170 100, 190 240, 240 440",
    "M120 0 C200 90, 230 220, 300 420",
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 460"
      preserveAspectRatio="none"
      className={cn("pointer-events-none select-none", className)}
    >
      <defs>
        <linearGradient id="rib-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#rib-fade)" strokeWidth="1">
        {ribs.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
}
