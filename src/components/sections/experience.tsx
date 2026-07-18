import { Reveal } from "@/components/motion/reveal";
import { timeline } from "@/lib/content";

export function ExperienceTimeline() {
  return (
    <div className="mt-16">
      <Reveal>
        <h3 className="text-subheading text-foreground">
          Every role was a rehearsal.
        </h3>
      </Reveal>

      <ol className="border-border relative mt-10 space-y-10 border-l pl-8 sm:pl-10">
        {timeline.map((node, index) => (
          <Reveal key={node.title} delay={0.04 * index} as="li">
            <div className="relative">
              <span
                className="border-accent bg-background absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full border-2 sm:-left-[calc(2.5rem+5px)]"
                aria-hidden="true"
              />
              <span className="text-accent font-mono text-[10px] tracking-[0.24em] uppercase">
                {node.period}
              </span>
              <h4 className="text-subheading text-foreground mt-1.5">
                {node.title}
              </h4>
              <p className="text-muted-foreground mt-2 max-w-[60ch] text-sm leading-relaxed">
                {node.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
