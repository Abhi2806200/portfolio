"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const DURATION = 2000;
    const start = performance.now();

    const ease = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      setProgress(Math.round(ease(t) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
        setTimeout(() => setVisible(false), 1050);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const displayNum = String(progress).padStart(2, "0");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#0a0a0a" }}
        >
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.018) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* Top monogram */}
          <motion.div
            className="absolute top-9 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -8 }}
            animate={done ? { opacity: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="font-mono text-[11px] tracking-[0.55em] uppercase"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              [ AA ]
            </span>
          </motion.div>

          {/* ── Main counter ── */}
          <div className="relative flex flex-col items-center select-none">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
              animate={
                done
                  ? { opacity: 0, y: -16, filter: "blur(16px)" }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              transition={{
                duration: done ? 0.45 : 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-start leading-none"
            >
              {/* Number */}
              <span
                className="font-display font-bold tabular-nums"
                style={{
                  fontSize: "clamp(7rem, 24vw, 15rem)",
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  background:
                    "linear-gradient(160deg, #ffffff 0%, #e2e8f0 28%, #94a3b8 62%, #64748b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {displayNum}
              </span>

              {/* Percent symbol — sits top-right */}
              <span
                className="font-mono font-light self-start mt-3 ml-1"
                style={{
                  fontSize: "clamp(1.1rem, 3.5vw, 2.2rem)",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0",
                }}
              >
                %
              </span>
            </motion.div>

            {/* Divider + name */}
            <motion.div
              className="flex flex-col items-center gap-3 mt-6 w-full"
              initial={{ opacity: 0, scaleX: 0.6 }}
              animate={done ? { opacity: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="w-full h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.3) 70%, transparent)",
                }}
              />
              <div className="flex items-center gap-4">
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.45em]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Abhishek
                </span>
                <span
                  className="w-[3px] h-[3px] rounded-full"
                  style={{ background: "rgba(255,255,255,0.45)" }}
                />
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.45em]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Agnihotri
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── Full-width bottom progress line ── */}
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            initial={{ opacity: 0 }}
            animate={done ? { opacity: 0 } : { opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* Track */}
            <div
              className="relative w-full"
              style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}
            >
              {/* Fill */}
              <div
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.45))",
                  transition: "width 80ms linear",
                }}
              />
              {/* Glowing tip */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 4,
                  height: 4,
                  top: "50%",
                  left: `${progress}%`,
                  transform: "translate(-50%, -50%)",
                  background: "rgba(255,255,255,0.9)",
                  boxShadow:
                    "0 0 6px 2px rgba(255,255,255,0.6), 0 0 18px 4px rgba(255,255,255,0.2)",
                  transition: "left 80ms linear",
                }}
              />
            </div>
          </motion.div>

          {/* Corner accents */}
          {(
            [
              { top: 28,    left: 32,  radius: "3px 0 0 0", bT: 1, bB: 0, bL: 1, bR: 0 },
              { top: 28,    right: 32, radius: "0 3px 0 0", bT: 1, bB: 0, bL: 0, bR: 1 },
              { bottom: 28, left: 32,  radius: "0 0 0 3px", bT: 0, bB: 1, bL: 1, bR: 0 },
              { bottom: 28, right: 32, radius: "0 0 3px 0", bT: 0, bB: 1, bL: 0, bR: 1 },
            ] as Array<{
              top?: number; bottom?: number; left?: number; right?: number;
              radius: string; bT: number; bB: number; bL: number; bR: number;
            }>
          ).map(({ top, bottom, left, right, radius, bT, bB, bL, bR }, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                top, bottom, left, right,
                width: 16,
                height: 16,
                borderTopWidth:    bT ? "1px" : 0,
                borderBottomWidth: bB ? "1px" : 0,
                borderLeftWidth:   bL ? "1px" : 0,
                borderRightWidth:  bR ? "1px" : 0,
                borderStyle: "solid",
                borderColor: "rgba(255,255,255,0.28)",
                borderRadius: radius,
              }}
              initial={{ opacity: 0 }}
              animate={done ? { opacity: 0 } : { opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
