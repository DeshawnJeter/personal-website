"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, primaryNav } from "@/lib/content";
import { ThemeToggle } from "@/components/layout/theme-toggle";

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
          ? "border-b border-border bg-background/85 py-3 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-background/80 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap font-display text-lg text-foreground"
        >
          <span className="h-2.5 w-2.5 shrink-0 rotate-45 border border-accent" aria-hidden="true" />
          DeShawn Jeter
        </Link>

        <nav
          className="hidden items-center gap-8 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70 lg:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/resume"
            className="hidden rounded-sm border border-accent/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent/10 sm:inline-block"
          >
            Resume
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
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
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:bg-secondary hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md border border-accent/60 px-2 py-2.5 text-center font-mono text-xs uppercase tracking-[0.2em] text-accent"
              >
                Resume
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
