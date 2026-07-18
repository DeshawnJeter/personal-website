import { ChapterProse } from "@/components/sections/chapter-prose";
import { chapters, storyChapters } from "@/lib/content";

export function FindingMyPeople() {
  const chapter = chapters.find((c) => c.id === "finding-my-people")!;
  const story = storyChapters.find((c) => c.id === "family")!;

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
