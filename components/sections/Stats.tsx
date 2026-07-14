"use client";

import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";
import { siteConfig } from "@/lib/data";

const STATS = [
  { value: new Date().getFullYear() - siteConfig.careerStartYear, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Shipped" },
  { value: 3, suffix: "", label: "Companies" },
  { value: 100, suffix: "%", label: "Remote Ready" },
];

export default function Stats() {
  return (
    <section aria-label="Stats" className="border-t border-b border-white/8 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-10 gap-1 group"
            >
              <p className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-white tabular-nums leading-none">
                <Counter to={stat.value} suffix={stat.suffix} duration={1.6} />
              </p>
              <p className="text-xs font-mono text-white/45 tracking-[0.25em] uppercase mt-2 group-hover:text-white/70 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
