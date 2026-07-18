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
            className="text-muted-foreground hover:text-accent font-mono text-[11px] tracking-[0.2em] uppercase"
          >
            ← Back to the portfolio
          </Link>
          <PrintButton />
        </div>

        <p className="text-accent font-mono text-[11px] tracking-[0.34em] uppercase">
          {resume.eyebrow}
        </p>
        <h1 className="text-display text-foreground mt-4">{site.name}</h1>
        <p className="text-subheading text-muted-foreground mt-3 max-w-[60ch]">
          {resume.summary}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="text-accent mt-3 inline-block underline-offset-4 hover:underline"
        >
          {site.email}
        </a>

        <section className="mt-12" aria-labelledby="resume-strengths">
          <h2 id="resume-strengths" className="text-heading text-foreground">
            Core strengths
          </h2>
          <ul className="text-muted-foreground mt-4 space-y-2">
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
          <p className="text-muted-foreground mt-4">
            {resume.experienceSummary}
          </p>
          <ol className="border-border mt-6 space-y-5 border-l pl-6">
            {timeline.map((node) => (
              <li key={node.title}>
                <span className="text-accent font-mono text-[10px] tracking-[0.2em] uppercase">
                  {node.period}
                </span>
                <h3 className="text-subheading text-foreground">
                  {node.title}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {node.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12" aria-labelledby="resume-credentials">
          <h2 id="resume-credentials" className="text-heading text-foreground">
            Credentials
          </h2>
          <ul className="text-muted-foreground mt-4 space-y-2">
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
                className="border-border text-muted-foreground rounded-full border px-3 py-1 text-sm"
              >
                {planet.name}
              </span>
            ))}
          </div>
        </section>

        <section
          className="border-border mt-12 border-t pt-8"
          aria-labelledby="resume-contact"
        >
          <h2 id="resume-contact" className="sr-only">
            Contact
          </h2>
          <Link
            href="/#contact"
            className="text-accent font-mono text-[11px] tracking-[0.2em] uppercase underline-offset-4 hover:underline"
          >
            Get in touch →
          </Link>
        </section>
      </Container>
    </div>
  );
}
