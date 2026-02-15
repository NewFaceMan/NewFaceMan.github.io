"use client";

import { profile } from "@/data/portfolio";
import { TerminalTyping, FadeIn } from "./motion/MotionWrappers";

const terminalLines = [
  {
    id: "whoami-cmd",
    content: <span className="text-[#22d3ee]">$ whoami</span>,
    delay: 500,
  },
  {
    id: "whoami-name",
    content: (
      <span className="text-white block mt-1 ml-2">
        &gt; {profile.name} (Park Sangwoo)
      </span>
    ),
    delay: 400,
  },
  {
    id: "whoami-title",
    content: (
      <span className="text-slate-400 block mt-1 ml-2 mb-4">
        &gt; {profile.title}
      </span>
    ),
    delay: 300,
  },
  {
    id: "cat-cmd",
    content: <span className="text-[#22d3ee]">$ cat core-value.txt</span>,
    delay: 600,
  },
  {
    id: "cat-result",
    content: (
      <span className="text-green-400 block mt-1 ml-2 mb-4">
        &gt; 아티팩트 분석 자동화 | 보안 도구 개발 | 위협 인텔리전스 연동
      </span>
    ),
    delay: 400,
  },
  {
    id: "awards-cmd",
    content: <span className="text-[#22d3ee]">$ cat awards.log</span>,
    delay: 600,
  },
  {
    id: "awards-result",
    content: (
      <span className="text-yellow-400 block mt-1 ml-2 mb-4">
        &gt; TRACER 최우수상 | 강남대학교 동아리 경진대회 우수상
      </span>
    ),
    delay: 400,
  },
  {
    id: "ls-cmd",
    content: <span className="text-[#22d3ee]">$ ls achievements/</span>,
    delay: 600,
  },
  {
    id: "ls-result",
    content: (
      <span className="text-green-400 block mt-1 ml-2">
        &gt; 21종 아티팩트 인과관계 자동화 | APT 보고서 79건 분석 | 보안 봇 2종 개발
      </span>
    ),
    delay: 400,
  },
  {
    id: "ready",
    content: (
      <span className="text-slate-400 block mt-1 ml-2 blink-cursor">
        &gt; Ready for deployment
      </span>
    ),
    delay: 500,
  },
];

export default function CyberHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-16 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none grid-bg" />
      {/* Abstract Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Terminal */}
        <FadeIn delay={0.2} duration={0.8}>
          <div className="bg-terminal rounded-xl border border-border shadow-2xl overflow-hidden neon-shadow">
            {/* Terminal Header */}
            <div className="bg-[#334155] px-4 py-2 flex items-center space-x-2 border-b border-[#475569]">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 text-center text-xs font-mono text-slate-400">
                user@psw-portfolio:~
              </div>
            </div>
            {/* Terminal Body - always dark */}
            <TerminalTyping
              lines={terminalLines}
              baseDelay={800}
              lineInterval={400}
              className="p-6 font-mono text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 min-h-[280px]"
            />
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={4.5} duration={0.8}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="text-center bg-primary hover:brightness-110 text-white dark:text-[#0f172a] font-bold font-mono py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
            >
              View Projects
            </a>
            <a
              href="/pdf?download"
              target="_blank"
              className="text-center bg-card hover:bg-primary/10 text-primary font-bold font-mono py-3 px-8 rounded-lg border border-border hover:border-primary transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce print-hide">
        <svg className="w-8 h-8 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
