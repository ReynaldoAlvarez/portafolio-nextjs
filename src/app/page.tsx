import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { Marquee } from "@/components/portfolio/marquee";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Services } from "@/components/portfolio/services";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { CustomCursor } from "@/components/portfolio/custom-cursor";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0a0a0b] font-sans text-zinc-100">
      {/* Capas globales */}
      <div className="noise-overlay" aria-hidden />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
