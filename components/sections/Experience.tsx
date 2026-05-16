"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "@/lib/data";
import GlassCard from "@/components/ui/GlassCard";

export default function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" aria-label="Experience section" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4"
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Career
        </motion.p>

        <motion.h2
          className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold text-text-primary mb-16"
          initial={reduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Professional Timeline
        </motion.h2>

        {/* Horizontal scroll on desktop */}
        <div className="flex flex-col lg:flex-row gap-4 lg:overflow-x-auto lg:pb-4 lg:snap-x lg:snap-mandatory">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="lg:flex-shrink-0 lg:w-72 lg:snap-start"
              initial={reduce ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
            >
              <GlassCard className="h-full p-6 relative group hover:shadow-[0_0_32px_rgba(0,245,255,0.1)] cursor-default">
                {/* Date badge */}
                <span className="absolute top-4 right-4 text-xs font-mono text-text-muted border border-white/10 px-2 py-1 rounded-full">
                  {exp.start} — {exp.end}
                </span>

                {/* Current indicator */}
                {exp.current && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 animate-pulse-dot" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>
                    <span className="text-xs font-mono text-green-400 tracking-wider">Current</span>
                  </div>
                )}

                <p className="text-xs font-mono text-accent tracking-widest uppercase mb-2 mt-8">
                  {exp.company}
                </p>

                <h3 className="text-xl font-heading font-bold text-text-primary mb-4 leading-tight">
                  {exp.role}
                </h3>

                <p className="text-sm text-text-muted font-body leading-relaxed">
                  {exp.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-500 rounded-b-2xl" aria-hidden="true" />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
