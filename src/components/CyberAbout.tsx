import { about, certifications } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from "./motion/MotionWrappers";

const stats = [
  { icon: "🎤", value: 12, suffix: "+", label: "Conferences" },
  { icon: "💻", value: 3, suffix: "+", label: "Projects" },
  { icon: "🏆", displayValue: "Top", label: "Award" },
  { icon: "👥", displayValue: "Lead", label: "KIS President" },
];

const certIcons = ["🛡️", "🔍", "🌐", "🔐"];

export default function CyberAbout() {
  return (
    <section className="py-20 border-t border-border relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Bio */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-heading">
                <span className="text-primary mr-2">&gt;</span>About Me
              </h2>
            </ScrollReveal>

            {/* Narrative */}
            <ScrollReveal delay={0.1}>
              <p className="text-body leading-relaxed">
                {about.narrative}
              </p>
            </ScrollReveal>

            {/* Value Proposition */}
            <ScrollReveal delay={0.15}>
              <p className="text-lg text-heading font-bold leading-relaxed border-l-4 border-primary pl-4">
                {about.valueProposition}
              </p>
            </ScrollReveal>

            {/* Key Strengths Cards */}
            <StaggerContainer className="space-y-3" staggerInterval={0.15}>
              {about.keyStrengths.map((strength, i) => (
                <StaggerItem key={i}>
                  <div className="border-l-4 border-l-primary bg-card rounded-r-lg p-4 shadow-sm">
                    <h3 className="text-heading font-bold text-sm mb-1">
                      {strength.label}
                    </h3>
                    <p className="text-body text-sm leading-relaxed">
                      {strength.detail}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Highlights */}
            <ScrollReveal delay={0.1}>
              <ul className="space-y-2 text-sm text-body">
                {about.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Stats Bar */}
            <ScrollReveal>
              <div className="pt-8 border-t border-border mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center md:items-start p-3 hover:bg-primary/5 rounded-lg transition"
                    >
                      <span className="text-2xl mb-2">{stat.icon}</span>
                      <span className="font-bold text-heading text-xl">
                        {stat.value !== undefined ? (
                          <CountUp value={stat.value} suffix={stat.suffix} />
                        ) : (
                          stat.displayValue
                        )}
                      </span>
                      <span className="text-xs text-muted uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Certifications */}
          <StaggerContainer
            className="lg:col-span-5 flex flex-col space-y-4 relative"
            staggerInterval={0.2}
          >
            <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 to-transparent hidden lg:block" />

            {certifications.map((cert, i) => (
              <StaggerItem key={i}>
                <div className="relative group pl-0 lg:pl-12">
                  <div className="bg-card border border-border hover:border-primary/50 rounded-lg p-5 transition-all duration-300 hover:translate-x-2 neon-shadow-hover shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-heading font-bold text-lg">{cert.name}</h3>
                        <p className="text-muted text-sm mt-1">{cert.status}</p>
                      </div>
                      <span className="text-2xl">{certIcons[i]}</span>
                    </div>
                    <div className="mt-4 flex items-center space-x-2">
                      <div className="h-1 w-full bg-skill-bar rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-full" />
                      </div>
                      <span className="text-xs text-primary font-mono">Pass</span>
                    </div>
                  </div>
                  <div className="absolute left-[13px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary hidden lg:block shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
