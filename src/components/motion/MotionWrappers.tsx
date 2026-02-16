"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
  type Variants,
} from "framer-motion";

/* ─── ScrollReveal ─── */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const offsets = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offsets[direction] }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerContainer ─── */
const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function StaggerContainer({
  children,
  className,
  staggerInterval = 0.15,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  staggerInterval?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerInterval,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerItem ─── */
const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  );
}

/* ─── CountUp ─── */
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1.5,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [display, setDisplay] = useState(0);
  const [triggered, setTriggered] = useState(false);

  // Fallback: if not triggered after 3s, force display final value
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!triggered) {
        setTriggered(true);
        setDisplay(value);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [triggered, value]);

  useEffect(() => {
    if (!isInView || triggered) return;
    setTriggered(true);

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, triggered, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ─── TerminalTyping ─── */
interface TerminalLine {
  id: string;
  content: React.ReactNode;
  delay?: number;
}

export function TerminalTyping({
  lines,
  baseDelay = 0,
  lineInterval = 600,
  className,
}: {
  lines: TerminalLine[];
  baseDelay?: number;
  lineInterval?: number;
  className?: string;
}) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= lines.length) return;

    const currentLine = lines[visibleCount];
    const delay =
      visibleCount === 0
        ? baseDelay
        : currentLine.delay ?? lineInterval;

    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleCount, lines, baseDelay, lineInterval]);

  return (
    <div className={className}>
      <AnimatePresence>
        {lines.slice(0, visibleCount).map((line) => (
          <motion.div
            key={line.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {line.content}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

/* ─── FadeIn ─── */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── AnimatedCollapse ─── */
export function AnimatedCollapse({
  isOpen,
  children,
  className,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className={className}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── SplitText ─── */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={className} style={{ display: "inline-flex", overflow: "hidden" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block", willChange: "transform" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── ScrollProgress ─── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-50"
      style={{ scaleX }}
    />
  );
}
