# Agent notes for this repo

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui ·
Framer Motion · GSAP (ScrollTrigger) · Lenis · Lucide. A multi-page portfolio:
the homepage is just Hero, the origin story is a 4-chapter sequence at
`/story`, and Philosophy/Engineering/the Workshop/Contact each live on their
own standalone page — see `README.md` for the stack and structure overview.

## Content lives in one place

`src/lib/content.ts` is the single source of truth for every real sentence on
the site (story copy, chapter metadata, resume data, lore text). Don't
hardcode copy in components — add or edit it in `content.ts` and import it.
The `chapters` array there (numeral/id/label) is specifically `/story`'s
4-chapter sequence — it drives that page's headings and its side rail.
Philosophy/Engineering/Workshop/Contact aren't chapters; each pulls its
heading from its own content object (`philosophy.heading`,
`whySoftwareEngineering.heading`, `currentProject.name`, `contact.title`).
`primaryNav` is the single list of top-level site destinations, used by both
the desktop header and the mobile menu.

## Where things live

- `src/app/` — one route per top-level destination (`/`, `/story`,
  `/philosophy`, `/engineering`, `/work`, `/contact`, `/resume`). The four
  standalone-topic routes share a pattern: a `pt-32 pb-4` "← Back to the
  portfolio" strip, then the section component — copy that pattern for any
  new standalone page rather than inventing a new layout.
- `src/components/sections/` — one component per page's main content. These
  are route-agnostic (e.g. `Philosophy` doesn't know it's mounted at
  `/philosophy`) so they can be reused or re-mounted without edits.
- `src/components/motion/` — decorative/animated pieces (starfield, fog,
  cursor engine). These should degrade gracefully:
  check `prefers-reduced-motion` via `useReducedMotion()` (Framer Motion) or
  `window.matchMedia("(prefers-reduced-motion: reduce)")`, and gate anything
  cursor-following behind `(hover: hover) and (pointer: fine)` so touch/
  stylus devices get the untouched native experience.
- `src/components/layout/` — header, side rail, footer, toggles.
- `src/components/easter-eggs/` — opt-in hidden discoveries (Konami code,
  lore panel). These must never be required for core functionality and
  should stay easy to disable/ignore.
- `src/hooks/` — shared client-side hooks (`useActiveSection`,
  `useKonamiCode`, `useMagneticHover`). Check here before writing a new
  `IntersectionObserver`/`pointermove`/keydown listener from scratch.
- `src/lib/persisted-flag.ts` — the one helper for boolean localStorage
  flags (dismissed/unlocked/disabled state). Reuse it instead of hand-rolling
  `localStorage.getItem`/`setItem` elsewhere.
- `src/lib/cursor-events.ts` — the `CustomEvent` bridge used to trigger
  transient cursor states (loading/success/error) from components far from
  the globally-mounted cursor engine. Prefer this over prop-drilling or a
  new context for one-off cross-tree signals.

## Global chrome vs. homepage-only

`src/components/site-chrome.tsx` mounts everything global (header, side
rail, cursor engine, grain overlay) via `dynamic(..., { ssr: false })` inside
a `print:hidden` wrapper, since none of it should block hydration or show up
when printing. The narrative-only pieces (fog, the Konami easter egg)
are additionally gated behind `pathname === "/"` in
that same file — `/resume` stays clean. If you add a new global decorative
piece, follow this pattern rather than mounting it directly in a section.

## Workflow

- `npm run verify` runs the full local gate (format check, lint, typecheck,
  build) — run this before considering a change done.
- Husky's `pre-commit` runs `lint-staged` (ESLint + Prettier on staged
  files); `pre-push` runs `typecheck`. Don't bypass these with `--no-verify`.
- Nothing in this repo auto-commits or auto-pushes. Committing and pushing
  are always explicit, human-approved steps — there was a postbuild hook
  that did this automatically in the past; it was deliberately removed.
