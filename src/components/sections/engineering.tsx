import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { SkillsGrid } from "@/components/sections/skills";
import { whySoftwareEngineering } from "@/lib/content";

export function Engineering() {
  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="border-border bg-card/20 border-y py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow>{whySoftwareEngineering.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="engineering-heading"
            className="text-display text-foreground mt-6"
          >
            {whySoftwareEngineering.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="text-heading text-muted-foreground mt-4 max-w-[68ch] italic">
            {whySoftwareEngineering.title}
          </h3>
        </Reveal>
        <div className="text-subheading text-muted-foreground mt-8 max-w-[68ch] space-y-5 leading-[1.7]">
          {whySoftwareEngineering.body.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.05 * (index + 1)}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <SkillsGrid />
      </Container>
    </section>
  );
}
