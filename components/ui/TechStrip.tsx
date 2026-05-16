"use client";

import { techStack } from "@/lib/data";

const ITEMS = [...techStack, ...techStack];

export default function TechStrip() {
  return (
    <div className="border-t border-b border-white/5 py-4 overflow-hidden">
      {/* Forward */}
      <div className="relative flex overflow-hidden mb-3">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {ITEMS.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-text-muted/40">
                {t}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/10 shrink-0" aria-hidden="true" />
            </span>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap gap-0" aria-hidden="true">
          {ITEMS.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-text-muted/40">
                {t}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/10 shrink-0" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      {/* Reverse */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee-rev whitespace-nowrap gap-0">
          {ITEMS.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/10">
                {t}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/6 shrink-0" aria-hidden="true" />
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-rev whitespace-nowrap gap-0" aria-hidden="true">
          {ITEMS.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/10">
                {t}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/6 shrink-0" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
