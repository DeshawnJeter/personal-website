import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Engineering } from "@/components/sections/engineering";
import { CurrentProject } from "@/components/sections/current-project";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Engineering />
      <CurrentProject />
      <Contact />
    </>
  );
}
