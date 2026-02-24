"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import FormattedText from "./FormattedText";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "./motion/MotionWrappers";

interface TroubleshootingCase {
  projectTitle: string;
  projectId: string;
  issue: string;
  process: string;
  resolution: string;
}

export default function CyberProblemSolving() {
  const projectsWithCases = projects.filter((p) => p.troubleshooting.length > 0);

  const casesByProject: Record<string, TroubleshootingCase[]> = {};
  for (const p of projectsWithCases) {
    casesByProject[p.id] = p.troubleshooting.map((ts) => ({
      projectTitle: p.title,
      projectId: p.id,
      issue: ts.issue,
      process: ts.process,
      resolution: ts.resolution,
    }));
  }

  const [activeId, setActiveId] = useState<string>(projectsWithCases[0]?.id ?? "");

  const activeCases = casesByProject[activeId] ?? [];

  const sectionDefs = (c: TroubleshootingCase) => [
    { label: "ISSUE", colorBorder: "border-l-danger", colorText: "text-danger", text: c.issue },
    { label: "PROCESS", colorBorder: "border-l-accent", colorText: "text-accent", text: c.process },
    { label: "SOLUTION", colorBorder: "border-l-success", colorText: "text-success", text: c.resolution },
  ];

  return (
    <section className="py-24" id="problem-solving">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-sans text-xs text-accent tracking-wider mb-2">
            02
          </p>
          <h2 className="text-3xl font-bold text-heading mb-8">
            Problem Solving
          </h2>
        </ScrollReveal>

        {/* Project Filter Tabs */}
        <ScrollReveal delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-8">
            {projectsWithCases.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`font-sans text-[12px] font-semibold px-4 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                  activeId === p.id
                    ? "border-accent bg-accent text-white"
                    : "border-border text-muted hover:border-accent-border hover:text-accent bg-bg"
                }`}
              >
                {p.title}
                <span className={`ml-1.5 text-[10px] ${
                  activeId === p.id ? "text-white/70" : "text-muted/50"
                }`}>
                  {casesByProject[p.id].length}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cases for Active Project */}
        <StaggerContainer key={activeId} className="space-y-6" staggerInterval={0.12}>
          {activeCases.map((c, i) => (
            <StaggerItem key={`${activeId}-${i}`}>
              <div className="bg-bg rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200">
                {/* ISSUE / PROCESS / SOLUTION - colored left border */}
                <div className="space-y-4">
                  {sectionDefs(c).map((s) => (
                    <div
                      key={s.label}
                      className={`border-l-[3px] ${s.colorBorder} rounded-r-lg bg-surface/50 pl-4 pr-4 py-3`}
                    >
                      <span className={`font-sans text-[10px] ${s.colorText} tracking-wider font-medium`}>
                        {s.label}
                      </span>
                      <FormattedText
                        text={s.text}
                        className="text-body mt-1.5 text-sm leading-relaxed"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
