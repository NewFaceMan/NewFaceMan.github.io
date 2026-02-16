"use client";

import Image from "next/image";
import { profile } from "@/data/portfolio";
import { FadeIn, SplitText } from "./motion/MotionWrappers";

export default function CyberHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(37,99,235,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-20 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading tracking-tight leading-tight">
            <SplitText text={profile.name} delay={0.2} stagger={0.08} />
          </h1>

          <FadeIn delay={0.4} duration={0.6}>
            <p className="text-lg md:text-xl text-accent font-medium mt-3">
              {profile.title}
            </p>
          </FadeIn>

          <FadeIn delay={0.55} duration={0.6}>
            <p className="text-body max-w-2xl text-base leading-relaxed mt-6">
              {profile.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.7} duration={0.6}>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "DFIR",
                "Threat Intelligence",
                "AI Agent 자동화",
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium px-3 py-1 rounded-md bg-accent-dim text-accent border border-accent-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.85} duration={0.6}>
            <div className="flex flex-wrap gap-3 mt-10">
              <a
                href="#projects"
                className="text-sm font-semibold px-6 py-3 rounded-lg bg-accent text-white hover:bg-[#3b82f6] shadow-sm transition-all duration-200"
              >
                View Projects
              </a>
              <a
                href="/pdf?download"
                target="_blank"
                className="text-sm font-semibold px-6 py-3 rounded-lg border border-border text-body hover:border-accent hover:text-accent transition-all duration-200"
              >
                Download CV
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right: Profile Photo */}
        <FadeIn delay={0.5} duration={0.6}>
          <div className="shrink-0">
            <div className="rotating-border rounded-2xl inline-block">
              <Image
                src="/profile.jpg"
                alt="박상우 프로필"
                width={280}
                height={373}
                className="rounded-2xl object-cover relative z-10"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
