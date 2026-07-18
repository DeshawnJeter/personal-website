import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { BeliefsGrid } from "@/components/sections/beliefs";
import { ConstellationGrid } from "@/components/sections/constellation";
import { philosophy } from "@/lib/content";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow>{philosophy.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="philosophy-heading"
            className="text-display text-foreground mt-6"
          >
            {philosophy.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="text-heading text-muted-foreground mt-4 italic">
            {philosophy.title}
          </h3>
        </Reveal>

        <div className="text-body text-muted-foreground mt-6 max-w-[68ch] space-y-4 leading-[1.8]">
          {philosophy.intro.map((paragraph, index) => (
            <Reveal
              key={paragraph.slice(0, 24)}
              delay={0.05 * (index + 1)}
              as="div"
            >
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <ol className="divide-border border-border mt-12 divide-y border-y">
          {philosophy.tenets.map((tenet, index) => (
            <Reveal key={tenet.roman} delay={0.04 * index} as="li">
              <div className="flex items-baseline gap-6 py-5">
                <span
                  className="text-accent font-mono text-xs"
                  aria-hidden="true"
                >
                  {tenet.roman}
                </span>
                <span className="text-subheading text-foreground">
                  {tenet.text}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>

        <BeliefsGrid />
        <ConstellationGrid />
      </Container>
    </section>
  );
}
