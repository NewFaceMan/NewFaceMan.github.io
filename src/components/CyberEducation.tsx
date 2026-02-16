import { education } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

export default function CyberEducation() {
  return (
    <section className="py-24 bg-bg" id="education">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-sans text-xs text-accent tracking-wider mb-2">04</p>
          <h2 className="text-3xl font-bold text-heading mb-12">Education & Training</h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-3 bottom-0 w-[2px] bg-border" />

          <StaggerContainer className="space-y-6" staggerInterval={0.1}>
            {education.map((edu, i) => {
              const isTop = edu.note.includes("최우수상");

              return (
                <StaggerItem key={i}>
                  <div className="relative pl-10 group">
                    {/* Timeline node */}
                    <div
                      className={`absolute left-0 top-[6px] rounded-full border-2 border-white shadow-sm ${
                        isTop
                          ? "w-4 h-4 bg-accent ring-4 ring-accent-dim"
                          : "w-3 h-3 bg-accent"
                      }`}
                    />

                    <div className="bg-surface rounded-xl border border-border p-5 shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200">
                      {/* Period */}
                      <div className="font-sans text-xs text-muted mb-2">
                        {edu.period}
                      </div>

                      {/* Institution */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-base font-semibold text-heading">
                          {edu.institution}
                        </h3>
                        {isTop && (
                          <span className="font-sans text-[11px] px-2.5 py-0.5 rounded-md bg-accent-dim text-accent border border-accent-border font-semibold">
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
