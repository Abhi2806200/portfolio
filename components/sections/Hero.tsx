"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import Button from "@/components/ui/Button";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

const NAME = "Abhishek";
const SURNAME = "Agnihotri";

const letterVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.03, duration: 0.55 },
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
        <div className="absolute inset-0 opacity-60">
          <HeroCanvas />
        </div>
      )}

      {/* Radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(107,33,168,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Frontend Developer
        </motion.p>

        {/* Name — two lines */}
        <h1 className="font-heading font-bold leading-[0.95] mb-8 overflow-hidden">
          <div
            className="text-[clamp(3.5rem,10vw,8.5rem)] text-text-primary"
            aria-label={`${NAME} ${SURNAME}`}
          >
            <AnimatedName text={NAME} delay={0} />
          </div>
          <div className="text-[clamp(3.5rem,10vw,8.5rem)] text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent">
            <AnimatedName text={SURNAME} delay={NAME.length} />
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="font-mono text-base sm:text-lg text-text-muted mb-10 flex items-center justify-center gap-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          React · Next.js · TypeScript
          <span className="text-accent animate-blink ml-0.5">|</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <FiChevronDown size={18} className="animate-bounce-y text-accent" />
      </motion.div>
    </section>
  );
}
