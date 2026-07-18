import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
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
        <h2 id="philosophy-heading" className="sr-only">
          {philosophy.title}
        </h2>
        <ol className="divide-border border-border mt-10 divide-y border-y">
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
      </Container>
    </section>
  );
}
