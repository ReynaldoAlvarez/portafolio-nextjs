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

export function About() {
  return (
    <section id="sobre-mi" className="section-anchor py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Sobre mí
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Pasión por construir software con{' '}
            <span className="gradient-text">impacto</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            {profile.bio.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base lg:text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-4">
              {[
                'Clean Architecture',
                'SaaS Multi-tenant',
                'Inteligencia Artificial',
                'DevOps',
                'TypeScript',
                'Flutter',
                'Prisma ORM',
                'PostGIS',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {profile.stats.map((stat, idx) => {
              const Icon = statIcons[idx]
              return (
                <Card
                  key={stat.label}
                  className="p-6 hover:shadow-md transition-shadow hover:border-primary/40"
                >
                  <div className="flex flex-col gap-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <div className="text-3xl font-bold tracking-tight">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
