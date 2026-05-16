"use client";

import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/8 mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        <p className="font-mono text-xs text-white/55 tracking-[0.3em] uppercase">
          Abhishek Agnihotri · {year}
        </p>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:border-white/45 hover:text-white transition-all duration-300"
        >
          <FiArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
