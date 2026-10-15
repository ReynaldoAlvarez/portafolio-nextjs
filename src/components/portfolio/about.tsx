'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { GraduationCap, Code2, Users, GitBranch } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { Card } from '@/components/ui/card'

const statIcons = [Code2, Users, GraduationCap, GitBranch]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix
      }
    })
    return () => unsubscribe()
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const tags = [
  'Clean Architecture',
  'SaaS Multi-tenant',
  'Inteligencia Artificial',
  'DevOps',
  'TypeScript',
  'Angular',
  'Flutter',
  'Prisma ORM',
  'PostGIS',
  'Microservicios',
]

export function About() {
  return (
    <section id="sobre-mi" className="section-anchor py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header with gradient line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="inline-block text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 font-mono"
          >
            {'// sobre_mi'}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Pasión por construir software con{' '}
            <span className="gradient-text">impacto</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Bio text with staggered paragraphs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="lg:col-span-3 space-y-4"
          >
            {profile.bio.map((paragraph, idx) => (
              <motion.p
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -30, filter: 'blur(4px)' },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
                  },
                }}
                className="text-base lg:text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Animated tags */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.4 },
                },
              }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  variants={{
                    hidden: { opacity: 0, scale: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { type: 'spring', stiffness: 300, damping: 20 },
                    },
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgb(var(--primary) / 0.15)',
                    color: 'rgb(var(--primary))',
                  }}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/60 cursor-default transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats cards with hover effects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {profile.stats.map((stat, idx) => {
              const Icon = statIcons[idx]
              return (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { type: 'spring', stiffness: 200, damping: 20 },
                    },
                  }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 17 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow hover:border-primary/40 cursor-default group">
                    <div className="flex flex-col gap-2">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div className="text-3xl font-bold tracking-tight">
                        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
