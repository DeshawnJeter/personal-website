import { ChapterProse } from "@/components/sections/chapter-prose";
import { chapters, storyChapters } from "@/lib/content";

export function FirstSpark() {
  const chapter = chapters.find((c) => c.id === "first-spark")!;
  const story = storyChapters.find((c) => c.id === "keyboard")!;

  return (
    <ChapterProse
      id={chapter.id}
      numeral={chapter.numeral}
      label={chapter.label}
      title={story.title}
      body={story.body}
      beat={story.beat}
    />
  );
}
