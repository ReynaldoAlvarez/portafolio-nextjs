'use client'

import { motion } from 'framer-motion'
import {
  Server,
  Database,
  Layout,
  Smartphone,
  Cloud,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { skillCategories } from '@/lib/portfolio-data'

const iconMap: Record<string, LucideIcon> = {
  server: Server,
  database: Database,
  layout: Layout,
  smartphone: Smartphone,
  cloud: Cloud,
  shield: ShieldCheck,
}

const levelColors: Record<string, string> = {
  Experto: 'bg-primary text-primary-foreground',
  Avanzado: 'bg-accent text-accent-foreground',
  Intermedio: 'bg-muted text-muted-foreground',
}

export function Skills() {
  return (
    <section
      id="skills"
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
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Stack Tecnológico
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Competencias <span className="gradient-text">técnicas</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Tecnologías que domino para construir productos de principio a fin,
            desde la arquitectura hasta el despliegue.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Server
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow hover:border-primary/40 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-base">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md border border-border/60 ${
                          levelColors[skill.level]
                        }`}
                        title={`Nivel: ${skill.level}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
