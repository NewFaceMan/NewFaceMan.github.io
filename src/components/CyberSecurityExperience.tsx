import { securityExperience } from "@/data/portfolio";
import { boldArrows } from "./FormattedText";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

export default function CyberSecurityExperience() {
  return (
    <section className="py-24" id="security-experience">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-sans text-xs text-accent tracking-wider mb-2">
            03
          </p>
          <h2 className="text-3xl font-bold text-heading mb-12">
            Security Experience
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          staggerInterval={0.1}
        >
          {securityExperience.map((item) => (
            <StaggerItem key={item.id}>
              <div className="bg-bg rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200 h-full flex flex-col">
                {/* Category badge */}
                <span className="inline-block w-fit font-sans text-[10px] px-2.5 py-0.5 rounded-md bg-accent-dim text-accent border border-accent-border font-semibold mb-3">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-heading mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-body text-sm leading-relaxed mb-4 flex-1">
                  {boldArrows(item.description)}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-sans text-[10px] px-2 py-0.5 rounded-md bg-elevated text-body"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <div className="text-xs text-muted border-l-2 border-accent pl-3 leading-relaxed">
                  <span className="font-sans text-accent text-[10px] tracking-wider font-medium">
                    OUTCOME{" "}
                  </span>
                  {item.outcome}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
