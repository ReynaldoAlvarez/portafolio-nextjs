'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function FeaturedProject() {
  const project = projects.find((p) => p.featured)
  if (!project) return null

  return (
    <section
      id="destacado"
      className="section-anchor scroll-mt-24 py-20 lg:py-28"
    >
      <div className="container-portfolio">
        <SectionHeading
          index="02"
          eyebrow="Proyecto destacado"
          title={
            <>
              SaaS educativo con{' '}
              <em className="font-light italic">inteligencia artificial</em>
            </>
          }
          description="Una plataforma backend diseñada para el sector educativo: arquitectura modular, seguridad de producción e integración de IA pedagógica."
          className="mb-12 lg:mb-16"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2 }}
          className="overflow-hidden rounded-2xl bg-card shadow-md transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="grid lg:grid-cols-[1.45fr_1fr]">
            {/* Main content */}
            <div className="p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                  <span
                    className="status-dot h-1.5 w-1.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {project.status}
                </span>
                <span className="tnum text-[11px] text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl">
                {project.title.split('—')[0].trim()}
                <span className="text-primary">.</span>
              </h3>
              <p className="mt-2 text-[15px] text-muted-foreground">
                {project.subtitle}
              </p>

              <p className="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-foreground/80">
                {project.longDescription[0]}
              </p>

              {/* Highlights — quiet two-column list */}
              <ul className="mt-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {project.highlights.slice(0, 6).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-[13px] leading-snug text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                {project.link && (
                  <Button asChild className="rounded-full">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Código fuente
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Spec sheet */}
            <aside className="border-t border-border/70 bg-muted/45 p-7 sm:p-10 lg:border-l lg:border-t-0">
              <h4 className="eyebrow">Ficha técnica</h4>
              <dl className="mt-5">
                {[
                  { term: 'Año', def: project.year },
                  { term: 'Estado', def: project.status },
                  { term: 'Arquitectura', def: 'Multi-tenant · Modular' },
                  { term: 'Testing', def: 'Jest + Supertest' },
                ].map((row) => (
                  <div
                    key={row.term}
                    className="flex items-baseline justify-between gap-4 border-b border-border/70 py-3"
                  >
                    <dt className="text-[13px] text-muted-foreground">
                      {row.term}
                    </dt>
                    <dd className="tnum text-[13px] font-medium">{row.def}</dd>
                  </div>
                ))}
              </dl>

              <h4 className="eyebrow mt-8">Stack</h4>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
