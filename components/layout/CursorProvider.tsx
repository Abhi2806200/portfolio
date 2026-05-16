"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function CursorProvider({ children }: { children: ReactNode }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -200, y: -200 });
  const pos    = useRef({ x: -200, y: -200 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on true pointer (mouse) devices
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    setIsPointer(true);

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => dotRef.current?.classList.add("hovering");
    const onLeave = () => dotRef.current?.classList.remove("hovering");

    window.addEventListener("mousemove", onMove);

    const handleables = document.querySelectorAll("a, button, [data-cursor]");
    handleables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let rafId: number;

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.14);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.14);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 10}px, ${pos.current.y - 10}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      handleables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {children}
      {/* Only render the dot on pointer devices */}
      {isPointer && (
        <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      )}
    </>
  );
}
