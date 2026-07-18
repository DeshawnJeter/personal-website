import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/motion/reveal";
import { contact, site } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 sm:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>{contact.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="contact-heading"
              className="text-display text-foreground mt-6"
            >
              {contact.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-subheading text-muted-foreground mt-5 max-w-[48ch]">
              {contact.lede}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="border-border bg-card/40 rounded-2xl border p-7">
            <p className="text-subheading text-foreground">
              Let&rsquo;s connect.
            </p>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              The fastest way to reach me is LinkedIn — send a message and
              I&rsquo;ll get back to you there.
            </p>
            <CtaLink href={site.linkedin} variant="solid" className="mt-6">
              Message me on LinkedIn ↗
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
