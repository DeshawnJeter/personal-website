import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { skillGalaxy } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow>{skillGalaxy.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 id="skills-heading" className="mt-6 max-w-2xl text-display text-foreground">
            {skillGalaxy.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-[56ch] text-subheading text-muted-foreground">
            {skillGalaxy.lede}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGalaxy.planets.map((planet, index) => (
            <Reveal key={planet.name} delay={0.04 * index} as="li">
              <div className="group h-full rounded-xl border border-border bg-card/30 p-6 transition-colors hover:border-cyan/60 focus-within:border-cyan/60">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-subheading text-foreground">{planet.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {planet.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
