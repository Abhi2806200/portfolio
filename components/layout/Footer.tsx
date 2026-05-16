"use client";

import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 mt-32">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <p className="text-sm text-text-muted font-body">
          Designed &amp; built by{" "}
          <a
            href="https://www.linkedin.com/in/abhishek-agnihotri-b46039165/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-accent transition-colors duration-200"
          >
            Abhishek Agnihotri
          </a>{" "}
          · 2025
        </p>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-all duration-200"
        >
          <FiArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
