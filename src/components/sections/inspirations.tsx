import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { inspirations } from "@/lib/content";

export function Inspirations() {
  return (
    <section id="inspirations" aria-labelledby="inspirations-heading" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow>{inspirations.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 id="inspirations-heading" className="mt-6 max-w-2xl text-display text-foreground">
            {inspirations.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-[62ch] text-subheading text-muted-foreground">
            {inspirations.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {inspirations.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.05 * index}>
              <div className="h-full bg-background p-8">
                <h3 className="text-subheading text-foreground">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
