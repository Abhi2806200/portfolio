"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "@/lib/data";
import { SplitText } from "@/components/ui/SplitText";
import { AnimateLines, Line } from "@/components/ui/AnimateLines";

// Colors matched to each project's theme — Ram Mandir, Trading Bot, React Form, Three.js
const ACCENTS = [
  { bar: "from-amber-400 via-orange-400 to-yellow-400",   glow: "rgba(251,191,36,0.18)" },   // saffron/gold
  { bar: "from-emerald-400 via-green-400 to-lime-400",    glow: "rgba(52,211,153,0.18)" },    // bull/gains green
  { bar: "from-blue-500 via-sky-400 to-cyan-400",         glow: "rgba(56,189,248,0.18)" },    // electric blue
  { bar: "from-violet-500 via-purple-400 to-fuchsia-400", glow: "rgba(167,139,250,0.18)" },   // 3D/WebGL purple
];

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects section" className="py-24 border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        <AnimateLines>
          <Line><p className="font-mono text-xs text-white/55 tracking-[0.4em] uppercase mb-4">Selected Work</p></Line>
          <Line><h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-white mb-4">Projects</h2></Line>
          <Line><p className="text-base text-white/65 font-body max-w-xl mb-16">A selection of things I&apos;ve built — from production apps to experimental explorations.</p></Line>
        </AnimateLines>

        <AnimateLines className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.15}>
          {projects.map((project, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Line key={project.id}>
                <motion.article
                  className="group flex flex-col bg-white/3 border border-white/10 rounded-2xl overflow-hidden hover:border-white/22 transition-all duration-300 h-full"
                  style={{ boxShadow: `0 0 0 0 ${accent.glow}` }}
                  whileHover={{ boxShadow: `0 8px 40px ${accent.glow}`, y: -4 }}
                >
                  <div className={`h-[3px] w-full bg-gradient-to-r ${accent.bar}`} />

                  {/* Project thumbnail */}
                  <div className="relative w-full h-44 overflow-hidden border-b border-white/8">
                    {/* Mock browser chrome */}
                    <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-black/60 backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-red-500/70" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                      <span className="w-2 h-2 rounded-full bg-green-500/70" />
                    </div>
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </>
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <div className="flex flex-col items-center gap-3 opacity-30">
                          <div className="w-16 h-1.5 rounded-full bg-white/60" />
                          <div className="w-10 h-1.5 rounded-full bg-white/40" />
                          <div className="w-12 h-1.5 rounded-full bg-white/50" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1 p-6 gap-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-heading font-bold text-xl text-white leading-tight">{project.title}</h3>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`} className="shrink-0 mt-0.5 text-white/45 hover:text-white transition-colors duration-200">
                          <FiExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    {/* Description — word by word */}
                    <p className="text-sm text-white/70 font-body leading-relaxed flex-1">
                      <SplitText speed={0.07} amount={0.04}>{project.description}</SplitText>
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/8">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/12 text-xs font-mono text-white/65">{t}</span>
                      ))}
                    </div>
                  </div>

                  {project.liveUrl && (
                    <div className="px-6 pb-5">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono text-white/55 hover:text-white transition-colors duration-200">
                        <FiExternalLink size={11} />
                        View Live Site
                      </a>
                    </div>
                  )}
                </motion.article>
              </Line>
            );
          })}
        </AnimateLines>
      </div>
    </section>
  );
}
