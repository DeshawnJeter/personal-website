"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { chapters, contact, site } from "@/lib/content";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(
      `Hey DeShawn — from ${name || "your site"}`,
    );
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const chapter = chapters.find((c) => c.id === "contact")!;

  return (
    <section
      id={chapter.id}
      aria-labelledby="contact-heading"
      className="py-24 sm:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>Chapter {chapter.numeral}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="contact-heading"
              className="text-display text-foreground mt-6"
            >
              {chapter.label}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-heading text-muted-foreground mt-4 italic">
              {contact.title}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-subheading text-muted-foreground mt-5 max-w-[48ch]">
              {contact.lede}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <a
              href={`mailto:${site.email}`}
              className="font-display text-accent mt-8 inline-block text-2xl underline-offset-8 hover:underline"
            >
              {site.email}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="border-border bg-card/40 rounded-2xl border p-7"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-muted-foreground font-mono text-[10px] tracking-[0.2em] uppercase"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="border-input bg-background text-foreground focus-visible:border-accent mt-2 w-full rounded-md border px-3.5 py-2.5 outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-muted-foreground font-mono text-[10px] tracking-[0.2em] uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="border-input bg-background text-foreground focus-visible:border-accent mt-2 w-full rounded-md border px-3.5 py-2.5 outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-muted-foreground font-mono text-[10px] tracking-[0.2em] uppercase"
                >
                  What are you building?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="border-input bg-background text-foreground focus-visible:border-accent mt-2 w-full resize-none rounded-md border px-3.5 py-2.5 outline-none"
                />
              </div>
              <button
                type="submit"
                className="from-destructive to-primary w-full rounded-sm bg-gradient-to-r px-6 py-3 font-mono text-[11px] tracking-[0.22em] text-white uppercase transition-transform hover:-translate-y-0.5"
              >
                Send it
              </button>
              <p
                role="status"
                className="text-success min-h-[1.25em] text-center text-sm"
              >
                {sent ? "Opening your email client…" : ""}
              </p>
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
