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
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-4"
          >
            Stack Tecnológico
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Competencias <span className="gradient-text">técnicas</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
          />
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Tecnologías que domino para construir productos de principio a fin,
            desde la arquitectura hasta el despliegue.
          </p>
        </motion.div>

        {/* Skills grid with stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Server
            return (
              <motion.div
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 100, damping: 15 },
                  },
                }}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow hover:border-primary/40 p-6 group">
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="font-semibold text-base">{category.title}</h3>
                  </div>

                  {/* Skills with staggered hover */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.03, delayChildren: 0.2 },
                      },
                    }}
                    className="flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              type: 'spring',
                              stiffness: 300,
                              damping: 20,
                            },
                          },
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          transition: { type: 'spring', stiffness: 400 },
                        }}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md border border-border/60 cursor-default ${
                          levelColors[skill.level]
                        }`}
                        title={`Nivel: ${skill.level}`}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </motion.div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
