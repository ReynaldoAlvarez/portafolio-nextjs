'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { experiences } from '@/lib/portfolio-data'

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="experiencia" className="section-anchor py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Trayectoria
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Experiencia <span className="gradient-text">profesional</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Más de 6 años construyendo software para empresas en Bolivia,
            España y Estados Unidos.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary to-accent origin-top"
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className={`relative grid sm:grid-cols-2 gap-8 sm:gap-12 ${
                  idx % 2 === 0 ? '' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-2 z-10">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`pl-12 sm:pl-0 ${
                    idx % 2 === 0
                      ? 'sm:pr-12 sm:text-right'
                      : 'sm:col-start-2 sm:pl-12'
                  }`}
                >
                  <Card className="p-6 hover:shadow-md transition-shadow hover:border-primary/40">
                    <div
                      className={`flex flex-col gap-2 ${
                        idx % 2 === 0 ? 'sm:items-end' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2 flex-wrap sm:justify-start">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs font-medium text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{exp.position}</h3>
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        @{exp.company}
                      </a>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div
                      className={`mt-4 space-y-1.5 ${
                        idx % 2 === 0 ? 'sm:text-right' : ''
                      }`}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-2 text-xs ${
                            idx % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''
                          }`}
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Empty div for alternating layout */}
                <div className="hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
