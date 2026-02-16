import { profile, contact } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

const links = [
  {
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "GITHUB",
    value: "github.com/NewFaceMan",
    href: profile.github,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/박상우",
    href: profile.linkedin,
  },
  {
    label: "BLOG",
    value: "velog.io/@dipping/posts",
    href: profile.blog,
  },
];

export default function CyberContact() {
  return (
    <section className="py-24 border-t border-border" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="font-mono text-[11px] text-muted tracking-[0.3em] uppercase mb-12">
            SEC.06 &mdash; CONTACT
          </div>
        </ScrollReveal>

        <StaggerContainer className="space-y-4" staggerInterval={0.1}>
          {links.map((link) => (
            <StaggerItem key={link.label}>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] text-muted w-20 shrink-0 tracking-wider">
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target={
                    link.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="text-heading hover:text-accent transition-colors text-sm font-mono"
                >
                  {link.value}
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-14 pt-8 border-t border-border">
            <p className="text-body text-sm mb-8">{contact.message}</p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.15em] uppercase px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-200 group"
            >
              Send Email
              <span className="transform group-hover:translate-x-1 transition-transform text-sm">
                &rarr;
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
