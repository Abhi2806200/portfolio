"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { socialLinks } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      toast.success("Email copied to clipboard!", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: true,
        theme: "dark",
        style: { background: "#0d1117", border: "1px solid rgba(0,245,255,0.3)", color: "#f0ede8" },
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy. Please copy manually.", { position: "bottom-center", theme: "dark" });
    }
  };

  return (
    <>
      <section id="contact" aria-label="Contact section" className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-6"
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in touch
          </motion.p>

          <motion.h2
            className="text-[clamp(2.5rem,6vw,5rem)] font-heading font-bold text-text-primary leading-tight mb-6"
            initial={reduce ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Let&apos;s build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              something.
            </span>
          </motion.h2>

          <motion.p
            className="text-text-muted font-body text-lg mb-12 max-w-xl mx-auto"
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Available for freelance projects. If you have an idea you want to bring to life,
            I&apos;d love to hear about it.
          </motion.p>

          {/* Email pill */}
          <motion.div
            className="flex justify-center mb-12"
            initial={reduce ? {} : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={handleCopyEmail}
              aria-label={`Copy email address ${socialLinks.email}`}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full border border-accent/30 bg-accent/5 text-text-primary font-mono text-sm hover:border-accent hover:bg-accent/10 transition-all duration-300"
            >
              {socialLinks.email}
              <span className="text-accent transition-transform duration-200 group-hover:scale-110">
                {copied ? <FiCheck size={15} /> : <FiCopy size={15} />}
              </span>
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="group flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              <FiGithub size={18} />
              <span className="text-sm font-body relative">
                GitHub
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </span>
            </a>

            <div className="w-px h-4 bg-white/10" aria-hidden="true" />

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="group flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              <FiLinkedin size={18} />
              <span className="text-sm font-body relative">
                LinkedIn
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </span>
            </a>

            <div className="w-px h-4 bg-white/10" aria-hidden="true" />

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="group flex items-center gap-2 text-text-muted hover:text-[#25D366] transition-colors duration-200"
            >
              <FaWhatsapp size={18} />
              <span className="text-sm font-body relative">
                WhatsApp
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#25D366] group-hover:w-full transition-all duration-300" />
              </span>
            </a>

            <div className="w-px h-4 bg-white/10" aria-hidden="true" />

            <a
              href={`/assets/abhishek_resume.pdf`}
              download="Abhishek_Agnihotri_Resume.pdf"
              aria-label="Download Abhishek Agnihotri's resume"
              className="group flex items-center gap-2 text-text-muted hover:text-accent transition-colors duration-200 text-sm font-body"
            >
              Resume ↓
            </a>
          </motion.div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
