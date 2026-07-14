"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { socialLinks, siteConfig } from "@/lib/data";
import { AnimateLines, Line } from "@/components/ui/AnimateLines";
import { SplitText } from "@/components/ui/SplitText";

export default function Hero() {
  const years = new Date().getFullYear() - siteConfig.careerStartYear;

  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 80, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 80, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center bg-transparent pt-20 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Text side ── */}
          <AnimateLines className="order-2 lg:order-1" stagger={0.14} amount={0.04}>

            {/* Available badge */}
            <Line>
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-pulse" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-xs font-mono text-green-400 tracking-widest uppercase">
                  Available for hire
                </span>
              </div>
            </Line>

            {/* Name */}
            <Line>
              <h1 className="font-display font-bold leading-[1.05] tracking-tight mb-4">
                <span
                  className="block text-[clamp(2.8rem,7vw,5.5rem)] shimmer-name"
                >
                  Abhishek
                </span>
                <span
                  className="block text-[clamp(2.8rem,7vw,5.5rem)] shimmer-name-dim"
                >
                  Agnihotri
                </span>
              </h1>
            </Line>

            {/* Title */}
            <Line>
              <p className="text-base font-mono text-white/60 tracking-[0.3em] uppercase mb-6">
                Software Developer
              </p>
            </Line>

            {/* Bio — word by word */}
            <Line>
              <p className="text-lg text-white/75 font-body leading-relaxed mb-8 max-w-lg">
                <SplitText speed={0.07} amount={0.04}>
                  {`I build fast, modern web applications with React, Next.js, TypeScript and AI integration. ${years}+ years of turning complex problems into clean, production-ready products. Currently open to freelance.`}
                </SplitText>
              </p>
            </Line>

            {/* CTA buttons */}
            <Line>
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm font-heading hover:bg-white/90 transition-colors duration-200"
                >
                  View My Work
                  <FiArrowRight size={14} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm font-heading hover:border-white/60 hover:bg-white/8 transition-all duration-200"
                >
                  Get In Touch
                </a>
              </div>
            </Line>

            {/* Stats */}
            <Line>
              <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-heading font-bold text-white tabular-nums">{years}+</p>
                  <p className="text-xs font-mono text-white/55 tracking-widest uppercase mt-1">Years Exp.</p>
                </div>
                <div className="w-px h-12 bg-white/15" />
                <div>
                  <p className="text-3xl font-heading font-bold text-white tabular-nums">10+</p>
                  <p className="text-xs font-mono text-white/55 tracking-widest uppercase mt-1">Projects</p>
                </div>
                <div className="w-px h-12 bg-white/15" />
                <div className="flex items-center gap-4">
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors duration-200" aria-label="GitHub">
                    <FiGithub size={18} />
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                    <FiLinkedin size={18} />
                  </a>
                </div>
              </div>
            </Line>

          </AnimateLines>

          {/* ── Photo side ── */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ perspective: 800 }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[480px] rounded-2xl overflow-hidden border border-white/12 shadow-2xl"
            >
              <Image
                src="/assets/heroImage.png"
                alt="Abhishek Agnihotri"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 320px, 420px"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 50%)" }}
              />
              {/* Glare overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background: useTransform(
                    [mouseX, mouseY],
                    ([x, y]) =>
                      `radial-gradient(circle at ${((x as number) + 0.5) * 100}% ${((y as number) + 0.5) * 100}%, rgba(255,255,255,0.10) 0%, transparent 60%)`
                  ),
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
