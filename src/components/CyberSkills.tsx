import { skills } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

const levelMap: Record<
  string,
  { dots: number; label: string }
> = {
  expert: { dots: 4, label: "EXP" },
  advanced: { dots: 3, label: "ADV" },
  intermediate: { dots: 2, label: "INT" },
  beginner: { dots: 1, label: "BGN" },
};

export default function CyberSkills() {
  return (
    <section className="py-24 border-t border-border" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="font-mono text-[11px] text-muted tracking-[0.3em] uppercase mb-12">
            SEC.03 &mdash; SKILLS
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          staggerInterval={0.1}
        >
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div>
                <h3 className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-6 pb-3 border-b border-divider">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.items.map((item) => {
                    const config = levelMap[item.level] ?? {
                      dots: 1,
                      label: "BGN",
                    };
                    return (
                      <div
                        key={item.name}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-body">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4].map((dot) => (
                              <div
                                key={dot}
                                className={`w-1.5 h-1.5 rounded-full ${
                                  dot <= config.dots
                                    ? "bg-accent"
                                    : "bg-border"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-mono text-[10px] text-muted w-7 text-right">
                            {config.label}
                          </span>
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
