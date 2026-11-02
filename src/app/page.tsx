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
      <Header />
      <main className="flex-1">
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
