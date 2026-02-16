import { skills } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

const levelMap: Record<string, { dots: number; label: string }> = {
  expert: { dots: 4, label: "Expert" },
  advanced: { dots: 3, label: "Advanced" },
  intermediate: { dots: 2, label: "Intermediate" },
  beginner: { dots: 1, label: "Beginner" },
};

export default function CyberSkills() {
  return (
    <section className="py-24 bg-bg" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-sans text-xs text-accent tracking-wider mb-2">02</p>
          <h2 className="text-3xl font-bold text-heading">Skills</h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          staggerInterval={0.08}
        >
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="bg-surface rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200">
                <h3 className="text-sm font-semibold text-heading mb-5">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.items.map((item) => {
                    const config = levelMap[item.level] ?? { dots: 1, label: "Beginner" };
                    return (
                      <div key={item.name} className="flex items-center justify-between">
                        <span className="text-sm text-body">{item.name}</span>
                        <div className="flex items-center gap-1.5">
                          {[1, 2, 3, 4].map((dot) => (
                            <div
                              key={dot}
                              className={`w-2 h-2 rounded-full ${
                                dot <= config.dots ? "bg-accent" : "bg-border"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
