import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { beliefs } from "@/lib/content";

export function Beliefs() {
  return (
    <section aria-labelledby="beliefs-heading" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Core beliefs</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 id="beliefs-heading" className="mt-6 max-w-2xl text-display text-foreground">
            Three things I build everything on.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {beliefs.map((belief, index) => (
            <Reveal key={belief.title} delay={0.08 * index}>
              <article
                tabIndex={0}
                className="group h-full rounded-2xl border border-border bg-card/40 p-7 transition-colors focus-visible:border-accent hover:border-accent/50"
              >
                <span className="font-display text-2xl text-accent">{belief.numeral}</span>
                <h3 className="mt-4 text-subheading text-foreground">{belief.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{belief.lede}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/0 max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:text-muted-foreground/90 group-focus-visible:max-h-40 group-focus-visible:text-muted-foreground/90">
                  {belief.more}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
