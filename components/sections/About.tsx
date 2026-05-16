"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import MarqueeText from "@/components/ui/MarqueeText";
import { techStack } from "@/lib/data";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" aria-label="About section" className="py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4"
          variants={sectionVariants}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          About me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left — text (3 cols) */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            variants={sectionVariants}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-text-primary leading-tight">
              Building the web,{" "}
              <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                one pixel at a time.
              </em>
            </h2>

            <p className="text-lg text-text-muted font-body leading-relaxed">
              I&apos;m a frontend developer who turns complex ideas into seamless digital
              experiences. With 4+ years of hands-on work across React, Next.js, and TypeScript,
              I care deeply about performance, accessibility, and the details that make an
              interface feel alive.
            </p>

            <p className="text-base text-text-muted font-body leading-relaxed">
              Currently freelancing — open to projects where design and engineering intersect.
              I&apos;ve worked on everything from blockchain-adjacent platforms to high-traffic
              web apps, and I bring the same level of craft to each one.
            </p>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "GraphQL", "Framer Motion"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-mono border border-accent/20 text-accent/80 rounded-full bg-accent/5"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — portrait (2 cols) */}
          <motion.div
            className="lg:col-span-2"
            initial={reduce ? {} : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-white/5 border border-white/7">
              <Image
                src="/assets/heroImage.png"
                alt="Abhishek Agnihotri — Frontend Developer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Cyan corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/50 rounded-tr-2xl" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/50 rounded-bl-2xl" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech stack marquee */}
      <div className="mt-24 space-y-4 overflow-hidden">
        <MarqueeText items={techStack} />
        <MarqueeText items={techStack} reverse />
      </div>
    </section>
  );
}
