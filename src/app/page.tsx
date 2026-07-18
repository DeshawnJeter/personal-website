import { Hero } from "@/components/sections/hero";
import { Prologue } from "@/components/sections/prologue";
import { FirstSpark } from "@/components/sections/first-spark";
import { LearningToBuild } from "@/components/sections/learning-to-build";
import { FindingMyPeople } from "@/components/sections/finding-my-people";
import { Philosophy } from "@/components/sections/philosophy";
import { Engineering } from "@/components/sections/engineering";
import { CurrentProject } from "@/components/sections/current-project";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Prologue />
      <FirstSpark />
      <LearningToBuild />
      <FindingMyPeople />
      <Philosophy />
      <Engineering />
      <CurrentProject />
      <Contact />
    </>
  );
}
