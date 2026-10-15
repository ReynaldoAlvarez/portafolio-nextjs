import { Header } from '@/components/portfolio/header'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { FeaturedProject } from '@/components/portfolio/featured-project'
import { Projects } from '@/components/portfolio/projects'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Home() {
  return (
    <>
      {/* Global code pattern background - retro code aesthetic */}
      <div
        className="fixed inset-0 -z-50 code-pattern opacity-[0.4]"
        aria-hidden="true"
      />
      {/* Dark overlay so pattern is subtle but visible */}
      <div
        className="fixed inset-0 -z-40 bg-background/85"
        aria-hidden="true"
      />

      <Header />
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <FeaturedProject />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
