import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CurrentProject } from "@/components/sections/current-project";
import { currentProject } from "@/lib/content";

export const metadata: Metadata = {
  title: "Current Project",
  description: currentProject.tagline,
};

export default function WorkPage() {
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

      <CurrentProject />
    </>
  );
}
