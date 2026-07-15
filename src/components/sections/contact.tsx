"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { contact, site } from "@/lib/content";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Hey DeShawn — from ${name || "your site"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>{contact.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 id="contact-heading" className="mt-6 text-display text-foreground">
              {contact.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-[48ch] text-subheading text-muted-foreground">
              {contact.lede}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block font-display text-2xl text-accent underline-offset-8 hover:underline"
            >
              {site.email}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card/40 p-7"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-foreground outline-none focus-visible:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-foreground outline-none focus-visible:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  What are you building?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-md border border-input bg-background px-3.5 py-2.5 text-foreground outline-none focus-visible:border-accent"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-gradient-to-r from-destructive to-primary px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-transform hover:-translate-y-0.5"
              >
                Send it
              </button>
              <p role="status" className="min-h-[1.25em] text-center text-sm text-success">
                {sent ? "Opening your email client…" : ""}
              </p>
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
