"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const DURATION = 2200;
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
        setTimeout(() => setDone(true), 300);
        setTimeout(() => setVisible(false), 1100);
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
          exit={{ y: "-100%", transition: { duration: 1.05, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center"
          style={{ background: "#0a0a0a" }}
        >
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* Radial spotlight */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              style={{
                width: 600,
                height: 600,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Corner brackets */}
          {[
            { top: 32, left: 40,  borderTop: true,  borderLeft: true },
            { top: 32, right: 40, borderTop: true,  borderRight: true },
            { bottom: 32, left: 40,  borderBottom: true, borderLeft: true },
            { bottom: 32, right: 40, borderBottom: true, borderRight: true },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute pointer-events-none"
              style={{
                ...pos,
                width: 20,
                height: 20,
                borderTopWidth:    pos.borderTop    ? "1.5px" : 0,
                borderBottomWidth: pos.borderBottom ? "1.5px" : 0,
                borderLeftWidth:   pos.borderLeft   ? "1.5px" : 0,
                borderRightWidth:  pos.borderRight  ? "1.5px" : 0,
                borderStyle: "solid",
                borderColor: "rgba(255,255,255,0.2)",
                borderRadius: pos.borderTop && pos.borderLeft
                  ? "4px 0 0 0"
                  : pos.borderTop && pos.borderRight
                  ? "0 4px 0 0"
                  : pos.borderBottom && pos.borderLeft
                  ? "0 0 0 4px"
                  : "0 0 4px 0",
              }}
            />
          ))}

          {/* ── Monogram ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: "blur(16px)" }}
            animate={
              done
                ? { opacity: 0, scale: 1.15, filter: "blur(28px)" }
                : { opacity: 1, scale: 1,    filter: "blur(0px)" }
            }
            transition={{ duration: done ? 0.55 : 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5 select-none"
          >
            {/* AA */}
            <span
              className="font-display font-bold leading-none tracking-tight"
              style={{
                fontSize: "clamp(6rem, 18vw, 12rem)",
                background:
                  "linear-gradient(160deg, #ffffff 0%, #e2e8f0 30%, #94a3b8 65%, #64748b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.04em",
              }}
            >
              AA
            </span>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={
                done
                  ? { opacity: 0 }
                  : { opacity: 0.3, y: 0 }
              }
              transition={{ duration: 0.8, delay: done ? 0 : 0.5 }}
              className="font-mono text-[11px] tracking-[0.45em] uppercase text-white"
            >
              Abhishek Agnihotri
            </motion.p>
          </motion.div>

          {/* ── Progress bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={done ? { opacity: 0 } : { opacity: 1 }}
            transition={{ delay: done ? 0 : 0.4, duration: 0.5 }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2 w-56"
          >
            {/* Track */}
            <div className="relative h-px w-full rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
              {/* Fill */}
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0.75))",
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
                  background: "#ffffff",
                  boxShadow:
                    "0 0 5px 1px rgba(255,255,255,0.95), 0 0 12px 3px rgba(255,255,255,0.3)",
                  transition: "left 80ms linear",
                }}
              />
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
