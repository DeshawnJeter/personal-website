import { Reveal } from "@/components/motion/reveal";
import { inspirations } from "@/lib/content";

export function InspirationsGrid() {
  return (
    <div className="mt-16">
      <Reveal>
        <h3 className="text-subheading text-foreground">
          {inspirations.title}
        </h3>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="text-muted-foreground mt-3 max-w-[62ch] text-sm leading-relaxed">
          {inspirations.intro}
        </p>
      </Reveal>

      <div className="border-border bg-border mt-8 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2">
        {inspirations.pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={0.05 * index}>
            <div className="bg-background h-full p-8">
              <h4 className="text-subheading text-foreground">
                {pillar.title}
              </h4>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
