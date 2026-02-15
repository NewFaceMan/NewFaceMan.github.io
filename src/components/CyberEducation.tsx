import { education } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

export default function CyberEducation() {
  return (
    <section className="py-20 border-t border-border" id="education">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 font-mono border-b border-primary/20 pb-4">
            <span className="mr-2 opacity-70">&gt;</span>Education &amp; Training
          </h2>
        </ScrollReveal>

        <div className="bg-card/50 rounded-xl overflow-hidden border border-border shadow-sm">
          <StaggerContainer
            className="grid grid-cols-1 divide-y divide-border"
            staggerInterval={0.15}
          >
            {education.map((edu, i) => (
              <StaggerItem key={i}>
                <div className="p-6 md:px-8 hover:bg-primary/5 transition-colors group relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg md:text-xl font-bold text-heading group-hover:text-primary transition-colors">
                          {edu.institution}
                        </h3>
                        {edu.note.includes("최우수상") && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary text-white dark:text-[var(--bg)] shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]">
                            🏆 최우수상
                          </span>
                        )}
                      </div>
                      <p className="text-muted mt-1 text-sm font-light">
                        {edu.organizer && `${edu.organizer} · `}{edu.note}
                      </p>
                    </div>
                    <div className="font-mono text-sm text-primary/80 bg-badge px-3 py-1 rounded border border-primary/10 whitespace-nowrap">
                      {edu.period}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
