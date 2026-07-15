import Link from "next/link";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.2em]">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
            Email
          </a>
          <Link href="/resume" className="transition-colors hover:text-accent">
            Resume
          </Link>
          <a href="#hero" className="transition-colors hover:text-accent">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
