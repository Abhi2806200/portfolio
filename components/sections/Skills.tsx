"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiRedux, SiNodedotjs, SiGraphql, SiMongodb, SiExpress,
  SiHtml5, SiOpenai, SiVercel,
} from "react-icons/si";
import { TbBrain, TbPrompt, TbCode } from "react-icons/tb";
import { skills } from "@/lib/data";
import { AnimateLines, Line } from "@/components/ui/AnimateLines";

const ICON_MAP: Record<string, React.ReactNode> = {
  "React":              <SiReact />,
  "Next.js":            <SiNextdotjs />,
  "TypeScript":         <SiTypescript />,
  "JavaScript":         <SiJavascript />,
  "Tailwind CSS":       <SiTailwindcss />,
  "Redux":              <SiRedux />,
  "Node.js":            <SiNodedotjs />,
  "GraphQL":            <SiGraphql />,
  "MongoDB":            <SiMongodb />,
  "Express":            <SiExpress />,
  "HTML5":              <SiHtml5 />,
  "CSS3":               <TbCode />,
  "OpenAI API":         <SiOpenai />,
  "AI Integration":     <TbBrain />,
  "Prompt Engineering": <TbPrompt />,
  "Vercel AI SDK":      <SiVercel />,
};

const CATEGORIES = [
  {
    key: "frontend" as const,
    label: "Frontend",
    description: "User interfaces & web experiences",
    accent: "from-blue-500 via-sky-400 to-cyan-400",
    glow: "rgba(56,189,248,0.22)",
  },
  {
    key: "backend" as const,
    label: "Backend",
    description: "Server-side & databases",
    accent: "from-emerald-400 via-green-400 to-lime-400",
    glow: "rgba(52,211,153,0.22)",
  },
  {
    key: "ai" as const,
    label: "AI & Tools",
    description: "Artificial intelligence & automation",
    accent: "from-violet-500 via-purple-400 to-fuchsia-400",
    glow: "rgba(167,139,250,0.22)",
  },
];

function SkillCard({ cat, catSkills }: { cat: typeof CATEGORIES[number]; catSkills: typeof skills }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
    el.style.boxShadow = `0 20px 60px ${cat.glow}`;
    el.style.transition = "transform 0.1s ease, box-shadow 0.2s ease";
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)";
    el.style.boxShadow = "none";
    el.style.transition = "transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease";
  }

  return (
    <div
      ref={ref}
      className="flex flex-col bg-white/3 border border-white/10 rounded-2xl overflow-hidden hover:border-white/22 transition-colors duration-300 h-full"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className={`h-[3px] w-full bg-gradient-to-r ${cat.accent}`} />
      <div className="p-6">
        <p className="font-heading font-bold text-white text-lg mb-1">{cat.label}</p>
        <p className="text-xs font-mono text-white/50 mb-5">{cat.description}</p>
        <div className="flex flex-col gap-2">
          {catSkills.map((skill, si) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: si * 0.06 }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 border border-white/8 hover:border-white/20 hover:bg-white/8 transition-all duration-200 group/skill"
            >
              <span className="text-base text-white/50 group-hover/skill:text-white/90 transition-colors duration-200 shrink-0">
                {ICON_MAP[skill.name] ?? null}
              </span>
              <span className="text-sm font-mono text-white/70 group-hover/skill:text-white transition-colors duration-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
          {CATEGORIES.map((cat) => (
            <Line key={cat.key}>
              <SkillCard cat={cat} catSkills={skills.filter((s) => s.category === cat.key)} />
            </Line>
          ))}
        </AnimateLines>

      </div>
    </section>
  );
}
