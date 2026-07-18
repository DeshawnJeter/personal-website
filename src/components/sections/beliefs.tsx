import { Reveal } from "@/components/motion/reveal";
import { beliefs } from "@/lib/content";

export function BeliefsGrid() {
  return (
    <div className="mt-16">
      <Reveal>
        <h3 className="text-subheading text-foreground">
          Three things I build everything on.
        </h3>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {beliefs.map((belief, index) => (
          <Reveal key={belief.title} delay={0.08 * index}>
            <article
              tabIndex={0}
              className="group border-border bg-card/40 focus-visible:border-accent hover:border-accent/50 h-full rounded-2xl border p-7 transition-colors"
            >
              <span className="font-display text-accent text-2xl">
                {belief.numeral}
              </span>
              <h4 className="text-subheading text-foreground mt-4">
                {belief.title}
              </h4>
              <p className="text-muted-foreground mt-3 text-sm">
                {belief.lede}
              </p>
              <p className="text-muted-foreground/0 group-hover:text-muted-foreground/90 group-focus-visible:text-muted-foreground/90 mt-4 max-h-0 overflow-hidden text-sm leading-relaxed transition-all duration-500 group-hover:max-h-40 group-focus-visible:max-h-40">
                {belief.more}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
