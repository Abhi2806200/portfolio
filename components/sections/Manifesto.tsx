"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Props {
  statement: string;
  sub?: string;
}

export default function Manifesto({ statement, sub }: Props) {
  const reduce = useReducedMotion();

  return (
    <div className="border-t border-b border-white/5 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="clip-container">
          <motion.p
            className="font-heading font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1] text-white/80"
            initial={reduce ? undefined : { y: "105%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {statement}
          </motion.p>
        </div>

        {sub && (
          <div className="clip-container mt-1">
            <motion.p
              className="font-heading font-bold text-[clamp(2rem,5vw,4rem)] leading-[1.1] text-white/20"
              initial={reduce ? undefined : { y: "105%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] as const }}
            >
              {sub}
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
}
