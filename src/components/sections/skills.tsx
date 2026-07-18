import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { skillGalaxy } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow>{skillGalaxy.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="skills-heading"
            className="text-display text-foreground mt-6 max-w-2xl"
          >
            {skillGalaxy.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-subheading text-muted-foreground mt-5 max-w-[56ch]">
            {skillGalaxy.lede}
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGalaxy.planets.map((planet, index) => (
            <Reveal key={planet.name} delay={0.04 * index} as="li">
              <div className="group border-border bg-card/30 hover:border-cyan/60 focus-within:border-cyan/60 h-full rounded-xl border p-6 transition-colors">
                <span className="text-cyan font-mono text-[10px] tracking-[0.24em] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-subheading text-foreground mt-2">
                  {planet.name}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
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
