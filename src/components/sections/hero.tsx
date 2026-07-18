"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { CtaLink } from "@/components/ui/cta-link";
import { Container } from "@/components/ui/container";
import { CathedralArches } from "@/components/motion/cathedral-arches";

const Starfield = dynamic(
  () => import("@/components/motion/starfield").then((m) => m.Starfield),
  { ssr: false },
);
const HolographicJester = dynamic(
  () =>
    import("@/components/motion/holographic-jester").then(
      (m) => m.HolographicJester,
    ),
  { ssr: false },
);

const lineVariants = {
  hidden: { y: "110%" },
  visible: { y: "0%" },
};

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20"
    >
      <Starfield className="absolute inset-0 h-full w-full" />
      <CathedralArches className="pointer-events-none absolute inset-x-0 top-0 h-[42vh] w-full opacity-70" />
      <HolographicJester className="absolute top-[14%] right-[4%] hidden h-56 w-48 md:block lg:right-[8%] lg:h-64 lg:w-56" />
      <div
        className="to-background pointer-events-none absolute inset-x-0 bottom-0 h-[32vh] bg-gradient-to-b from-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-[2] text-center">
        <p className="text-accent mx-auto mb-6 flex w-fit items-center gap-3 font-mono text-[11px] tracking-[0.34em] uppercase">
          Creative technologist &amp; software engineer
        </p>

        <h1 className="text-hero text-foreground mx-auto max-w-4xl leading-[1.02]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Where imagination
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="text-accent block italic"
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              becomes architecture.
            </motion.span>
          </span>
        </h1>

        {/* Rendered immediately (no JS-driven fade) — this is the LCP
            candidate, and gating its paint behind Framer Motion state
            costs seconds under CPU-throttled conditions. */}
        <p className="text-subheading text-muted-foreground mx-auto mt-8 max-w-[48ch]">
          I don&rsquo;t just build software — I build experiences people
          remember. This site is less a list of projects and more an answer to
          why I build at all.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3.5"
        >
          <CtaLink href="#story" variant="solid">
            Explore my story
          </CtaLink>
          <CtaLink href="#work" variant="outline">
            Current project
          </CtaLink>
          <CtaLink href="/resume" variant="gold">
            View resume
          </CtaLink>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-muted-foreground absolute inset-x-0 bottom-8 z-[2] flex justify-center font-mono text-[10px] tracking-[0.3em] uppercase"
      >
        <span className="flex flex-col items-center gap-2">
          Scroll
          <span
            className="from-accent h-8 w-px bg-gradient-to-b to-transparent"
            aria-hidden="true"
          />
        </span>
      </motion.div>
    </section>
  );
}
