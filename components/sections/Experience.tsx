"use client";

import { FiMapPin } from "react-icons/fi";
import { experiences } from "@/lib/data";
import { SplitText } from "@/components/ui/SplitText";
import { AnimateLines, Line } from "@/components/ui/AnimateLines";

const sorted = [...experiences].reverse();

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience section" className="py-24 border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        <AnimateLines>
          <Line><p className="font-mono text-xs text-white/55 tracking-[0.4em] uppercase mb-4">Career</p></Line>
          <Line><h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-white mb-16">Experience</h2></Line>
        </AnimateLines>

        <div className="relative max-w-3xl">

          {/* ── Road ── */}
          <div
            className="absolute top-0 bottom-24 pointer-events-none"
            style={{ left: "22px", transform: "translateX(-50%)", width: "8px" }}
          >
            {/* Road surface */}
            <div
              className="absolute inset-0 rounded-sm"
              style={{
                background: "linear-gradient(to bottom, rgba(74,222,128,0.12) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            />
            {/* Green glow at top (current position) */}
            <div
              className="absolute top-0 inset-x-0 h-32 rounded-sm"
              style={{
                background: "linear-gradient(to bottom, rgba(74,222,128,0.35) 0%, transparent 100%)",
              }}
            />
            {/* Center lane dashes */}
            <div
              className="absolute inset-y-0"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                width: "1.5px",
                background:
                  "repeating-linear-gradient(to bottom, transparent 0px, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 16px)",
              }}
            />
          </div>

          <AnimateLines className="space-y-8" stagger={0.2} amount={0.04}>
            {sorted.map((exp, i) => (
              <Line key={exp.id}>
                <div className="relative pl-14">
                  {exp.current ? (
                    <div className="absolute left-[22px] -translate-x-1/2 top-5">
                      <span className="absolute inline-flex h-6 w-6 rounded-full bg-green-400/25 animate-ping" />
                      <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-green-400 border-2 border-background shadow-[0_0_12px_rgba(74,222,128,0.6)]">
                        <FiMapPin size={11} className="text-black" />
                      </div>
                    </div>
                  ) : (
                    <div className={`absolute left-[22px] -translate-x-1/2 top-[22px] w-3.5 h-3.5 rounded-full border-2 bg-background ${i === sorted.length - 1 ? "border-white/30" : "border-white/40"}`} />
                  )}

                  {exp.current && (
                    <div className="absolute left-14 top-2">
                      <span className="inline-flex items-center gap-1 text-[9px] font-mono text-green-400/80 tracking-[0.3em] uppercase">↑ You are here</span>
                    </div>
                  )}

                  <div className={`rounded-2xl p-6 border transition-all duration-300 ${exp.current ? "bg-green-400/4 border-green-400/20 hover:border-green-400/40 hover:bg-green-400/6 mt-6" : "bg-white/3 border-white/10 hover:border-white/20 hover:bg-white/5"}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-heading font-bold text-lg text-white leading-snug">{exp.role}</h3>
                        <p className="text-sm font-mono text-white/60 mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <span className="text-xs font-mono text-white/55 bg-white/5 border border-white/12 px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.start} — {exp.end}
                        </span>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-green-400 bg-green-400/10 border border-green-400/25 px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description — word by word */}
                    <p className="text-sm text-white/70 font-body leading-relaxed mb-4">
                      <SplitText speed={0.07} amount={0.04}>{exp.description}</SplitText>
                    </p>

                    <span className={`inline-block text-xs font-mono px-2.5 py-0.5 rounded-full border ${exp.type === "internship" ? "text-blue-400/80 border-blue-400/25 bg-blue-400/8" : exp.type === "freelance" ? "text-purple-400/80 border-purple-400/25 bg-purple-400/8" : "text-white/55 border-white/15 bg-white/4"}`}>
                      {exp.type === "full-time" ? "Full-time" : exp.type === "internship" ? "Internship" : "Freelance"}
                    </span>
                  </div>
                </div>
              </Line>
            ))}

            <Line>
              <div className="relative pl-14 pt-10">
                <div className="absolute left-[22px] -translate-x-1/2 top-9 w-3 h-3 rounded-full border-2 border-white/20 bg-background" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-white/15" />
                  <p className="text-xs font-mono text-white/35 tracking-widest uppercase">Journey began · 2021</p>
                </div>
              </div>
            </Line>
          </AnimateLines>
        </div>
      </div>
    </section>
  );
}
