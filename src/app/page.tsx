import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { CoreExpertise } from "@/components/expertise";
import { ProfessionalCapabilities } from "@/components/capabilities";
import { AreasOfWork } from "@/components/areas-of-work";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020610] bg-grid-pattern text-slate-100 overflow-hidden">
      {/* Architectural CAD Blueprint Ambient Glows */}
      <div className="fixed top-0 left-1/4 size-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 size-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] bg-sky-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <CoreExpertise />
      <ProfessionalCapabilities />
      <AreasOfWork />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
