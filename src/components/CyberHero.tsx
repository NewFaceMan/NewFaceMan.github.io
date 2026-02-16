"use client";

import { profile } from "@/data/portfolio";
import { FadeIn } from "./motion/MotionWrappers";

export default function CyberHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-14">
      {/* Subtle bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(13,148,136,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <FadeIn delay={0.2} duration={0.8}>
          <div className="font-mono text-[11px] text-muted tracking-[0.3em] uppercase mb-8">
            SEC.01 &mdash; IDENTIFICATION
          </div>
        </FadeIn>

        <FadeIn delay={0.5} duration={0.8}>
          <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold text-heading tracking-tight leading-none">
            {profile.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.8} duration={0.8}>
          <h2 className="font-mono text-lg md:text-xl text-accent mt-4 tracking-wide">
            {profile.title}
          </h2>
        </FadeIn>

        <FadeIn delay={1.1} duration={0.8}>
          <div className="w-16 h-px bg-accent mt-8 mb-8" />
        </FadeIn>

        <FadeIn delay={1.3} duration={0.8}>
          <p className="text-body max-w-2xl text-base leading-relaxed">
            {profile.description}
          </p>
        </FadeIn>

        <FadeIn delay={1.5} duration={0.8}>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 font-mono text-[11px] text-muted tracking-wider uppercase">
            <span>TRACER 최우수상</span>
            <span className="text-accent/30">|</span>
            <span>21종 아티팩트</span>
            <span className="text-accent/30">|</span>
            <span>APT 보고서 79건</span>
            <span className="text-accent/30">|</span>
            <span>보안 봇 2종</span>
          </div>
        </FadeIn>

        <FadeIn delay={1.8} duration={0.8}>
          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="#projects"
              className="font-mono text-xs tracking-[0.15em] uppercase px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href="/pdf?download"
              target="_blank"
              className="font-mono text-xs tracking-[0.15em] uppercase px-6 py-3 border border-border text-muted hover:border-accent hover:text-accent transition-all duration-200"
            >
              Download CV
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 print-hide">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent/30 to-accent/60" />
      </div>
    </section>
  );
}
