import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import type { ReactNode } from "react";

export function ChapterProse({
  id,
  numeral,
  label,
  title,
  body,
  beat,
  after,
  decoration,
}: {
  id: string;
  numeral: string;
  label: string;
  title: string;
  body: string[];
  beat: string;
  after?: ReactNode;
  decoration?: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {decoration}
      <Container className="relative">
        <Reveal>
          <Eyebrow>Chapter {numeral}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id={`${id}-heading`}
            className="text-display text-foreground mt-6"
          >
            {label}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="text-heading text-muted-foreground mt-4 italic">
            {title}
          </h3>
        </Reveal>

        <Reveal delay={0.1} as="div">
          <div className="text-body text-muted-foreground mt-6 max-w-[68ch] space-y-4 leading-[1.8]">
            {body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <p className="border-accent font-display text-foreground mt-6 max-w-[68ch] border-l-2 pl-4 text-lg italic">
            {beat}
          </p>
        </Reveal>

        {after}
      </Container>
    </section>
  );
}
