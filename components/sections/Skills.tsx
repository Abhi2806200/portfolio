"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const ORBIT_SKILLS = skills.slice(0, 8);
const ORBIT_RADIUS = 160;
const CONTAINER = ORBIT_RADIUS * 2 + 100;

export default function Skills() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="skills" aria-label="Skills section" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4"
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Expertise
        </motion.p>

        <motion.h2
          className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold text-text-primary mb-20"
          initial={reduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Skills &amp; Stack
        </motion.h2>

        {/* AI skills callout */}
        <motion.div
          className="flex flex-wrap items-center gap-3 mb-16 p-4 rounded-xl border border-purple-500/20 bg-purple-500/5"
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase shrink-0">AI</span>
          <div className="w-px h-3 bg-purple-500/30 shrink-0" aria-hidden="true" />
          {skills.filter(s => s.category === "ai").map(s => (
            <span
              key={s.id}
              className="px-3 py-1 text-xs font-mono border border-purple-500/30 text-purple-300 rounded-full bg-purple-500/8 hover:border-purple-400/60 transition-colors duration-200"
            >
              {s.name}
            </span>
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Orbit */}
          <motion.div
            ref={ref}
            className="relative flex-shrink-0"
            style={{ width: CONTAINER, height: CONTAINER }}
            initial={reduce ? {} : { opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            aria-label="Skills orbit visualization"
            aria-hidden="false"
          >
            {/* Orbit ring visual */}
            <div
              className="absolute rounded-full border border-dashed border-accent/20"
              style={{
                width: ORBIT_RADIUS * 2,
                height: ORBIT_RADIUS * 2,
                top: CONTAINER / 2 - ORBIT_RADIUS,
                left: CONTAINER / 2 - ORBIT_RADIUS,
              }}
              aria-hidden="true"
            />

            {/* Center label */}
            <div
              className="absolute flex flex-col items-center justify-center"
              style={{
                width: 80,
                height: 80,
                top: CONTAINER / 2 - 40,
                left: CONTAINER / 2 - 40,
              }}
            >
              <span className="text-accent font-heading font-bold text-sm tracking-wider text-center">Frontend</span>
              <div className="mt-1 w-8 h-px bg-accent/40" aria-hidden="true" />
            </div>

            {/* Orbiting items */}
            <div
              className={cn("absolute inset-0", !reduce && "orbit-ring")}
              aria-hidden="true"
            >
              {ORBIT_SKILLS.map((skill, i) => {
                const angleDeg = (i / ORBIT_SKILLS.length) * 360;
                const angleRad = (angleDeg * Math.PI) / 180;
                const cx = CONTAINER / 2;
                const cy = CONTAINER / 2;
                const x = cx + ORBIT_RADIUS * Math.cos(angleRad - Math.PI / 2);
                const y = cy + ORBIT_RADIUS * Math.sin(angleRad - Math.PI / 2);

                return (
                  <div
                    key={skill.id}
                    className="absolute"
                    style={{
                      left: x,
                      top: y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className={cn("orbit-badge-wrap", reduce && "")}>
                      <span className="block px-3 py-1.5 text-xs font-mono bg-background border border-accent/30 text-accent rounded-full whitespace-nowrap shadow-[0_0_12px_rgba(0,245,255,0.15)]">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Skill list */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.id}
                className="glass rounded-xl px-4 py-3 flex items-center gap-3 group hover:border-accent/30 transition-all duration-200"
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" aria-hidden="true" />
                <span className="text-sm font-body text-text-muted group-hover:text-text-primary transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
