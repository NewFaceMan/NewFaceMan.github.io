import { about, certifications, profileDetail } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from "./motion/MotionWrappers";

const stats = [
  { value: 3, suffix: "+", label: "Projects" },
  { display: "Top", label: "Award" },
  { display: "Lead", label: "KIS President" },
];

export default function CyberAbout() {
  return (
    <section className="py-24" id="about">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <p className="font-sans text-xs text-accent tracking-wider mb-2">01</p>
          <h2 className="text-3xl font-bold text-heading">About</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mt-12">
          {/* Left: Content */}
          <div className="lg:col-span-3 space-y-8">
            <ScrollReveal delay={0.1}>
              <p className="text-body text-base leading-relaxed">
                {about.narrative}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="border-l-2 border-accent pl-5">
                <p className="text-heading font-medium text-lg leading-relaxed">
                  {about.valueProposition}
                </p>
              </div>
            </ScrollReveal>

            {/* Key Strengths */}
            <div>
              <ScrollReveal>
                <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-4">
                  Core Strengths
                </h3>
              </ScrollReveal>
              <StaggerContainer className="space-y-4" staggerInterval={0.08}>
                {about.keyStrengths.map((s, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-4">
                      <span className="font-sans text-sm text-accent font-semibold shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="text-heading font-semibold text-sm">
                          {s.label}
                        </h4>
                        <p className="text-muted text-sm leading-relaxed mt-0.5">
                          {s.detail}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Highlights */}
            <ScrollReveal>
              <ul className="space-y-2 text-sm text-body">
                {about.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-1">&#8226;</span>
                    {h}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-heading">
                      {"value" in stat && stat.value !== undefined ? (
                        <CountUp value={stat.value} suffix={stat.suffix} />
                      ) : (
                        stat.display
                      )}
                    </div>
                    <div className="text-xs text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Profile + Certs */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Card */}
            <ScrollReveal delay={0.1}>
              <div className="bg-bg rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-4">
                  Profile
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted block text-xs mb-0.5">University</span>
                    <span className="text-body">{profileDetail.university}</span>
                  </div>
                  <div>
                    <span className="text-muted block text-xs mb-0.5">Period</span>
                    <span className="text-body">{profileDetail.universityPeriod}</span>
                  </div>
                  <div>
                    <span className="text-muted block text-xs mb-0.5">Military</span>
                    <span className="text-body">{profileDetail.military}</span>
                    <span className="text-muted text-xs ml-1">({profileDetail.militaryPeriod})</span>
                  </div>
                  <div>
                    <span className="text-muted block text-xs mb-0.5">Activities</span>
                    {profileDetail.activities.map((a, i) => (
                      <span key={i} className="text-body block">{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Certifications Card */}
            <ScrollReveal delay={0.15}>
              <div className="bg-bg rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-4">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-body">{cert.name}</span>
                      <span className="font-sans text-xs text-success px-2 py-0.5 bg-[rgba(5,150,105,0.08)] rounded">
                        {cert.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
