"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "span" | "div";
}

export default function TextReveal({ children, delay = 0, className, as: Tag = "div" }: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <div className="clip-container">
      <MotionTag
        className={className}
        initial={reduce ? undefined : { y: "105%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          delay,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
      >
        {children}
      </MotionTag>
    </div>
  );
}
