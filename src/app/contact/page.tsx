import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Contact } from "@/components/sections/contact";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.lede,
};

export default function ContactPage() {
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

      <Contact />
    </>
  );
}
