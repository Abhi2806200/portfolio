"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function HeroCanvas() {
  const reduce = useReducedMotion();
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const pos = useRef({ x: -9999, y: -9999 });
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (reduce) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.055);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.055);
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x - 350}px,${pos.current.y - 350}px,0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reduce]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Blob 1 — cyan, top-left */}
      <div
        className="absolute rounded-full animate-blob-1"
        style={{
          width: 720,
          height: 720,
          top: -220,
          left: -220,
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,245,255,0.22) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />

      {/* Blob 2 — purple, top-right */}
      <div
        className="absolute rounded-full animate-blob-2"
        style={{
          width: 640,
          height: 640,
          top: -160,
          right: -160,
          background:
            "radial-gradient(circle at 50% 50%, rgba(107,33,168,0.32) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Blob 3 — accent, bottom-center */}
      <div
        className="absolute rounded-full animate-blob-3"
        style={{
          width: 520,
          height: 520,
          bottom: -80,
          left: "calc(50% - 260px)",
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,245,255,0.11) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />

      {/* Subtle center radial vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 30%, rgba(10,10,15,0.6) 100%)",
        }}
      />

      {/* Mouse-following spotlight */}
      {!reduce && (
        <div
          ref={glowRef}
          className="absolute pointer-events-none will-change-transform"
          style={{
            width: 700,
            height: 700,
            top: 0,
            left: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,245,255,0.07) 0%, transparent 55%)",
            filter: "blur(60px)",
          }}
        />
      )}
    </div>
  );
}
