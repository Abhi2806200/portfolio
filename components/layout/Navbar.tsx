"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>, i: number) => {
    const el = linkRefs.current[i];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }, []);

  const handleMouseLeave = useCallback((i: number) => {
    const el = linkRefs.current[i];
    if (el) el.style.transform = "translate(0,0)";
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/85 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-1 font-heading font-bold text-lg text-text-primary select-none"
            aria-label="Abhishek Agnihotri — Home"
          >
            <span className="text-accent">[</span>
            <span>AA</span>
            <span className="text-accent">]</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navItems.map(({ id, label, href }, i) => (
              <li key={id}>
                <Link
                  href={href}
                  ref={(el) => { linkRefs.current[i] = el; }}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                  className="text-sm font-body text-text-muted hover:text-text-primary transition-all duration-200 relative group"
                  style={{ transition: "transform 0.15s ease, color 0.2s" }}
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={cn("w-6 h-px bg-text-primary transition-all duration-300", menuOpen && "rotate-45 translate-y-2")} />
            <span className={cn("w-6 h-px bg-text-primary transition-all duration-300", menuOpen && "opacity-0")} />
            <span className={cn("w-6 h-px bg-text-primary transition-all duration-300", menuOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col items-center gap-8" role="list">
                {navItems.map(({ id, label, href }, i) => (
                  <motion.li
                    key={id}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="text-4xl font-heading font-bold text-text-primary hover:text-accent transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
