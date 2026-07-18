import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Prologue } from "@/components/sections/prologue";
import { FirstSpark } from "@/components/sections/first-spark";
import { LearningToBuild } from "@/components/sections/learning-to-build";
import { FindingMyPeople } from "@/components/sections/finding-my-people";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "From imagination to architecture — the story behind the engineer, one chapter at a time.",
};

export default function StoryPage() {
  return (
    <>
      <div className="pt-32 pb-4">
        <Container>
          <Link
            href="/"
            className="text-muted-foreground hover:text-accent font-mono text-[11px] tracking-[0.2em] uppercase"
          >
            ← Back to the portfolio
          </Link>
        </Container>
      </div>

      <Prologue />
      <FirstSpark />
      <LearningToBuild />
      <FindingMyPeople />

      <section className="py-24 sm:py-32">
        <Container className="text-center">
          <p className="text-subheading text-muted-foreground mx-auto max-w-[48ch]">
            The story keeps going — philosophy, engineering, and the workshop
            are next.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaLink href="/#philosophy" variant="solid">
              Continue to Philosophy →
            </CtaLink>
          </div>
        </Container>
      </section>
    </>
  );
}
