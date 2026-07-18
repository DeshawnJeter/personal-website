import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Philosophy } from "@/components/sections/philosophy";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "The engineering philosophy behind the work — what I build everything on.",
};

export default function PhilosophyPage() {
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

      <Philosophy />
    </>
  );
}
