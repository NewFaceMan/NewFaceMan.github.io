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

  const toggleTroubleshooting = (id: string) => {
    setExpandedTroubleshooting((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="py-24" id="projects">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-sans text-xs text-accent tracking-wider mb-2">03</p>
          <h2 className="text-3xl font-bold text-heading mb-8">Projects</h2>

          {/* Tab Bar */}
          <div className="flex gap-1 mb-12 bg-elevated rounded-lg p-1 w-fit">
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
                  className={`text-sm px-4 py-2 rounded-md transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-bg text-heading font-semibold shadow-sm"
                      : "text-muted hover:text-body"
                  }`}
                >
                  {tab}
                  <span className="ml-1.5 text-xs opacity-50">{count}</span>
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
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-3 bottom-0 w-[2px] bg-border" />

              <StaggerContainer className="space-y-10" staggerInterval={0.15}>
                {filtered.map((project) => {
                  const isFeatured = !!project.award;
                  const hasDetail = project.id === "tracer";
                  const isExpanded = expandedId === project.id;
                  const isTsOpen =
                    expandedTroubleshooting[project.id] ?? false;

                  return (
                    <StaggerItem key={project.id}>
                      <div className="relative pl-10">
                        {/* Timeline node */}
                        <div
                          className={`absolute left-0 top-[6px] rounded-full border-2 border-white shadow-sm ${
                            isFeatured
                              ? "w-4 h-4 bg-accent ring-4 ring-accent-dim"
                              : "w-3 h-3 bg-accent"
                          }`}
                        />

                        {/* Card */}
                        <div className="bg-bg rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:border-[#cbd5e1] transition-all duration-200">
                          {/* Period */}
                          <div className="font-sans text-xs text-muted mb-3">
                            {project.period}
                          </div>

                          {/* Title + Award */}
                          <div className="flex items-center gap-3 flex-wrap mb-2">
                            <h3 className="text-xl font-bold text-heading">
                              {project.title}
                            </h3>
                            {project.award && (
                              <span className="font-sans text-[11px] px-2.5 py-0.5 rounded-md bg-accent-dim text-accent border border-accent-border font-semibold">
                                {project.award}
                              </span>
                            )}
                          </div>

                          <p className="text-body text-sm mb-5">
                            {project.subtitle}
                          </p>

                          {/* Metadata */}
                          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-sans text-muted mb-6">
                            <span>{project.role}</span>
                            {project.teamSize && (
                              <>
                                <span className="text-border">·</span>
                                <span>{project.teamSize}</span>
                              </>
                            )}
                            {project.contribution && (
                              <>
                                <span className="text-border">·</span>
                                <span>기여도 {project.contribution}</span>
                              </>
                            )}
                          </div>

                          {/* PAR */}
                          <div className="space-y-3 mb-6">
                            <div className="flex gap-4">
                              <span className="font-sans text-[11px] text-danger shrink-0 w-[70px] mt-0.5 tracking-wide font-medium">
                                PROBLEM
                              </span>
                              <p className="text-body text-sm leading-relaxed">
                                {project.problem}
                              </p>
                            </div>
                            <div className="flex gap-4">
                              <span className="font-sans text-[11px] text-accent shrink-0 w-[70px] mt-0.5 tracking-wide font-medium">
                                ACTION
                              </span>
                              <p className="text-body text-sm leading-relaxed">
                                {project.action}
                              </p>
                            </div>
                            <div className="flex gap-4">
                              <span className="font-sans text-[11px] text-success shrink-0 w-[70px] mt-0.5 tracking-wide font-medium">
                                RESULT
                              </span>
                              <p className="text-body text-sm leading-relaxed">
                                {project.result}
                              </p>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-5">
                            <div className="text-xs font-semibold text-heading uppercase tracking-wider mb-2">
                              Features
                            </div>
                            <ul className="space-y-1.5 text-sm text-body">
                              {project.features.map((f, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2"
                                >
                                  <span className="text-accent mt-1">&#8226;</span>
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-5">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="font-sans text-[11px] px-2.5 py-1 rounded-md bg-elevated text-body"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Job Relevance */}
                          <div className="text-xs text-muted border-l-2 border-accent pl-3 mb-5">
                            <span className="font-sans text-accent text-[10px] tracking-wider font-medium">
                              DFIR RELEVANCE{" "}
                            </span>
                            {project.jobRelevance}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent border border-border hover:border-accent-border rounded-lg px-3 py-1.5 transition-colors mt-2"
                                onClick={(e) => e.stopPropagation()}
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

                            {project.troubleshooting.length > 0 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleTroubleshooting(project.id);
                                }}
                                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors mt-2 ${
                                  isTsOpen
                                    ? "border-warning/40 text-warning bg-warning/5"
                                    : "border-border text-muted hover:border-warning/30 hover:text-warning"
                                }`}
                              >
                                Troubleshooting
                                <span className="ml-1.5 text-[10px] opacity-60">
                                  {project.troubleshooting.length}
                                </span>
                              </button>
                            )}

                            {hasDetail && (
                              <button
                                onClick={() =>
                                  setExpandedId(isExpanded ? null : project.id)
                                }
                                className={`text-xs font-semibold px-4 py-1.5 rounded-lg border transition-all ml-auto mt-2 ${
                                  isExpanded
                                    ? "border-accent bg-accent text-white"
                                    : "border-accent text-accent hover:bg-accent hover:text-white"
                                }`}
                              >
                                {isExpanded ? "Close" : "Detail"}
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Troubleshooting */}
                        {project.troubleshooting.length > 0 && (
                          <AnimatedCollapse isOpen={isTsOpen}>
                            <div className="mt-4 space-y-3">
                              {project.troubleshooting.map((ts, i) => (
                                <div
                                  key={i}
                                  className="bg-bg rounded-xl border border-border p-5 space-y-3"
                                >
                                  <div>
                                    <span className="font-sans text-[10px] text-danger tracking-wider font-medium">
                                      ISSUE
                                    </span>
                                    <p className="text-body mt-0.5 text-sm">
                                      {ts.issue}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="font-sans text-[10px] text-accent tracking-wider font-medium">
                                      PROCESS
                                    </span>
                                    <p className="text-body mt-0.5 text-sm">
                                      {ts.process}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="font-sans text-[10px] text-success tracking-wider font-medium">
                                      SOLUTION
                                    </span>
                                    <p className="text-body mt-0.5 text-sm">
                                      {ts.resolution}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AnimatedCollapse>
                        )}
                      </div>

                      <AnimatedCollapse isOpen={hasDetail && isExpanded}>
                        <TracerDetail
                          onClose={() => setExpandedId(null)}
                        />
                      </AnimatedCollapse>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
