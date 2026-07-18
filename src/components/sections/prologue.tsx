import { ChapterProse } from "@/components/sections/chapter-prose";
import { InspirationsGrid } from "@/components/sections/inspirations";
import { StainedGlass } from "@/components/motion/stained-glass";
import { chapters, storyChapters } from "@/lib/content";

export function Prologue() {
  const chapter = chapters.find((c) => c.id === "prologue")!;
  const story = storyChapters.find((c) => c.id === "worlds")!;

  return (
    <ChapterProse
      id={chapter.id}
      numeral={chapter.numeral}
      label={chapter.label}
      title={story.title}
      body={story.body}
      beat={story.beat}
      decoration={
        <StainedGlass className="pointer-events-none absolute top-8 -right-16 hidden h-[420px] w-[260px] opacity-30 lg:block" />
      }
      after={<InspirationsGrid />}
    />
  );
}
