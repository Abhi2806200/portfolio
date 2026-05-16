"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "relative rounded-2xl overflow-hidden cursor-pointer group",
        "border border-white/7 transition-all duration-300",
        featured ? "lg:col-span-2 min-h-72" : "min-h-52"
      )}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={reduce ? {} : { y: -4 }}
      transition={{ duration: 0.3 }}
      aria-label={`${project.title} project`}
    >
      {/* Gradient background */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-60", project.gradient)} aria-hidden="true" />

      {/* Animated gradient border for featured */}
      {featured && (
        <div className="absolute inset-0 rounded-2xl" style={{ padding: 1 }}>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-purple-500 to-accent opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-[gradient-border_4s_ease_infinite] bg-[length:300%_300%]" aria-hidden="true" />
        </div>
      )}

      {/* Card content */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-between min-h-[inherit]">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <h3 className={cn(
            "font-heading font-bold text-text-primary leading-tight mb-2",
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          )}>
            {project.title}
          </h3>
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 bg-background/90 backdrop-blur-sm rounded-2xl flex flex-col justify-end p-6 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-sm text-text-muted font-body leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-heading font-semibold text-accent hover:text-accent-dim transition-colors duration-200"
                  aria-label={`Visit ${project.title} live site`}
                >
                  <FiExternalLink size={15} />
                  Live site
                </a>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-heading font-semibold text-text-muted hover:text-text-primary transition-colors duration-200"
                    aria-label={`View ${project.title} source code`}
                  >
                    <FiGithub size={15} />
                    Source
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" aria-label="Projects section" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4"
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected work
        </motion.p>

        <motion.h2
          className="text-[clamp(2rem,4vw,3rem)] font-heading font-bold text-text-primary mb-16"
          initial={reduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Projects
        </motion.h2>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={reduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Featured */}
          <ProjectCard project={projects[0]} featured />

          {/* Standard cards */}
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />

          {/* Full-width bottom */}
          <motion.article
            className="sm:col-span-2 lg:col-span-3 rounded-2xl border border-white/7 overflow-hidden min-h-40 relative group"
            whileHover={reduce ? {} : { y: -4 }}
            transition={{ duration: 0.3 }}
            aria-label={`${projects[3].title} project`}
          >
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", projects[3].gradient)} aria-hidden="true" />
            <div className="relative z-10 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {projects[3].tech.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary">{projects[3].title}</h3>
                <p className="text-sm text-text-muted mt-2 max-w-2xl">{projects[3].description}</p>
              </div>
              <a
                href={projects[3].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/40 text-accent text-sm font-heading hover:bg-accent/10 transition-colors duration-200"
                aria-label={`Visit ${projects[3].title}`}
              >
                <FiExternalLink size={14} />
                View live
              </a>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
