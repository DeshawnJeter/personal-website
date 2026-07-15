import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PrintButton } from "@/components/print-button";
import { site, resume, timeline, skillGalaxy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${site.name}, ${site.role.toLowerCase()}.`,
};

export default function ResumePage() {
  return (
    <div className="py-24 sm:py-28 print:py-0">
      <Container className="max-w-3xl">
        <div className="mb-10 flex items-center justify-between print:hidden">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent"
          >
            ← Back to the portfolio
          </Link>
          <PrintButton />
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-accent">
          {resume.eyebrow}
        </p>
        <h1 className="mt-4 text-display text-foreground">{site.name}</h1>
        <p className="mt-3 max-w-[60ch] text-subheading text-muted-foreground">
          {resume.summary}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-3 inline-block text-accent underline-offset-4 hover:underline"
        >
          {site.email}
        </a>

        <section className="mt-12" aria-labelledby="resume-strengths">
          <h2 id="resume-strengths" className="text-heading text-foreground">
            Core strengths
          </h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {resume.strengths.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="resume-experience">
          <h2 id="resume-experience" className="text-heading text-foreground">
            Experience
          </h2>
          <p className="mt-4 text-muted-foreground">{resume.experienceSummary}</p>
          <ol className="mt-6 space-y-5 border-l border-border pl-6">
            {timeline.map((node) => (
              <li key={node.title}>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {node.period}
                </span>
                <h3 className="text-subheading text-foreground">{node.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{node.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12" aria-labelledby="resume-credentials">
          <h2 id="resume-credentials" className="text-heading text-foreground">
            Credentials
          </h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {resume.credentials.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="resume-skills">
          <h2 id="resume-skills" className="text-heading text-foreground">
            Technical skills
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skillGalaxy.planets.map((planet) => (
              <span
                key={planet.name}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
              >
                {planet.name}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-8" aria-labelledby="resume-contact">
          <h2 id="resume-contact" className="sr-only">
            Contact
          </h2>
          <Link
            href="/#contact"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent underline-offset-4 hover:underline"
          >
            Get in touch →
          </Link>
        </section>
      </Container>
    </div>
  );
}
