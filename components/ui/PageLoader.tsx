"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const DURATION = 1800;
    const start = performance.now();

    // Ease-out cubic — starts fast, breathes at the end
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 2.4);

    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      setProgress(Math.round(easeOut(t) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 180);
        setTimeout(() => setVisible(false), 900);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{ background: "#0a0a0a" }}
        >
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          {/* Radial vignette over the grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, #0a0a0a 100%)",
            }}
          />

          {/* ── Content ── */}
          <div className="relative flex flex-col items-center">

            {/* Monogram */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              animate={
                done
                  ? { opacity: 0, scale: 1.3, filter: "blur(32px)" }
                  : { opacity: 1, scale: 1, filter: "blur(0px)" }
              }
              transition={{
                duration: done ? 0.55 : 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display font-bold leading-none tracking-tight"
              style={{
                fontSize: "clamp(6rem, 20vw, 13rem)",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #d0dff0 28%, #7b9ec9 60%, #3a5a80 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AA
            </motion.span>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 10, letterSpacing: "0.6em" }}
              animate={
                done
                  ? { opacity: 0, y: -6, letterSpacing: "0.8em" }
                  : { opacity: 0.38, y: 0, letterSpacing: "0.45em" }
              }
              transition={{ duration: done ? 0.4 : 0.7, delay: done ? 0 : 0.45 }}
              className="font-mono text-[11px] uppercase text-white mt-2"
            >
              Abhishek Agnihotri
            </motion.p>

            {/* Progress bar + counter */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={done ? { opacity: 0 } : { opacity: 1, y: 0 }}
              transition={{ delay: done ? 0 : 0.35, duration: 0.5 }}
              className="mt-12 flex flex-col items-center gap-3"
            >
              {/* Bar track */}
              <div className="relative w-36 h-px bg-white/10 overflow-hidden rounded-full">
                {/* Animated fill */}
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-none"
                  style={{
                    width: `${progress}%`,
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.9) 100%)",
                  }}
                />
                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-y-0 w-8 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                    left: `${progress}%`,
                    transform: "translateX(-50%)",
                  }}
                />
              </div>

              {/* Percentage */}
              <p className="font-mono text-[11px] text-white/22 tabular-nums">
                {String(progress).padStart(3, " ")}%
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
