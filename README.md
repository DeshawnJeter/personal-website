# Personal Website

Deshawn Jeter's portfolio — a Next.js site built around who he is and how he
works, not just a list of projects.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui ·
Framer Motion · GSAP (ScrollTrigger) · Lenis · Lucide

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000. The resume lives at `/resume` and prints
cleanly via its own print stylesheet.

## Project structure

- `src/lib/content.ts` — single source of truth for all real copy (story,
  experience, skills, current project, resume). Edit content here, not in
  the components.
- `src/components/sections/` — one component per homepage section.
- `src/components/layout/` — header, side rail, footer, cursor, grain.
- `src/components/motion/` — Framer Motion reveal wrapper, Lenis/GSAP smooth
  scroll, canvas starfield.
- `legacy-static/` — the previous static HTML/CSS/JS version of this site,
  kept for reference.
- `public/framefeast/` — the standalone FrameFeast landing page, served as
  a static asset and linked from the Current Project section.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run format` / `npm run format:check` — Prettier (writes / checks only)
- `npm run typecheck` — `tsc --noEmit`
- `npm run verify` — the full local gate (format check, lint, typecheck,
  build); run this before considering a milestone done

## Tooling

- **Husky** runs a `pre-commit` hook (`lint-staged` — ESLint + Prettier on
  staged files) and a `pre-push` hook (`typecheck`).
- **GitHub Actions** (`.github/workflows/ci.yml`) re-runs format check, lint,
  typecheck, and build on every push/PR to `main`.
- Commits and pushes are always a manual, explicit step — nothing in this
  repo auto-commits or auto-pushes on your behalf.
