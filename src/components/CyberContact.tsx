import { profile, contact } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

const links = [
  { icon: "📧", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "🔗", label: "GitHub", value: "github.com/NewFaceMan", href: profile.github },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/박상우", href: profile.linkedin },
  { icon: "📝", label: "Blog", value: "velog.io/@dipping/posts", href: profile.blog },
];

export default function CyberContact() {
  return (
    <section className="py-20 border-t border-border flex flex-col items-center" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-mono">
            <span className="mr-2 opacity-70">&gt;</span>Contact
          </h2>
        </ScrollReveal>

        {/* Terminal Window - always dark */}
        <ScrollReveal delay={0.15}>
          <div className="bg-terminal rounded-xl border border-border shadow-2xl overflow-hidden neon-shadow">
            <div className="bg-[#334155] px-4 py-3 flex items-center gap-2 border-b border-[#475569]">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 text-xs text-slate-400 font-mono">
                sangwoo@portfolio:~
              </div>
            </div>

            <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed text-slate-300">
              <div className="mb-6">
                <span className="text-[#22d3ee] mr-2">$</span>
                reach_out --to &quot;{profile.name}&quot;
                <span className="blink-cursor" />
              </div>

              <StaggerContainer
                className="space-y-4 pl-4 border-l-2 border-[#22d3ee]/10"
                staggerInterval={0.12}
              >
                {links.map((link) => (
                  <StaggerItem key={link.label}>
                    <div className="flex items-start md:items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      <span className="text-slate-400 w-20">{link.label}:</span>
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#22d3ee] transition-colors underline decoration-[#22d3ee]/30 underline-offset-4"
                      >
                        {link.value}
                      </a>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </ScrollReveal>

        {/* Message & CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center space-y-6">
            <p className="text-body text-lg font-medium">{contact.message}</p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-badge hover:bg-primary/20 text-primary border border-primary rounded-lg transition-all duration-300 group hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
            >
              <span className="font-mono font-bold">Send Email</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
