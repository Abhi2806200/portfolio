"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { AnimateLines, Line, line } from "@/components/ui/AnimateLines";

const CATEGORIES = [
  { key: "frontend" as const, label: "Frontend",   description: "User interfaces & web experiences" },
  { key: "backend"  as const, label: "Backend",    description: "Server-side & databases" },
  { key: "ai"       as const, label: "AI & Tools", description: "Artificial intelligence & automation" },
];

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills section" className="py-24 border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        <AnimateLines>
          <Line><p className="font-mono text-xs text-white/55 tracking-[0.4em] uppercase mb-4">Tech Stack</p></Line>
          <Line><h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-white mb-4">Skills</h2></Line>
          <Line><p className="text-base text-white/65 font-body max-w-xl mb-16">Technologies and tools I work with to build modern web applications.</p></Line>
        </AnimateLines>

        <AnimateLines className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.18}>
          {CATEGORIES.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat.key);
            return (
              <Line key={cat.key}>
                <div className="bg-white/3 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 h-full">
                  <p className="font-heading font-bold text-white text-lg mb-1">{cat.label}</p>
                  <p className="text-xs font-mono text-white/50 mb-5">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill, si) => (
                      <motion.span
                        key={skill.id}
                        variants={line}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: si * 0.05 }}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/12 text-sm font-mono text-white/75 hover:text-white hover:border-white/30 hover:bg-white/8 transition-all duration-200 cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Line>
            );
          })}
        </AnimateLines>

      </div>
    </section>
  );
}
