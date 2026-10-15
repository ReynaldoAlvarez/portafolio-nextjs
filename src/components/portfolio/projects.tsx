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
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 font-mono"
          >
            {'// portafolio'}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Proyectos <span className="gradient-text">en producción</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
          />
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Plataformas reales desplegadas y mantenidas. Cada proyecto refleja
            distintas arquitecturas, tecnologías y desafíos resueltos.
          </p>
        </motion.div>

        {/* Projects grid with staggered reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 100, damping: 15 },
                },
              }}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-shadow hover:border-primary/40 overflow-hidden relative">
                {/* Gradient hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none -z-10"
                />
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Badge
                        variant="outline"
                        className={categoryColors[project.category]}
                      >
                        {project.category}
                      </Badge>
                    </motion.div>
                    <div className="flex items-center gap-1">
                      <motion.span
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
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
                      </motion.span>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="flex items-start justify-between gap-2 text-lg">
                      <span className="leading-tight">{project.title}</span>
                      <motion.div
                        initial={{ x: 0, y: 0 }}
                        whileHover={{ x: 3, y: -3 }}
                        className="flex-shrink-0"
                      >
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
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

                  {/* Tech stack with staggered hover */}
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
                      <motion.div
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
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
                      </motion.div>
                    )}
                    {project.link && (
                      <motion.div
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
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
                      </motion.div>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to GitHub with animated arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="inline-block"
          >
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://github.com/ReynaldoAlvarez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Ver todos los repositorios en GitHub
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
