import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { whySoftwareEngineering } from "@/lib/content";

export function WhySoftwareEngineering() {
  return (
    <section
      id="why-swe"
      aria-labelledby="why-swe-heading"
      className="border-border bg-card/20 border-y py-24 sm:py-32"
    >
      <Container className="max-w-4xl">
        <Reveal>
          <Eyebrow>{whySoftwareEngineering.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="why-swe-heading"
            className="text-display text-foreground mt-6"
          >
            {whySoftwareEngineering.title}
          </h2>
        </Reveal>
        <div className="text-subheading text-muted-foreground mt-8 space-y-5 leading-[1.7]">
          {whySoftwareEngineering.body.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.05 * (index + 1)}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
