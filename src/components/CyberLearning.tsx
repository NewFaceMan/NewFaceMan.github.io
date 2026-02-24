import { education, skills, certifications } from "@/data/portfolio";
import { boldArrows } from "./FormattedText";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

export default function CyberLearning() {
  const coreSkills = skills.filter((s) => s.level === "core");
  const expSkills = skills.filter((s) => s.level === "experience");

  return (
    <section className="py-24" id="learning">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-sans text-xs text-accent tracking-wider mb-2">
            04
          </p>
          <h2 className="text-3xl font-bold text-heading mb-12">
            Learning & Certifications
          </h2>
        </ScrollReveal>

        {/* ---- Education Timeline ---- */}
        <ScrollReveal delay={0.05}>
          <h3 className="text-lg font-bold text-heading mb-6">
            Education & Training
          </h3>
        </ScrollReveal>

        <div className="relative mb-16">
          <div className="absolute left-[7px] top-3 bottom-0 w-[2px] bg-border" />

          <StaggerContainer className="space-y-6" staggerInterval={0.1}>
            {education.map((edu, i) => {
              const isTop = edu.note.includes("최우수상");
              return (
                <StaggerItem key={i}>
                  <div className="relative pl-10">
                    <div
                      className={`absolute left-0 top-[6px] rounded-full border-2 border-white shadow-sm ${
                        isTop
                          ? "w-4 h-4 bg-accent ring-4 ring-accent-dim"
                          : "w-3 h-3 bg-accent"
                      }`}
                    />
                    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200">
                      <div className="font-sans text-xs text-muted mb-2">
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-base font-semibold text-heading">
                          {edu.institution}
                        </h4>
                        {isTop && (
                          <span className="font-sans text-[11px] px-2.5 py-0.5 rounded-md bg-accent-dim text-accent border border-accent-border font-semibold">
                            최우수상
                          </span>
                        )}
                      </div>
                      <p className="text-muted text-sm mt-1">
                        {edu.organizer && `${edu.organizer} · `}
                        {edu.note}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* ---- Skills ---- */}
        <ScrollReveal delay={0.05}>
          <h3 className="text-lg font-bold text-heading mb-6">Skills</h3>
        </ScrollReveal>

        {/* Core Skills */}
        <ScrollReveal delay={0.1}>
          <div className="mb-4">
            <span className="inline-block font-sans text-[11px] font-semibold text-accent bg-accent-dim border border-accent-border px-2.5 py-0.5 rounded-md tracking-wide mb-4">
              주력 기술
            </span>
            <div className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
              <StaggerContainer staggerInterval={0.06}>
                {coreSkills.map((row, i) => (
                  <StaggerItem key={i}>
                    <div
                      className={`grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr] text-sm ${
                        i < coreSkills.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <div className="px-5 py-4 font-semibold text-heading flex items-start">
                        {row.skill}
                      </div>
                      <div className="px-5 py-4 text-body border-l border-border leading-relaxed">
                        {boldArrows(row.experience)}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </ScrollReveal>

        {/* Experience Skills */}
        <ScrollReveal delay={0.15}>
          <div className="mb-16">
            <span className="inline-block font-sans text-[11px] font-semibold text-muted bg-elevated border border-border px-2.5 py-0.5 rounded-md tracking-wide mb-4">
              활용 경험
            </span>
            <div className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
              <StaggerContainer staggerInterval={0.06}>
                {expSkills.map((row, i) => (
                  <StaggerItem key={i}>
                    <div
                      className={`grid grid-cols-[110px_1fr] md:grid-cols-[130px_1fr] text-sm ${
                        i < expSkills.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <div className="px-5 py-3.5 font-medium text-heading flex items-start">
                        {row.skill}
                      </div>
                      <div className="px-5 py-3.5 text-muted border-l border-border leading-relaxed text-[13px]">
                        {boldArrows(row.experience)}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </ScrollReveal>

        {/* ---- Certifications Grid ---- */}
        <ScrollReveal delay={0.05}>
          <h3 className="text-lg font-bold text-heading mb-6">
            Certifications
          </h3>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          staggerInterval={0.08}
        >
          {certifications.map((cert, i) => (
            <StaggerItem key={i}>
              <div className="bg-bg rounded-xl border border-border p-5 shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200">
                <h4 className="text-sm font-semibold text-heading">
                  {cert.name}
                </h4>
                <p className="text-xs text-muted mt-1">{cert.status}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
