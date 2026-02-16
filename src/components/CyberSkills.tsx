import { skills } from "@/data/portfolio";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

export default function CyberSkills() {
  // Group consecutive rows by category for rowSpan display
  const grouped: { category: string; startIdx: number; count: number }[] = [];
  skills.forEach((row, i) => {
    const last = grouped[grouped.length - 1];
    if (last && last.category === row.category) {
      last.count++;
    } else {
      grouped.push({ category: row.category, startIdx: i, count: 1 });
    }
  });

  const categoryStartSet = new Set(grouped.map((g) => g.startIdx));
  const categoryMap = new Map(grouped.map((g) => [g.startIdx, g]));

  return (
    <section className="py-24" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-sans text-xs text-accent tracking-wider mb-2">02</p>
          <h2 className="text-3xl font-bold text-heading">Skills</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[120px_1fr_2fr] md:grid-cols-[140px_1fr_2fr] text-xs font-semibold text-muted uppercase tracking-wider border-b border-border bg-bg">
              <div className="px-5 py-3">구분</div>
              <div className="px-5 py-3 border-l border-border">Skill</div>
              <div className="px-5 py-3 border-l border-border">기능구현 및 활용경험</div>
            </div>

            {/* Rows */}
            <StaggerContainer staggerInterval={0.06}>
              {skills.map((row, i) => (
                <StaggerItem key={i}>
                  <div
                    className={`grid grid-cols-[120px_1fr_2fr] md:grid-cols-[140px_1fr_2fr] text-sm ${
                      i < skills.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    {/* Category cell */}
                    {categoryStartSet.has(i) ? (
                      <div className="px-5 py-3.5 font-semibold text-accent flex items-center">
                        {row.category}
                      </div>
                    ) : (
                      <div className="px-5 py-3.5" />
                    )}
                    {/* Skill cell */}
                    <div className="px-5 py-3.5 text-heading font-medium border-l border-border">
                      {row.skill}
                    </div>
                    {/* Experience cell */}
                    <div className="px-5 py-3.5 text-body border-l border-border leading-relaxed">
                      {row.experience}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
