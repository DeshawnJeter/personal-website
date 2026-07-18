import Link from "next/link";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-border border-t">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-6 font-mono text-[11px] tracking-[0.2em] uppercase">
          <a
            href={`mailto:${site.email}`}
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
          <Link href="/resume" className="hover:text-accent transition-colors">
            Resume
          </Link>
          <a href="#hero" className="hover:text-accent transition-colors">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
