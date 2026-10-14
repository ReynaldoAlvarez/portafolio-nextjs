'use client'

import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Calendar,
  CircleDot,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { projects } from '@/lib/portfolio-data'

export function FeaturedProject() {
  const project = projects.find((p) => p.featured)
  if (!project) return null

  return (
    <section
      id="destacado"
      className="section-anchor py-20 lg:py-28 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="gap-1.5 mb-4">
            <Sparkles className="h-3 w-3" />
            Proyecto Destacado
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            SaaS Educativo con{' '}
            <span className="gradient-text">Inteligencia Artificial</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Una plataforma backend diseñada específicamente para el sector
            educativo, con arquitectura modular, seguridad de producción y
            capacidad de integrar IA pedagógica.
          </p>
        </motion.div>

        {/* Featured project card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
            {/* Header banner */}
            <div className="relative bg-gradient-to-br from-primary via-primary to-accent p-8 lg:p-12 text-primary-foreground">
              <div className="absolute inset-0 dot-pattern opacity-20" />
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30"
                    >
                      {project.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-white/10 text-white border-white/30 gap-1"
                    >
                      <CircleDot className="h-3 w-3" />
                      {project.status}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-white/10 text-white border-white/30 gap-1"
                    >
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </Badge>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm lg:text-base opacity-90 mb-6">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.link && (
                      <Button
                        asChild
                        size="sm"
                        variant="secondary"
                        className="bg-white text-primary hover:bg-white/90 gap-2"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Ver Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white gap-2"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          Código
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Tech stack visual */}
                <div className="relative">
                  <div className="grid grid-cols-3 gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20"
                      >
                        <span className="text-xs font-semibold">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Body content */}
            <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-8">
              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  Descripción
                </h4>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {project.longDescription.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  Características destacadas
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
