import { about, certifications, profileDetail } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from "./motion/MotionWrappers";

const stats = [
  { value: 12, suffix: "+", label: "CONFERENCES" },
  { value: 3, suffix: "+", label: "PROJECTS" },
  { display: "TOP", label: "AWARD" },
  { display: "LEAD", label: "KIS PRESIDENT" },
];

export default function CyberAbout() {
  return (
    <section className="py-24 border-t border-border" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="font-mono text-[11px] text-muted tracking-[0.3em] uppercase mb-12">
            SEC.02 &mdash; ABOUT
          </div>
        </ScrollReveal>

        {/* Narrative */}
        <ScrollReveal delay={0.1}>
          <p className="text-body text-base leading-relaxed max-w-3xl">
            {about.narrative}
          </p>
        </ScrollReveal>

        {/* Value Proposition */}
        <ScrollReveal delay={0.15}>
          <div className="border-l-2 border-accent pl-6 mt-8">
            <p className="text-heading text-lg font-medium leading-relaxed">
              {about.valueProposition}
            </p>
          </div>
        </ScrollReveal>

        {/* Key Strengths */}
        <div className="mt-14">
          <ScrollReveal>
            <div className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-6">
              KEY_STRENGTHS
            </div>
          </ScrollReveal>

          <StaggerContainer className="space-y-5" staggerInterval={0.1}>
            {about.keyStrengths.map((strength, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-4 group">
                  <span className="font-mono text-accent text-sm shrink-0 mt-0.5 opacity-70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-heading font-medium text-sm mb-1">
                      {strength.label}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {strength.detail}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Highlights */}
        <ScrollReveal delay={0.1}>
          <div className="mt-14">
            <div className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-4">
              HIGHLIGHTS
            </div>
            <ul className="space-y-2 text-sm text-body">
              {about.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-[10px]">&#9656;</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal>
          <div className="mt-14 pt-8 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-mono text-2xl font-bold text-heading">
                    {"value" in stat && stat.value !== undefined ? (
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    ) : (
                      stat.display
                    )}
                  </span>
                  <span className="font-mono text-[10px] text-muted tracking-[0.2em] mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Profile + Certifications */}
        <ScrollReveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Profile Detail */}
            <div>
              <div className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-5">
                PROFILE
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex gap-4">
                  <span className="font-mono text-muted shrink-0 w-16 text-xs">
                    UNIV
                  </span>
                  <span className="text-body">
                    {profileDetail.university}
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-muted shrink-0 w-16 text-xs">
                    PERIOD
                  </span>
                  <span className="text-body">
                    {profileDetail.universityPeriod}
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-muted shrink-0 w-16 text-xs">
                    MIL
                  </span>
                  <span className="text-body">
                    {profileDetail.military} ({profileDetail.militaryPeriod})
                  </span>
                </div>
                {profileDetail.activities.map((act, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="font-mono text-muted shrink-0 w-16 text-xs">
                      {i === 0 ? "ACT" : ""}
                    </span>
                    <span className="text-body">{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-5">
                CERTIFICATIONS
              </div>
              <div className="space-y-0">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 text-sm border-b border-border/60"
                  >
                    <span className="text-heading">{cert.name}</span>
                    <span className="font-mono text-[11px] text-accent">
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
