import { Reveal } from "@/components/motion/reveal";
import { constellation } from "@/lib/content";

export function ConstellationGrid() {
  return (
    <div className="mt-16">
      <Reveal>
        <h3 className="text-subheading text-foreground">
          {constellation.title}
        </h3>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="text-muted-foreground mt-3 max-w-[56ch] text-sm leading-relaxed">
          {constellation.lede}
        </p>
      </Reveal>

      <div className="relative mt-10 grid gap-8 sm:grid-cols-3">
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
              <h4 className="text-subheading text-foreground mt-5 text-center">
                {star.name}
              </h4>
              <p className="text-muted-foreground mt-3 text-center text-sm leading-relaxed">
                {star.detail}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
