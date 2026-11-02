'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function Skills() {
  return (
    <section
      id="skills"
      className="section-anchor scroll-mt-24 py-20 lg:py-28"
    >
      <div className="container-portfolio">
        <SectionHeading
          index="04"
          eyebrow="Stack"
          title={
            <>
              Competencias <em className="font-light italic">técnicas</em>
            </>
          }
          description="Tecnologías para construir productos de principio a fin: de la arquitectura al despliegue. En negrita, nivel experto."
          className="mb-10 lg:mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
          }}
          className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="border-t border-border py-6"
            >
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-foreground/85">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    title={`Nivel: ${skill.level}`}
                    className={cn(
                      'chip',
                      skill.level === 'Experto' &&
                        'border-foreground/25 font-semibold text-foreground'
                    )}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
