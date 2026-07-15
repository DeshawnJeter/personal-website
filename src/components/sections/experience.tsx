import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { timeline } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 id="experience-heading" className="mt-6 max-w-2xl text-display text-foreground">
            Every role was a rehearsal.
          </h2>
        </Reveal>

        <ol className="relative mt-16 space-y-10 border-l border-border pl-8 sm:pl-10">
          {timeline.map((node, index) => (
            <Reveal key={node.title} delay={0.04 * index} as="li">
              <div className="relative">
                <span
                  className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background sm:-left-[calc(2.5rem+5px)]"
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                  {node.period}
                </span>
                <h3 className="mt-1.5 text-subheading text-foreground">{node.title}</h3>
                <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
                  {node.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
