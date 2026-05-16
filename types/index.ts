export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string | null;
  featured: boolean;
  gradient: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
  type: "full-time" | "internship" | "freelance";
  current: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "ai" | "tools";
}

export interface NavItem {
  id: number;
  label: string;
  href: string;
}

export interface SocialLink {
  id: number;
  label: string;
  href: string;
}
