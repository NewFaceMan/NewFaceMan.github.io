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

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono border border-border bg-card text-muted hover:border-primary/40 hover:text-primary transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                          Source Code
                        </a>
                      )}

                      {/* Troubleshooting Toggle */}
                      {project.troubleshooting.length > 0 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTroubleshooting(project.id);
                          }}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono border transition-all ${
                            isTsOpen
                              ? "bg-orange-500/10 border-orange-500/40 text-orange-500"
                              : "border-orange-500/30 text-orange-400/70 hover:border-orange-500/50 hover:text-orange-400 hover:bg-orange-500/5"
                          }`}
                        >
                          <span className="text-[10px]">{isTsOpen ? "▼" : "▶"}</span>
                          Troubleshooting
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            isTsOpen ? "bg-orange-500/20" : "bg-orange-500/10"
                          }`}>
                            {project.troubleshooting.length}
                          </span>
                        </button>
                      )}

                      {/* TRACER Detail Toggle */}
                      {hasDetail && (
                        <button
                          onClick={() =>
                            setExpandedId(isExpanded ? null : project.id)
                          }
                          className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-mono font-bold border transition-all ml-auto ${
                            isExpanded
                              ? "bg-primary text-white border-primary shadow-[0_0_12px_rgba(var(--primary-rgb),0.3)]"
                              : "border-primary/40 text-primary hover:bg-primary hover:text-white hover:shadow-[0_0_12px_rgba(var(--primary-rgb),0.3)]"
                          }`}
                        >
                          {isExpanded ? "▲ 접기" : "▼ 상세보기"}
                        </button>
                      )}
                    </div>

                    {/* Troubleshooting Content */}
                    {project.troubleshooting.length > 0 && (
                      <AnimatedCollapse isOpen={isTsOpen}>
                        <div className="mt-4 space-y-3">
                          {project.troubleshooting.map((ts, i) => (
                            <div
                              key={i}
                              className="bg-bg border border-orange-500/20 rounded-lg p-5 text-sm relative overflow-hidden"
                            >
                              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-500/30" />
                              <div className="pl-3 space-y-3">
                                <div>
                                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20 mb-1">
                                    Problem
                                  </span>
                                  <p className="text-body mt-1">{ts.issue}</p>
                                </div>
                                <div>
                                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-1">
                                    Process
                                  </span>
                                  <p className="text-body mt-1">{ts.process}</p>
                                </div>
                                <div>
                                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20 mb-1">
                                    Solution
                                  </span>
                                  <p className="text-body mt-1">{ts.resolution}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AnimatedCollapse>
                    )}
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
