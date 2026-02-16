import { education } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

export default function CyberEducation() {
  return (
    <section className="py-24 border-t border-border" id="education">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="font-mono text-[11px] text-muted tracking-[0.3em] uppercase mb-12">
            SEC.05 &mdash; EDUCATION &amp; TRAINING
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-0 w-px bg-border" />

          <StaggerContainer className="space-y-8" staggerInterval={0.12}>
            {education.map((edu, i) => {
              const isTop = edu.note.includes("최우수상");

              return (
                <StaggerItem key={i}>
                  <div className="relative pl-10 group">
                    {/* Timeline node */}
                    <div
                      className={`absolute left-0 top-[5px] w-[15px] h-[15px] rounded-full border-2 ${
                        isTop
                          ? "border-accent bg-accent shadow-[0_0_10px_rgba(0,212,170,0.4)]"
                          : "border-accent/60 bg-bg"
                      }`}
                    />

                    {/* Period */}
                    <div className="font-mono text-xs text-muted mb-2">
                      {edu.period}
                    </div>

                    {/* Institution */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-base font-medium text-heading group-hover:text-accent transition-colors">
                        {edu.institution}
                      </h3>
                      {isTop && (
                        <span className="font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-accent/40 text-accent">
                          최우수상
                        </span>
                      )}
                    </div>

                    {/* Organizer & Note */}
                    <p className="text-muted text-sm mt-1">
                      {edu.organizer && `${edu.organizer} · `}
                      {edu.note}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
