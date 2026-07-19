"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { primaryNav, site } from "@/lib/content";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CursorToggle } from "@/components/layout/cursor-toggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-60 transition-[padding,border-color,background] duration-500 ${
        scrolled
          ? "border-border bg-background/85 border-b py-3 backdrop-blur-md"
          : "from-background/80 border-b border-transparent bg-gradient-to-b to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-foreground flex shrink-0 items-center gap-2.5 text-lg whitespace-nowrap"
        >
          <span
            className="border-accent h-2.5 w-2.5 shrink-0 rotate-45 border"
            aria-hidden="true"
          />
          Deshawn Jeter
        </Link>

        <nav
          className="text-foreground/70 hidden items-center gap-8 font-mono text-[11px] tracking-[0.22em] whitespace-nowrap uppercase lg:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent hidden font-mono text-[11px] tracking-[0.22em] uppercase transition-colors sm:inline-block"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent hidden font-mono text-[11px] tracking-[0.22em] uppercase transition-colors sm:inline-block"
          >
            LinkedIn
          </a>
          <CursorToggle />
          <ThemeToggle />
          <button
            type="button"
            className="border-border inline-flex h-9 w-9 items-center justify-center rounded-full border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-border bg-background/95 overflow-hidden border-t backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground/80 hover:bg-secondary hover:text-accent rounded-md px-2 py-2.5 font-mono text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="border-accent/60 text-accent mt-2 rounded-md border px-2 py-2.5 text-center font-mono text-xs tracking-[0.2em] uppercase"
              >
                Resume
              </Link>
              <div className="mt-1 flex gap-1">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-foreground/80 hover:bg-secondary hover:text-accent flex-1 rounded-md px-2 py-2.5 text-center font-mono text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-foreground/80 hover:bg-secondary hover:text-accent flex-1 rounded-md px-2 py-2.5 text-center font-mono text-xs tracking-[0.2em] uppercase transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
