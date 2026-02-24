"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import TracerDetail from "./TracerDetail";
import FormattedText, { boldArrows } from "./FormattedText";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AnimatedCollapse,
} from "./motion/MotionWrappers";

export default function CyberProjectExperience() {
  const [activeId, setActiveId] = useState<string>(projects[0].id);
  const [detailOpen, setDetailOpen] = useState(false);

  const activeProject = projects.find((p) => p.id === activeId)!;

  const parSections = (project: Project) => [
    { label: "PROBLEM", colorBorder: "border-l-danger", colorText: "text-danger", text: project.problem },
    { label: "ACTION", colorBorder: "border-l-accent", colorText: "text-accent", text: project.action },
    { label: "RESULT", colorBorder: "border-l-success", colorText: "text-success", text: project.result },
  ];

  return (
    <section className="py-24" id="project-experience">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-sans text-xs text-accent tracking-wider mb-2">
            01
          </p>
          <h2 className="text-3xl font-bold text-heading mb-8">
            Project Experience
          </h2>
        </ScrollReveal>

        {/* Project Filter Tabs */}
        <ScrollReveal delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-8">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => { setActiveId(p.id); setDetailOpen(false); }}
                className={`font-sans text-[12px] font-semibold px-4 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                  activeId === p.id
                    ? "border-accent bg-accent text-white"
                    : "border-border text-muted hover:border-accent-border hover:text-accent bg-bg"
                }`}
              >
                {p.title}
                {p.award && (
                  <span className={`ml-1.5 text-[10px] ${
                    activeId === p.id ? "text-white/70" : "text-accent/50"
                  }`}>
                    ★
                  </span>
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Project Card */}
        <StaggerContainer key={activeId} className="space-y-0" staggerInterval={0.1}>
          <StaggerItem>
            <div className="bg-bg rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200">
              {/* Period */}
              <div className="font-sans text-xs text-muted mb-3">
                {activeProject.period}
              </div>

              {/* Title + Award */}
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h3 className="text-xl font-bold text-heading">
                  {activeProject.title}
                </h3>
                {activeProject.award && (
                  <span className="font-sans text-[11px] px-2.5 py-0.5 rounded-md bg-accent-dim text-accent border border-accent-border font-semibold">
                    {activeProject.award}
                  </span>
                )}
              </div>

              <p className="text-body text-sm mb-5">
                {activeProject.subtitle}
              </p>

              {/* Metadata */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-sans text-muted mb-6">
                <span>{activeProject.role}</span>
                {activeProject.teamSize && (
                  <>
                    <span className="text-border">·</span>
                    <span>{activeProject.teamSize}</span>
                  </>
                )}
                {activeProject.contribution && (
                  <>
                    <span className="text-border">·</span>
                    <span>기여도 {activeProject.contribution}</span>
                  </>
                )}
              </div>

              {/* PAR - colored left border blocks */}
              <div className="space-y-4 mb-6">
                {parSections(activeProject).map((par) => (
                  <div
                    key={par.label}
                    className={`border-l-[3px] ${par.colorBorder} rounded-r-lg bg-surface/50 pl-4 pr-4 py-3`}
                  >
                    <span className={`font-sans text-[11px] ${par.colorText} tracking-wider font-medium`}>
                      {par.label}
                    </span>
                    <FormattedText
                      text={par.text}
                      className="text-body text-sm leading-relaxed mt-1.5"
                    />
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mb-5">
                <div className="text-xs font-semibold text-heading uppercase tracking-wider mb-3">
                  Features
                </div>
                <ul className="space-y-2.5 text-sm text-body">
                  {activeProject.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-accent mt-[3px] shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                          <rect width="6" height="6" rx="1" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{boldArrows(f)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {activeProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-sans text-[11px] px-2.5 py-1 rounded-md bg-elevated text-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* SecOps Relevance */}
              {activeProject.jobRelevance && (
                <div className="text-xs text-muted border-l-2 border-accent pl-3 mb-5">
                  <span className="font-sans text-accent text-[10px] tracking-wider font-medium">
                    SECOPS RELEVANCE
                  </span>
                  <FormattedText
                    text={activeProject.jobRelevance}
                    className="mt-1.5"
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent border border-border hover:border-accent-border rounded-lg px-3 py-1.5 transition-colors mt-2"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    Source
                  </a>
                )}

                {activeId === "tracer" && (
                  <button
                    onClick={() => setDetailOpen(!detailOpen)}
                    className={`text-xs font-semibold px-4 py-1.5 rounded-lg border transition-all ml-auto mt-2 cursor-pointer ${
                      detailOpen
                        ? "border-accent bg-accent text-white"
                        : "border-accent text-accent hover:bg-accent hover:text-white"
                    }`}
                  >
                    {detailOpen ? "Close" : "Detail"}
                  </button>
                )}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* TRACER Detail */}
        <AnimatedCollapse isOpen={activeId === "tracer" && detailOpen}>
          <TracerDetail onClose={() => setDetailOpen(false)} />
        </AnimatedCollapse>
      </div>
    </section>
  );
}
