import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { inspirations } from "@/lib/content";

export function Inspirations() {
  return (
    <section
      id="inspirations"
      aria-labelledby="inspirations-heading"
      className="py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow>{inspirations.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="inspirations-heading"
            className="text-display text-foreground mt-6 max-w-2xl"
          >
            {inspirations.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-subheading text-muted-foreground mt-5 max-w-[62ch]">
            {inspirations.intro}
          </p>
        </Reveal>

        <div className="border-border bg-border mt-14 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2">
          {inspirations.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.05 * index}>
              <div className="bg-background h-full p-8">
                <h3 className="text-subheading text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
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
