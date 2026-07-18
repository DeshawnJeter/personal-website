import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Engineering } from "@/components/sections/engineering";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Why software engineering — the bridge that connected everything else.",
};

export default function EngineeringPage() {
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

      <Engineering />
    </>
  );
}
