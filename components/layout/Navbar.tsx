"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 60)), [scrollY]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-white/8"
            : "bg-transparent"
        )}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        <nav
          className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="#hero"
            className="font-display font-bold text-lg text-white select-none"
            aria-label="Home"
          >
            <span className="text-white/55">[</span>
            AA
            <span className="text-white/55">]</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="font-mono text-[11px] text-white/60 hover:text-white tracking-[0.35em] uppercase transition-colors duration-200 relative group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/assets/abhishek_resume.pdf"
                download="Abhishek_Agnihotri_Resume.pdf"
                className="px-4 py-2 rounded-full border border-white/25 text-white/70 font-mono text-[11px] tracking-widest uppercase hover:border-white/55 hover:text-white transition-all duration-200"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={cn("w-5 h-px bg-white/70 transition-all duration-300", open && "rotate-45 translate-y-2")} />
            <span className={cn("w-5 h-px bg-white/70 transition-all duration-300", open && "opacity-0")} />
            <span className={cn("w-5 h-px bg-white/70 transition-all duration-300", open && "-rotate-45 -translate-y-2")} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/96 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col items-center gap-8" role="list">
              {NAV.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 24, opacity: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="font-heading font-bold text-3xl text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{ delay: NAV.length * 0.06, duration: 0.35 }}
              >
                <a
                  href="/assets/abhishek_resume.pdf"
                  download="Abhishek_Agnihotri_Resume.pdf"
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-white/60 border border-white/25 px-6 py-2.5 rounded-full hover:text-white hover:border-white/55 transition-all duration-200 tracking-widest uppercase"
                >
                  Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
