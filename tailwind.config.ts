import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        accent: "#00f5ff",
        "accent-dim": "#00c4cc",
        "text-primary": "#f0ede8",
        "text-muted": "#6b6b7b",
        "card-bg": "rgba(255,255,255,0.03)",
        "card-border": "rgba(255,255,255,0.07)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-rev": "marquee-rev 28s linear infinite",
        blink: "blink 1.1s ease-in-out infinite",
        "bounce-y": "bounce-y 1.6s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "orbit-cw": "orbit-cw 26s linear infinite",
        "orbit-ccw": "orbit-ccw 26s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "bounce-y": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "pulse-dot": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.6)" },
        },
        "orbit-cw": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "orbit-ccw": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
