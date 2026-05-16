"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiPlus, FiMinus } from "react-icons/fi";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

function ProjectRow({ project, index, isOpen, onToggle }: {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className={cn(
        "border-b border-white/8 cursor-pointer group",
        isOpen ? "border-accent/20" : ""
      )}
      initial={reduce ? {} : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Row header */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`project-body-${project.id}`}
        className="w-full text-left py-8 flex items-center gap-6 md:gap-10"
      >
        {/* Number */}
        <span className="font-mono text-xs text-text-muted/50 shrink-0 w-8 select-none">
          {num}
        </span>

        {/* Title */}
        <h3 className={cn(
          "flex-1 font-heading font-bold text-[clamp(1.4rem,3.5vw,2.5rem)] leading-none transition-colors duration-300",
          isOpen ? "text-accent" : "text-text-primary group-hover:text-accent"
        )}>
          {project.title}
        </h3>

        {/* Tech tags — hidden on small screens */}
        <div className="hidden md:flex flex-wrap gap-2 shrink-0 max-w-[260px]">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 text-[10px] font-mono border border-white/10 text-text-muted rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Toggle icon */}
        <span className={cn(
          "ml-4 shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
          isOpen
            ? "border-accent text-accent bg-accent/10"
            : "border-white/15 text-text-muted group-hover:border-accent/40 group-hover:text-accent"
        )}>
          {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </span>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`project-body-${project.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-14 md:pl-[calc(2rem+40px)] grid md:grid-cols-[1fr_auto] gap-6 items-end">
              <div>
                {/* Tech tags on mobile */}
                <div className="flex md:hidden flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-[10px] font-mono border border-white/10 text-text-muted rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-text-muted font-body text-base leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Visit ${project.title} live site`}
                className="inline-flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-full border border-accent/40 text-accent text-sm font-heading font-semibold hover:bg-accent/10 hover:border-accent transition-all duration-200"
              >
                <FiExternalLink size={14} />
                View live
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Projects() {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(projects[0].id);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="projects" aria-label="Projects section" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end justify-between mb-4">
          <motion.p
            className="text-accent font-mono text-xs tracking-[0.3em] uppercase"
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Selected work
          </motion.p>
          <motion.span
            className="font-mono text-xs text-text-muted/50 hidden sm:block"
            initial={reduce ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {projects.length} projects
          </motion.span>
        </div>

        <motion.h2
          className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold text-text-primary mb-4"
          initial={reduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Projects
        </motion.h2>

        {/* Thin divider */}
        <motion.div
          className="w-full h-px bg-white/8 mb-2"
          initial={reduce ? {} : { scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Project rows */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              isOpen={openId === project.id}
              onToggle={() => toggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
