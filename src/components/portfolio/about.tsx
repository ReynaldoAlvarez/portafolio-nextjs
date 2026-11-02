'use client'

import { motion } from 'framer-motion'
import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

const tags = [
  'Clean Architecture',
  'SaaS Multi-tenant',
  'Inteligencia Artificial',
  'DevOps',
  'Angular',
  'Flutter',
  'Prisma ORM',
  'PostGIS',
  'Microservicios',
]

export function About() {
  return (
    <section
      id="sobre-mi"
      className="section-anchor scroll-mt-24 py-20 lg:py-28"
    >
      <div className="container-portfolio">
        <SectionHeading
          index="01"
          eyebrow="Sobre mí"
          title={
            <>
              Software con{' '}
              <em className="font-light italic">impacto</em> real
            </>
          }
          className="mb-12 lg:mb-16"
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          {/* Bio — first paragraph larger, editorial measure */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="max-w-[62ch]"
          >
            {profile.bio.map((paragraph, idx) => (
              <motion.p
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className={
                  idx === 0
                    ? 'text-lg leading-relaxed text-foreground/90'
                    : 'mt-5 text-[15px] leading-relaxed text-muted-foreground'
                }
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Focus tags — quiet chips */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats — tabular display numbers on hairline rules */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Cifras profesionales"
          >
            <div className="border-t border-border">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between gap-4 border-b border-border py-5"
                >
                  <span className="tnum text-4xl font-medium tracking-tight lg:text-[2.6rem]">
                    {stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </span>
                  <span className="max-w-[9rem] text-right text-[13px] leading-snug text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Ingeniero de Sistemas — EMI, La Paz (2012). Trayectoria en
              Bolivia, España y Estados Unidos.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
