import { skills } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

const categoryIcons: Record<string, string> = {
  "Digital Forensics": "🔍",
  "Security Tools": "🛠️",
  "Programming": "💻",
  "AI & Automation": "🤖",
  "Infrastructure": "🖥️",
};

const levelConfig = {
  expert: { label: "숙련", width: "w-[95%]", accent: true },
  advanced: { label: "상", width: "w-[85%]", accent: true },
  intermediate: { label: "중", width: "w-[65%]", accent: false },
  beginner: { label: "기초", width: "w-[30%]", accent: false },
};

export default function CyberSkills() {
  return (
    <section className="py-20 border-t border-border" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-mono text-primary font-bold">
              &gt; Skills<span className="blink-cursor" />
            </h2>
            <div className="h-px bg-primary/20 flex-grow ml-4" />
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          staggerInterval={0.12}
        >
          {skills.map((skillGroup) => {
            const icon = categoryIcons[skillGroup.category] || "📌";
            return (
              <StaggerItem key={skillGroup.category}>
                <div className="bg-card border border-border rounded-xl p-6 neon-shadow-hover transition-all duration-300 group shadow-sm">
                  <div className="flex items-center gap-3 mb-4 text-heading">
                    <span className="text-xl">{icon}</span>
                    <h3 className="font-bold text-lg">{skillGroup.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {skillGroup.items.map((item) => {
                      const config = levelConfig[item.level];
                      return (
                        <div key={item.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-body">{item.name}</span>
                            <span className={`text-xs font-mono ${config.accent ? "text-primary" : "text-muted"}`}>
                              {config.label}
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-skill-bar rounded-full">
                            <div
                              className={`h-1.5 rounded-full ${config.width} ${
                                config.accent ? "bg-primary" : "bg-secondary"
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
