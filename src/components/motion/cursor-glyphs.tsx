import { motion } from "framer-motion";

/**
 * One shared gradient + glow filter, reused by every cursor glyph — the same
 * violet/gold gradient + feGaussianBlur/feMerge glow technique already
 * established in holographic-jester.tsx and stained-glass.tsx, so the
 * cursor engine reads as part of the same world rather than a new style.
 */
export function CursorGlyphDefs() {
  return (
    <defs>
      <linearGradient id="cursor-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--violet)" />
        <stop offset="55%" stopColor="var(--gold)" />
        <stop offset="100%" stopColor="var(--violet)" />
      </linearGradient>
      <filter id="cursor-glow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="1.6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

const glyphProps = {
  stroke: "url(#cursor-gradient)",
  strokeWidth: 1.4,
  fill: "none",
  filter: "url(#cursor-glow)",
} as const;

export function Crystal() {
  return (
    <motion.g
      {...glyphProps}
      animate={{ rotate: [0, 8, 0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "20px 20px" }}
    >
      <path d="M20 4 L32 16 L20 36 L8 16 Z" />
      <path d="M8 16 L32 16" />
      <path d="M20 4 L20 36" opacity="0.5" />
    </motion.g>
  );
}

export function MiniJester() {
  return (
    <motion.g
      {...glyphProps}
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M11 20 C9 10, 16 6, 20 12 C22 6, 30 6, 29 12 C34 8, 39 12, 34 20" />
      <path d="M9 22 Q20 15 31 22 L29 30 Q20 35 11 30 Z" />
      <path d="M15 24 L17 26 L15 28" />
      <path d="M25 24 L23 26 L25 28" />
    </motion.g>
  );
}

export function Sigil() {
  return (
    <motion.g
      {...glyphProps}
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "20px 20px" }}
    >
      <circle cx="20" cy="20" r="13" />
      <path d="M20 7 L20 33 M7 20 L33 20 M11 11 L29 29 M29 11 L11 29" />
    </motion.g>
  );
}

export function Quill() {
  return (
    <motion.g
      {...glyphProps}
      animate={{ rotate: [-4, 4, -4] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "20px 28px" }}
    >
      <path d="M28 8 C18 12, 12 22, 10 32 C20 30, 28 24, 30 12 Z" />
      <path d="M10 32 L16 26" />
      <path d="M14 22 L22 16" />
    </motion.g>
  );
}

export function TarotWheel() {
  return (
    <motion.g
      {...glyphProps}
      animate={{ rotate: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "20px 20px" }}
    >
      <circle cx="20" cy="20" r="13" />
      <circle cx="20" cy="20" r="5" />
      <path d="M20 7 L20 15 M20 25 L20 33 M7 20 L15 20 M25 20 L33 20" />
      <path d="M10 10 L15 15 M30 10 L25 15 M10 30 L15 25 M30 30 L25 25" />
    </motion.g>
  );
}

export function Flower() {
  return (
    <motion.g
      {...glyphProps}
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "20px 20px" }}
    >
      <circle cx="20" cy="20" r="3.5" />
      <circle cx="20" cy="10" r="5" />
      <circle cx="20" cy="30" r="5" />
      <circle cx="10" cy="20" r="5" />
      <circle cx="30" cy="20" r="5" />
      <circle cx="13" cy="13" r="4.5" />
      <circle cx="27" cy="27" r="4.5" />
    </motion.g>
  );
}

export function Shard() {
  return (
    <motion.g
      {...glyphProps}
      initial={{ opacity: 0, rotate: -6 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <path d="M20 4 L30 18 L22 20 L26 36 L14 22 L18 18 L10 16 Z" />
      <path d="M20 4 L18 18" opacity="0.5" />
      <path d="M22 20 L14 22" opacity="0.5" />
    </motion.g>
  );
}

export function EnergyRing() {
  return (
    <motion.g
      {...glyphProps}
      animate={{ scale: [1, 1.12, 1], rotate: 360 }}
      transition={{
        scale: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
      }}
      style={{ transformOrigin: "20px 20px" }}
    >
      <circle cx="20" cy="20" r="12" strokeDasharray="4 4" />
      <circle
        cx="20"
        cy="20"
        r="2"
        fill="url(#cursor-gradient)"
        stroke="none"
      />
    </motion.g>
  );
}
