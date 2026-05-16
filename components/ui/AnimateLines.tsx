"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.05 },
  },
};

export const line: Variants = {
  hidden: { opacity: 0, y: 52, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimateLines({
  children,
  className,
  stagger = 0.16,
  amount = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount }}
    >
      {children}
    </motion.div>
  );
}

export function Line({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={line} className={className}>
      {children}
    </motion.div>
  );
}
