"use client";
import { motion } from "framer-motion";

export function SplitText({
  children,
  speed = 0.09,
  amount = 0.08,
}: {
  children: string;
  speed?: number;
  amount?: number;
}) {
  const words = children.split(" ");
  return (
    <span aria-label={children}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount }}
          transition={{
            duration: 0.8,
            delay: i * speed,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
