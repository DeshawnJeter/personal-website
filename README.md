# Personal Website

DeShawn Jeter's portfolio — a Next.js site built around who he is and how he
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
