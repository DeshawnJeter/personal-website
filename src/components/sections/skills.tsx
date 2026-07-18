import { Reveal } from "@/components/motion/reveal";
import { skillGalaxy } from "@/lib/content";

export function SkillsGrid() {
  return (
    <div className="mt-16">
      <Reveal>
        <h3 className="text-subheading text-foreground">{skillGalaxy.title}</h3>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="text-muted-foreground mt-3 max-w-[56ch] text-sm leading-relaxed">
          {skillGalaxy.lede}
        </p>
      </Reveal>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGalaxy.planets.map((planet, index) => (
          <Reveal key={planet.name} delay={0.04 * index} as="li">
            <div className="group border-border bg-card/30 hover:border-cyan/60 focus-within:border-cyan/60 h-full rounded-xl border p-6 transition-colors">
              <span className="text-cyan font-mono text-[10px] tracking-[0.24em] uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="text-subheading text-foreground mt-2">
                {planet.name}
              </h4>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {planet.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
