import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { constellation } from "@/lib/content";

export function Constellation() {
  return (
    <section
      id="mind"
      aria-labelledby="mind-heading"
      className="py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow>{constellation.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="mind-heading"
            className="text-display text-foreground mt-6 max-w-2xl"
          >
            {constellation.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-subheading text-muted-foreground mt-5 max-w-[56ch]">
            {constellation.lede}
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-3">
          <svg
            className="pointer-events-none absolute inset-x-0 top-6 hidden h-px w-full sm:block"
            aria-hidden="true"
          >
            <line
              x1="16%"
              y1="0"
              x2="84%"
              y2="0"
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="2 6"
            />
          </svg>
          {constellation.stars.map((star, index) => (
            <Reveal key={star.name} delay={0.1 * index}>
              <article className="border-border bg-card/40 relative rounded-2xl border p-7">
                <span
                  className="bg-accent mx-auto flex h-2.5 w-2.5 rounded-full shadow-[0_0_16px_var(--gold)]"
                  aria-hidden="true"
                />
                <h3 className="text-subheading text-foreground mt-5 text-center">
                  {star.name}
                </h3>
                <p className="text-muted-foreground mt-3 text-center text-sm leading-relaxed">
                  {star.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
