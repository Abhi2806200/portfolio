"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import Button from "@/components/ui/Button";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

const NAME = "Abhishek";
const SURNAME = "Agnihotri";

const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.04, duration: 0.7 },
  }),
};

function AnimatedName({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i + delay}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Three.js canvas */}
      {!reduce && (
        <div className="absolute inset-0 opacity-50">
          <HeroCanvas />
        </div>
      )}

      {/* Deep purple radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 70%, rgba(107,33,168,0.15) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0a0a0f)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="w-6 h-px bg-accent" aria-hidden="true" />
          <span className="text-accent font-mono text-xs tracking-[0.35em] uppercase">
            Frontend Developer
          </span>
          <span className="w-6 h-px bg-accent" aria-hidden="true" />
        </motion.div>

        {/* Name — two lines */}
        <h1 className="font-heading font-bold leading-[0.92] mb-10 overflow-hidden" aria-label={`${NAME} ${SURNAME}`}>
          <div className="text-[clamp(3.8rem,11vw,9rem)] text-text-primary">
            <AnimatedName text={NAME} delay={0} />
          </div>
          <div className="text-[clamp(3.8rem,11vw,9rem)] text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#80faff] to-accent bg-[length:200%_auto] animate-[gradient-border_6s_ease_infinite]">
            <AnimatedName text={SURNAME} delay={NAME.length} />
          </div>
        </h1>

        {/* Tagline */}
        <motion.p
          className="font-body text-base sm:text-lg text-text-muted mb-12 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          Turning ideas into elegant digital experiences — open to freelance projects
          <span className="text-accent animate-blink">.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
        >
          <Button variant="filled" href="#projects">
            View Work
          </Button>
          <Button variant="ghost" href="#contact">
            Let&apos;s Talk
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <FiChevronDown size={16} className="animate-bounce-y text-accent" />
      </motion.div>
    </section>
  );
}
