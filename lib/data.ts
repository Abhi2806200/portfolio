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
    company: "Antier Solutions",
    role: "Intern Developer",
    start: "2021",
    end: "2022",
    description:
      "Built responsive web pages using HTML, CSS, and JavaScript. Gained hands-on experience with Git, version control, and working within a professional engineering team.",
    type: "internship",
    current: false,
  },
  {
    id: "2",
    company: "Antier Solutions",
    role: "Assistant Software Developer",
    start: "2022",
    end: "2023",
    description:
      "Developed dynamic web applications using React and Redux. Collaborated with backend developers to integrate RESTful APIs and continuously improved user experience.",
    type: "full-time",
    current: false,
  },
  {
    id: "3",
    company: "Antier Solutions",
    role: "Frontend Developer",
    start: "2023",
    end: "May 2025",
    description:
      "Led frontend development using React, Next.js, and TypeScript. Implemented performance best practices, conducted code reviews, and mentored junior developers on the team.",
    type: "full-time",
    current: false,
  },
  {
    id: "4",
    company: "Freelance",
    role: "Software Developer",
    start: "May 2025",
    end: "Present",
    description:
      "Working independently with clients on React, Next.js, TypeScript, and AI-integrated projects. Building performant, SEO-optimized web applications and leveraging AI APIs to deliver smarter user experiences.",
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
    image: "/assets/portfolio/digitalram.png",
  },
  {
    id: "3",
    title: "Deeply Nested Form",
    description:
      "A React deep-dive showcasing complex form handling with dynamic nested structures, live validation, and clean state management patterns.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://deeply-nested-form.vercel.app/",
    repoUrl: null,
    featured: false,
    gradient: "from-blue-950 via-cyan-950 to-teal-950",
    image: "/assets/portfolio/nestedform.png",
  },
  {
    id: "4",
    title: "Three.js Experiment",
    description:
      "Interactive 3D visualization with real-time WebGL rendering and mouse-reactive animations — an exploration of immersive browser experiences.",
    tech: ["Three.js", "JavaScript", "WebGL"],
    liveUrl: "https://three-js-example-nine.vercel.app/",
    repoUrl: null,
    featured: false,
    gradient: "from-purple-950 via-violet-950 to-pink-950",
    image: "/assets/portfolio/three.png",
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
  { id: "13", name: "OpenAI API", category: "ai" },
  { id: "14", name: "AI Integration", category: "ai" },
  { id: "15", name: "Prompt Engineering", category: "ai" },
  { id: "16", name: "Vercel AI SDK", category: "ai" },
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
  "OpenAI API",
  "AI Integration",
  "Prompt Engineering",
  "Vercel AI SDK",
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
  whatsapp: `https://wa.me/918219071272?text=${encodeURIComponent(
    "Hi Abhishek! I came across your portfolio and I'm interested in discussing a freelance project with you. Can we connect?"
  )}`,
};

export const siteConfig = {
  name: "Abhishek Agnihotri",
  title: "Abhishek Agnihotri | Software Developer — React & Next.js",
  description:
    "Abhishek Agnihotri is a Software Developer with 5+ years building fast, modern web apps using React, Next.js, TypeScript & AI integration. Based in India. Available for freelance projects worldwide.",
  url: "https://abhishek-agnihotri.vercel.app",
  careerStartYear: 2021,
};
