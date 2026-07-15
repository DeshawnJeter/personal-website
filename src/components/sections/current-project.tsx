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
      className="border-y border-border bg-card/20 py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <Eyebrow>{currentProject.eyebrow}</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Reveal>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-warning">
                In progress — not a finished product
              </span>
              <h2 id="work-heading" className="mt-3 text-display text-foreground">
                {currentProject.name}
              </h2>
              <p className="mt-2 text-subheading text-muted-foreground">
                {currentProject.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-6 max-w-[62ch] text-body leading-[1.8] text-muted-foreground">
                {currentProject.summary}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap gap-2">
                {currentProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.2em]">
                <a
                  href={currentProject.links.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Live preview ↗
                </a>
                <a
                  href={currentProject.links.github}
                  className="text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
                >
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-background/40">
              <Image
                src="/images/framefeast-characters.svg"
                alt="Illustrated character art from the FrameFeast cooking app"
                width={640}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {journeyGroups.map((group, index) => (
            <Reveal key={group.label} delay={0.04 * index}>
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  {group.label}
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
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
