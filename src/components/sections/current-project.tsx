import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { currentProject } from "@/lib/content";

const journeyGroups: { label: string; items: string[] }[] = [
  { label: "The problem", items: [currentProject.problem] },
  { label: "What I'm exploring", items: currentProject.exploring },
  { label: "Design decisions", items: currentProject.decisions },
  { label: "Challenges", items: currentProject.challenges },
  { label: "Lessons so far", items: currentProject.lessons },
  { label: "Next steps", items: currentProject.next },
];

export function CurrentProject() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-border bg-card/20 border-y py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow>{currentProject.eyebrow}</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Reveal>
              <span className="text-warning font-mono text-[10px] tracking-[0.24em] uppercase">
                In progress — not a finished product
              </span>
              <h2
                id="work-heading"
                className="text-display text-foreground mt-3"
              >
                {currentProject.name}
              </h2>
              <p className="text-subheading text-muted-foreground mt-2">
                {currentProject.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-body text-muted-foreground mt-6 max-w-[62ch] leading-[1.8]">
                {currentProject.summary}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap gap-2">
                {currentProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border-border text-muted-foreground rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.18em] uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 flex flex-wrap gap-4 font-mono text-[11px] tracking-[0.2em] uppercase">
                <a
                  href={currentProject.links.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Live preview ↗
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="border-border bg-background/40 relative overflow-hidden rounded-2xl border">
              <Image
                src="/images/framefeast-characters.png"
                alt="The five original FrameFeast guide characters — Chef Phantom, Ember, Dr. Frost, Sage, and Blade — from the app's 'Choose Your Guide' screen"
                width={1480}
                height={580}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="border-border mt-16 grid gap-6 border-t pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {journeyGroups.map((group, index) => (
            <Reveal key={group.label} delay={0.04 * index}>
              <div>
                <h3 className="text-accent font-mono text-[10px] tracking-[0.22em] uppercase">
                  {group.label}
                </h3>
                <ul className="text-muted-foreground mt-3 space-y-2 text-sm leading-relaxed">
                  {group.items.map((item) => (
                    <li key={item.slice(0, 24)} className="flex gap-2">
                      <span aria-hidden="true">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
