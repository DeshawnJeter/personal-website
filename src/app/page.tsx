import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Beliefs } from "@/components/sections/beliefs";
import { Constellation } from "@/components/sections/constellation";
import { WhySoftwareEngineering } from "@/components/sections/why-swe";
import { Philosophy } from "@/components/sections/philosophy";
import { Skills } from "@/components/sections/skills";
import { CurrentProject } from "@/components/sections/current-project";
import { Inspirations } from "@/components/sections/inspirations";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Beliefs />
      <Constellation />
      <WhySoftwareEngineering />
      <Philosophy />
      <Skills />
      <CurrentProject />
      <Inspirations />
      <Experience />
      <Contact />
    </>
  );
}
