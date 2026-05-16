"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiCopy, FiCheck, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { socialLinks } from "@/lib/data";
import { SplitText } from "@/components/ui/SplitText";
import { AnimateLines, Line } from "@/components/ui/AnimateLines";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      toast.success("Email copied!", {
        position: "bottom-center", autoClose: 1400, hideProgressBar: true, theme: "dark",
        style: { background: "#111", border: "1px solid rgba(255,255,255,0.15)", color: "#f0ede8", fontSize: "13px" },
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy.", { position: "bottom-center", theme: "dark" });
    }
  };

  return (
    <>
      <section id="contact" aria-label="Contact section" className="py-24 border-t border-white/8">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

          <AnimateLines>
            <Line><p className="font-mono text-xs text-white/55 tracking-[0.4em] uppercase mb-4">Get In Touch</p></Line>
            <Line><h2 className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-white mb-4">Let&apos;s Work Together</h2></Line>
            <Line>
              <p className="text-base text-white/70 font-body max-w-xl mb-12">
                <SplitText speed={0.07} amount={0.05}>
                  {`I'm currently open to freelance projects, collaborations, and opportunities. If you have a project in mind or just want to say hi, my inbox is always open.`}
                </SplitText>
              </p>
            </Line>
          </AnimateLines>

          <AnimateLines className="grid grid-cols-1 lg:grid-cols-2 gap-6" stagger={0.2}>
            <Line>
              <motion.div
                className="group bg-white/3 border border-white/10 rounded-2xl p-8 hover:border-white/25 hover:bg-white/5 transition-all duration-300 cursor-pointer h-full"
                onClick={copy} role="button" aria-label={`Copy email ${socialLinks.email}`}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/6 border border-white/12 flex items-center justify-center text-white/60">
                    <FiMail size={18} />
                  </div>
                  <p className="text-xs font-mono text-white/55 tracking-widest uppercase">Email</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-white/80 text-sm group-hover:text-white transition-colors duration-200 break-all">{socialLinks.email}</p>
                  <span className="shrink-0 text-white/45 group-hover:text-white transition-colors duration-200">
                    {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                  </span>
                </div>
                <p className="text-xs text-white/45 mt-3 font-mono">Click to copy</p>
              </motion.div>
            </Line>

            <Line>
              <div className="bg-white/3 border border-white/10 rounded-2xl p-8 hover:border-white/18 transition-all duration-300 h-full">
                <p className="text-xs font-mono text-white/55 tracking-widest uppercase mb-6">Social</p>
                <div className="space-y-4">
                  {[
                    { href: socialLinks.github,   icon: <FiGithub size={16} />,   label: "GitHub",   sub: "github.com/Abhi2806200" },
                    { href: socialLinks.linkedin, icon: <FiLinkedin size={16} />, label: "LinkedIn", sub: "Connect with me" },
                    { href: socialLinks.whatsapp, icon: <FaWhatsapp size={16} />, label: "WhatsApp", sub: "Chat directly" },
                  ].map(({ href, icon, label, sub }, i) => (
                    <motion.a
                      key={label} href={href} target="_blank" rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }} transition={{ duration: 0.45, delay: i * 0.1 }}
                      className="flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-200 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/25 transition-colors duration-200">{icon}</div>
                      <div>
                        <p className="text-sm font-heading font-semibold text-white/80 group-hover:text-white transition-colors">{label}</p>
                        <p className="text-xs font-mono text-white/45">{sub}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </Line>
          </AnimateLines>

          <div className="mt-8">
            <motion.a
              href="/assets/abhishek_resume.pdf" download="Abhishek_Agnihotri_Resume.pdf"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/70 text-sm font-heading font-semibold hover:border-white/45 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Download Resume ↓
            </motion.a>
          </div>

        </div>
      </section>
      <ToastContainer />
    </>
  );
}
