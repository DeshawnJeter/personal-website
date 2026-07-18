import { ChapterProse } from "@/components/sections/chapter-prose";
import { ExperienceTimeline } from "@/components/sections/experience";
import { chapters, storyChapters } from "@/lib/content";

export function LearningToBuild() {
  const chapter = chapters.find((c) => c.id === "learning-to-build")!;
  const story = storyChapters.find((c) => c.id === "real-world")!;

  return (
    <ChapterProse
      id={chapter.id}
      numeral={chapter.numeral}
      label={chapter.label}
      title={story.title}
      body={story.body}
      beat={story.beat}
      after={<ExperienceTimeline />}
    />
  );
}
