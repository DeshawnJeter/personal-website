import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { StainedGlass } from "@/components/motion/stained-glass";
import { storyChapters } from "@/lib/content";

export function Story() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <StainedGlass className="pointer-events-none absolute -right-16 top-8 hidden h-[420px] w-[260px] opacity-30 lg:block" />
      <Container className="relative">
        <Reveal>
          <Eyebrow>Five moments that built me</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 id="story-heading" className="mt-6 text-display text-foreground">
            Not a biography.
            <br />
            <em className="not-italic text-accent italic">A film in five moments.</em>
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16">
          {storyChapters.map((chapter, index) => (
            <Reveal key={chapter.id} delay={0.05} as="div">
              <article className="grid gap-6 border-t border-border pt-10 sm:grid-cols-[80px_1fr] sm:gap-10">
                <span className="font-mono text-sm text-accent" aria-hidden="true">
                  {chapter.eyebrow} / 0{index + 1}
                </span>
                <div>
                  <h3 className="text-heading text-foreground">{chapter.title}</h3>
                  <div className="mt-4 space-y-4 max-w-[68ch] text-body leading-[1.8] text-muted-foreground">
                    {chapter.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </div>
                  <p className="mt-6 border-l-2 border-accent pl-4 font-display text-lg italic text-foreground">
                    {chapter.beat}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
