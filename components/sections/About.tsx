"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import MarqueeText from "@/components/ui/MarqueeText";
import { techStack, siteConfig } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const reduce = useReducedMotion();
  const yearsExp = new Date().getFullYear() - siteConfig.careerStartYear;

  return (
    <section id="about" aria-label="About section" className="py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-4"
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          About me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left — text */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-heading font-bold text-text-primary leading-[1.1]">
              Building the web,{" "}
              <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                one pixel at a time.
              </em>
            </h2>

            <p className="text-lg text-text-muted font-body leading-relaxed">
              I&apos;m a software developer who turns complex ideas into seamless digital
              experiences. With{" "}
              <span className="text-text-primary font-medium">{yearsExp}+ years</span> of
              hands-on experience, I care deeply about performance, accessibility, and the
              details that make a product feel alive.
            </p>

            <p className="text-base text-text-muted font-body leading-relaxed">
              I&apos;ve built everything from blockchain platforms and real-time trading bots
              to AI-integrated web applications. I bring the same level of craft and obsession
              to every project, no matter the scale.
            </p>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "AI Integration", "Node.js"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-mono border border-accent/20 text-accent/80 rounded-full bg-accent/5 hover:border-accent/50 transition-colors duration-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — portrait */}
          <motion.div
            className="lg:col-span-2"
            initial={reduce ? {} : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-white/5 border border-white/8 shadow-[0_0_60px_rgba(0,245,255,0.04)]">
              <Image
                src="/assets/heroImage.png"
                alt="Abhishek Agnihotri — Software Developer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/40 rounded-bl-2xl" aria-hidden="true" />
            </div>

            {/* Stat pills below portrait */}
            <div className="flex gap-3 mt-4">
              <div className="flex-1 glass rounded-xl p-4 text-center">
                <p className="text-2xl font-heading font-bold text-accent">{yearsExp}+</p>
                <p className="text-xs text-text-muted font-mono mt-0.5">Years exp.</p>
              </div>
              <div className="flex-1 glass rounded-xl p-4 text-center">
                <p className="text-2xl font-heading font-bold text-accent">10+</p>
                <p className="text-xs text-text-muted font-mono mt-0.5">Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech stack marquee */}
      <div className="mt-28 space-y-3 overflow-hidden">
        <MarqueeText items={techStack} />
        <MarqueeText items={techStack} reverse />
      </div>
    </section>
  );
}
