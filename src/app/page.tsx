import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
