"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import TracerDetail from "./TracerDetail";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  AnimatedCollapse,
} from "./motion/MotionWrappers";

const tabs = ["All", "DFIR", "AI Agent"] as const;
type Tab = (typeof tabs)[number];

export default function CyberProjects() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [expandedTroubleshooting, setExpandedTroubleshooting] = useState<
    Record<string, boolean>
  >({});

  const toggleTroubleshooting = (projectId: string) => {
    setExpandedTroubleshooting((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-20 border-t border-border" id="projects">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-mono text-primary font-bold">
              &gt; Projects<span className="blink-cursor" />
            </h2>
            <div className="h-px bg-primary/20 flex-grow ml-4" />
          </div>

          {/* Tab Bar */}
          <div className="flex gap-2 mb-8">
            {tabs.map((tab) => {
              const count =
                tab === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setExpandedId(null);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 border ${
                    activeTab === tab
                      ? "bg-primary text-white border-primary shadow-[0_0_12px_rgba(var(--primary-rgb),0.3)]"
                      : "bg-card text-muted border-border hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {tab}
                  <span
                    className={`ml-2 text-xs ${
                      activeTab === tab ? "text-white/70" : "text-muted/50"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
        <StaggerContainer className="flex flex-col gap-8" staggerInterval={0.2}>
          {filtered.map((project) => {
            const isFeatured = !!project.award;
            const hasDetail = project.id === "tracer";
            const isExpanded = expandedId === project.id;
            const isTsOpen = expandedTroubleshooting[project.id] ?? false;

            return (
              <StaggerItem key={project.id}>
                <div
                  className={`relative bg-card rounded-r-xl border border-border p-6 md:p-8 neon-shadow-hover transition-all duration-300 group overflow-hidden shadow-sm ${
                    isFeatured
                      ? "border-l-4 border-l-primary"
                      : "border-l-4 border-l-secondary"
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  )}

                  <div className="relative z-10">
                    {/* Title + Subtitle + Award */}
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="text-2xl md:text-3xl font-bold text-heading tracking-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.award && (
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                          🏆 {project.award}
                        </span>
                      )}
                    </div>
                    <p className="text-body text-sm mb-4">{project.subtitle}</p>

                    {/* Metadata Bar: Period | Role | Team | Contribution */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted mb-5 font-mono">
                      <span>{project.period}</span>
                      <span className="hidden sm:inline text-border">|</span>
                      <span>{project.role}</span>
                      {project.teamSize && (
                        <>
                          <span className="hidden sm:inline text-border">|</span>
                          <span>{project.teamSize}</span>
                        </>
                      )}
                      {project.contribution && (
                        <>
                          <span className="hidden sm:inline text-border">|</span>
                          <span>기여도 {project.contribution}</span>
                        </>
                      )}
                    </div>

                    {/* Problem → Action → Result */}
                    <div className="space-y-3 mb-5">
                      <div>
                        <span className="text-red-400 font-bold text-xs uppercase tracking-wider mr-2">
                          Problem
                        </span>
                        <p className="text-body text-sm leading-relaxed mt-1">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-blue-400 font-bold text-xs uppercase tracking-wider mr-2">
                          Action
                        </span>
                        <p className="text-body text-sm leading-relaxed mt-1">
                          {project.action}
                        </p>
                      </div>
                      <div>
                        <span className="text-green-400 font-bold text-xs uppercase tracking-wider mr-2">
                          Result
                        </span>
                        <p className="text-body text-sm leading-relaxed mt-1">
                          {project.result}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-4 text-sm text-body">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary text-xs mt-0.5">▸</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded text-xs font-mono border ${
                            isFeatured
                              ? "bg-badge text-primary border-primary/20"
                              : "bg-border-light text-muted border-border"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Job Relevance */}
                    <div className="text-xs text-muted bg-border-light rounded-lg px-4 py-2 mb-4">
                      <span className="text-primary font-bold mr-1">DFIR 연관성:</span>
                      {project.jobRelevance}
                    </div>

                    {/* Troubleshooting Toggle */}
                    {project.troubleshooting.length > 0 && (
                      <div className="mb-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTroubleshooting(project.id);
                          }}
                          className="flex items-center gap-2 text-sm font-mono text-primary/70 hover:text-primary transition-colors"
                        >
                          <span>{isTsOpen ? "▼" : "▶"}</span>
                          <span>$ troubleshooting --project {project.id}</span>
                        </button>

                        <AnimatedCollapse isOpen={isTsOpen}>
                          <div className="mt-3 space-y-3">
                            {project.troubleshooting.map((ts, i) => (
                              <div
                                key={i}
                                className="bg-bg border border-border rounded-lg p-4 text-sm"
                              >
                                <div className="mb-2">
                                  <span className="text-red-400 font-bold text-xs mr-2">
                                    문제
                                  </span>
                                  <span className="text-body">{ts.issue}</span>
                                </div>
                                <div className="mb-2">
                                  <span className="text-blue-400 font-bold text-xs mr-2">
                                    과정
                                  </span>
                                  <span className="text-body">{ts.process}</span>
                                </div>
                                <div>
                                  <span className="text-green-400 font-bold text-xs mr-2">
                                    해결
                                  </span>
                                  <span className="text-body">{ts.resolution}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </AnimatedCollapse>
                      </div>
                    )}

                    {/* Links + TRACER Detail Toggle */}
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-xs hover:underline inline-flex items-center gap-1 font-mono"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Source →
                        </a>
                      )}
                      {hasDetail && (
                        <button
                          onClick={() =>
                            setExpandedId(isExpanded ? null : project.id)
                          }
                          className="text-primary/60 text-sm font-mono ml-auto hover:text-primary transition-colors"
                        >
                          {isExpanded ? "▲ 접기" : "▼ 상세보기"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <AnimatedCollapse isOpen={hasDetail && isExpanded}>
                  <TracerDetail onClose={() => setExpandedId(null)} />
                </AnimatedCollapse>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
