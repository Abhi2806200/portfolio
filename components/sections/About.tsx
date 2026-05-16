"use client";

import { siteConfig } from "@/lib/data";
import { SplitText } from "@/components/ui/SplitText";
import { AnimateLines, Line } from "@/components/ui/AnimateLines";

export default function About() {
  const years = new Date().getFullYear() - siteConfig.careerStartYear;

  const FACTS = [
    { label: "Location",     value: "India 🇮🇳" },
    { label: "Availability", value: "Open to Freelance" },
    { label: "Experience",   value: `${years}+ Years` },
    { label: "Focus",        value: "React & Next.js" },
    { label: "Specialty",    value: "AI Integration" },
    { label: "Approach",     value: "Clean, Scalable Code" },
  ];

  return (
    <section id="about" aria-label="About section" className="py-24 border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        <AnimateLines>
          <Line><p className="font-mono text-xs text-white/55 tracking-[0.4em] uppercase mb-4">About Me</p></Line>
          <Line><h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-white mb-16">The Story So Far</h2></Line>
        </AnimateLines>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20">

          {/* Left — narrative paragraphs (word by word) */}
          <AnimateLines className="space-y-6">
            <Line>
              <p className="text-xl font-heading font-semibold text-white leading-[1.35]">
                <SplitText speed={0.08}>
                  {`I didn't start with code — I started with curiosity.`}
                </SplitText>
              </p>
            </Line>
            <Line>
              <p className="text-base text-white/75 font-body leading-relaxed">
                <SplitText speed={0.07} amount={0.04}>
                  {`That curiosity became a career. ${years}+ years of building things that work, look right, and feel inevitable once you use them. I care deeply about the details most people scroll past — the micro-animation that makes an interaction feel alive, the architecture decision that saves a team months down the road.`}
                </SplitText>
              </p>
            </Line>
            <Line>
              <p className="text-base text-white/70 font-body leading-relaxed">
                <SplitText speed={0.07} amount={0.04}>
                  {`I've worked across the stack — blockchain platforms at Antier Solutions, algorithmic trading bots, AI-integrated applications, and interactive 3D web experiences. The stack changes. The obsession with craft doesn't.`}
                </SplitText>
              </p>
            </Line>
            <Line>
              <p className="text-base text-white/70 font-body leading-relaxed">
                <SplitText speed={0.07} amount={0.04}>
                  {`Today I work independently, taking on freelance projects where performance, design, and intelligence need to meet in one place. If you're building something worth building, I'd like to be part of it.`}
                </SplitText>
              </p>
            </Line>
            <Line><div className="h-px bg-white/10 mt-4" /></Line>
            <Line>
              <p className="text-sm text-white/45 font-mono italic">
                &ldquo;You be the problem — I&apos;ll be the solution.&rdquo;
              </p>
            </Line>
          </AnimateLines>

          {/* Right — quick facts */}
          <AnimateLines className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3" stagger={0.1}>
            {FACTS.map((fact) => (
              <Line key={fact.label}>
                <div className="flex items-center justify-between px-5 py-4 rounded-xl bg-white/3 border border-white/10 hover:border-white/22 hover:bg-white/5 transition-all duration-200">
                  <span className="text-xs font-mono text-white/50 tracking-wider uppercase">{fact.label}</span>
                  <span className="text-sm font-heading font-semibold text-white">{fact.value}</span>
                </div>
              </Line>
            ))}
          </AnimateLines>

        </div>
      </div>
    </section>
  );
}
