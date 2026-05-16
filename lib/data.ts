import type { Experience, NavItem, Project, Skill } from "@/types";

export const navItems: NavItem[] = [
  { id: 1, label: "Home", href: "#hero" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Experience", href: "#experience" },
  { id: 5, label: "Skills", href: "#skills" },
  { id: 6, label: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Independent",
    role: "Intern Developer",
    start: "2021",
    end: "2022",
    description:
      "Built responsive web pages using HTML, CSS, and JavaScript. Gained hands-on experience with version control using Git and GitHub.",
    type: "internship",
    current: false,
  },
  {
    id: "2",
    company: "Independent",
    role: "Assistant Software Developer",
    start: "2022",
    end: "2023",
    description:
      "Developed dynamic web applications using React and Redux. Collaborated with backend developers to integrate RESTful APIs and enhanced user experience.",
    type: "full-time",
    current: false,
  },
  {
    id: "3",
    company: "Antier Solutions",
    role: "Frontend Developer",
    start: "2023",
    end: "June 2024",
    description:
      "Led frontend development projects with React, Next.js, and TypeScript. Implemented performance best practices, conducted code reviews, and mentored junior developers.",
    type: "full-time",
    current: false,
  },
  {
    id: "4",
    company: "Freelance",
    role: "Frontend Developer",
    start: "June 2024",
    end: "Present",
    description:
      "Working independently with clients on React, Next.js, and TypeScript projects. Building performant, SEO-optimized web applications tailored to client goals.",
    type: "freelance",
    current: true,
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Digital Ram Mandir",
    description:
      "A dedicated digital platform for the Ram Mandir featuring interactive maps, prayer schedules, and visitor information. Built for scale and accessibility across millions of devotees.",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    liveUrl: "https://www.digitalrammandir.com/",
    repoUrl: null,
    featured: true,
    gradient: "from-orange-950 via-red-950 to-amber-950",
  },
  {
    id: "2",
    title: "Raging Bull Trading Bot",
    description:
      "A Telegram-based algorithmic trading bot delivering real-time market analysis and automated signal notifications.",
    tech: ["Node.js", "Telegram API", "React"],
    liveUrl: "https://t.me/raging_bull_ant_dev_bot?start=",
    repoUrl: null,
    featured: false,
    gradient: "from-yellow-950 via-orange-950 to-red-950",
  },
  {
    id: "3",
    title: "Deeply Nested Form",
    description:
      "A React deep-dive showcasing complex form handling with dynamic nested structures, live validation, and clean state patterns.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://deeply-nested-form.vercel.app/",
    repoUrl: null,
    featured: false,
    gradient: "from-blue-950 via-cyan-950 to-teal-950",
  },
  {
    id: "4",
    title: "Three.js Experiment",
    description:
      "Interactive 3D visualization with real-time WebGL rendering and mouse-reactive animations demonstrating immersive browser experiences.",
    tech: ["Three.js", "JavaScript", "WebGL"],
    liveUrl: "https://three-js-example-nine.vercel.app/",
    repoUrl: null,
    featured: false,
    gradient: "from-purple-950 via-violet-950 to-pink-950",
  },
];

export const skills: Skill[] = [
  { id: "1", name: "React", category: "frontend" },
  { id: "2", name: "Next.js", category: "frontend" },
  { id: "3", name: "TypeScript", category: "frontend" },
  { id: "4", name: "JavaScript", category: "frontend" },
  { id: "5", name: "Tailwind CSS", category: "frontend" },
  { id: "6", name: "Redux", category: "frontend" },
  { id: "7", name: "Node.js", category: "backend" },
  { id: "8", name: "GraphQL", category: "backend" },
  { id: "9", name: "MongoDB", category: "backend" },
  { id: "10", name: "Express", category: "backend" },
  { id: "11", name: "HTML5", category: "frontend" },
  { id: "12", name: "CSS3", category: "frontend" },
];

export const techStack: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Redux",
  "Node.js",
  "GraphQL",
  "MongoDB",
  "Express",
  "Framer Motion",
  "Three.js",
  "Git",
  "Vercel",
  "REST APIs",
  "HTML5",
  "CSS3",
];

export const socialLinks = {
  github: "https://github.com/Abhi2806200",
  linkedin: "https://www.linkedin.com/in/abhishek-agnihotri-b46039165/",
  twitter: "https://twitter.com/Abhishe86339503",
  email: "abhishekagni2806@gmail.com",
  whatsapp: "https://wa.me/918219071272",
};

export const siteConfig = {
  name: "Abhishek Agnihotri",
  title: "Abhishek Agnihotri | Frontend Developer",
  description:
    "Experienced Frontend Developer specializing in React, Next.js, and TypeScript. Available for freelance projects.",
  url: "https://abhishek-agnihotri.vercel.app",
};
