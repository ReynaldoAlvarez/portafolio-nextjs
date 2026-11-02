'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section
      id="experiencia"
      className="section-anchor scroll-mt-24 py-20 lg:py-28"
    >
      <div className="container-portfolio">
        <SectionHeading
          index="05"
          eyebrow="Trayectoria"
          title={
            <>
              Experiencia{' '}
              <em className="font-light italic">profesional</em>
            </>
          }
          description="Más de 12 años construyendo software para empresas de Bolivia, España y Estados Unidos."
          className="mb-12 lg:mb-16"
        />

        <div className="relative max-w-3xl">
          {/* Timeline rail */}
          <span
            className="absolute bottom-2 left-[5px] top-2 w-px bg-foreground/25"
            aria-hidden="true"
          />

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
          >
            {experiences.map((exp, idx) => (
              <motion.li
                key={exp.company}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
              >
                {/* Node */}
                <span
                  className="absolute left-0 top-[7px] flex h-[11px] w-[11px] items-center justify-center rounded-full border border-border bg-background shadow-2xs"
                  aria-hidden="true"
                >
                  {idx === 0 && (
                    <span className="status-dot h-[5px] w-[5px] rounded-full bg-primary" />
                  )}
                </span>

                <div className="grid gap-1.5 sm:grid-cols-[150px_1fr] sm:gap-8">
                  <div className="tnum text-xs font-medium text-muted-foreground sm:pt-1.5">
                    {exp.period}
                  </div>

                  <div>
                    <h3 className="text-xl font-medium tracking-tight">
                      {exp.position}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline font-medium text-primary"
                      >
                        {exp.company}
                      </a>
                      <span className="text-muted-foreground/60">·</span>
                      <span className="text-xs text-muted-foreground">
                        {exp.location}
                      </span>
                    </div>

                    <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex max-w-[62ch] gap-2.5 text-[13px] leading-relaxed text-muted-foreground"
                        >
                          <span
                            className="mt-[7px] h-px w-3 shrink-0 bg-primary/70"
                            aria-hidden="true"
                          />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}
