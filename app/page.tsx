import lazyLoad from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export const dynamic = "force-static";

const Projects = lazyLoad(() => import("@/components/sections/Projects"), {
  loading: () => <div className="min-h-[30vh] bg-background" />,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
