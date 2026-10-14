'use client'

import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Calendar,
  CircleDot,
  ArrowUpRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { projects } from '@/lib/portfolio-data'

const categoryColors: Record<string, string> = {
  'Backend SaaS': 'bg-primary/10 text-primary border-primary/30',
  Fullstack: 'bg-chart-3/10 text-chart-3 border-chart-3/30',
  Mobile: 'bg-chart-5/10 text-chart-5 border-chart-5/30',
  'Web Platform': 'bg-chart-4/10 text-chart-4 border-chart-4/30',
  Geospatial: 'bg-chart-2/10 text-chart-2 border-chart-2/30',
}

export function Projects() {
  // Exclude the featured one (already shown above)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="proyectos" className="section-anchor py-20 lg:py-28">
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
            Portafolio
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Proyectos <span className="gradient-text">en producción</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Plataformas reales desplegadas y mantenidas. Cada proyecto refleja
            distintas arquitecturas, tecnologías y desafíos resueltos.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 hover:border-primary/40 overflow-hidden">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <Badge
                      variant="outline"
                      className={categoryColors[project.category]}
                    >
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <span
                        className={`inline-flex items-center gap-1 text-xs ${
                          project.status === 'Producción'
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : project.status === 'Activo'
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-amber-600 dark:text-amber-400'
                        }`}
                      >
                        <CircleDot className="h-3 w-3" />
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="flex items-start justify-between gap-2 text-lg">
                      <span className="leading-tight">{project.title}</span>
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription className="mt-1 text-xs">
                      {project.subtitle}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-secondary text-muted-foreground">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between gap-2 border-t pt-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-1">
                    {project.github && (
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver código en GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver proyecto"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA to GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a
              href="https://github.com/ReynaldoAlvarez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              Ver todos los repositorios en GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
