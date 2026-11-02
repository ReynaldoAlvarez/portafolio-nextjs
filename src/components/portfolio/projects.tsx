'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Projects() {
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section
      id="proyectos"
      className="section-anchor scroll-mt-24 py-20 lg:py-28"
    >
      <div className="container-portfolio">
        <SectionHeading
          index="03"
          eyebrow="Proyectos"
          title={
            <>
              Trabajo <em className="font-light italic">seleccionado</em>
            </>
          }
          description="Plataformas reales, desplegadas y mantenidas. Cada proyecto refleja una arquitectura distinta y un problema distinto resuelto."
          className="mb-10 lg:mb-14"
        />

        {/* Editorial index: year · title · category, hairline rules */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          className="border-t border-border"
        >
          {otherProjects.map((project) => {
            const href = project.link ?? project.github ?? '#'
            return (
              <motion.a
                key={project.slug}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group -mx-3 grid grid-cols-[3.2rem_1fr_auto] items-start gap-x-4 rounded-xl border-b border-border px-3 py-7 transition-colors duration-200 hover:bg-muted/50 sm:grid-cols-[4.5rem_1fr_auto] sm:gap-x-8 sm:py-8"
              >
                <span className="tnum pt-1 text-xs text-muted-foreground">
                  {project.year}
                </span>

                <div className="min-w-0">
                  <h3 className="inline-flex flex-wrap items-center gap-x-2 text-xl font-medium tracking-tight transition-colors duration-200 group-hover:text-primary sm:text-[1.45rem]">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-0.5 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground/70">
                    {project.technologies.slice(0, 5).join(' · ')}
                  </p>
                </div>

                <span className="pt-1.5 text-right text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground/80">
                  {project.category}
                </span>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="https://github.com/ReynaldoAlvarez"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            Ver todos los repositorios en GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
