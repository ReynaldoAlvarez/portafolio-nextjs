'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
}

/* Small, quiet entrances: 10px offset, exponential ease-out (from MotionConfig) */
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const stack = [
  'TypeScript',
  'Node.js',
  'Angular',
  'Next.js',
  'Flutter',
  'PostgreSQL',
  'AWS',
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="section-anchor relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
    >
      <div className="container-portfolio w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
        >
          {/* Left: editorial text column */}
          <div>
            {/* Status + location */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-2xs">
                <span
                  className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                Disponible para nuevos proyectos
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {profile.location}
              </span>
            </motion.div>

            {/* Name — the editorial statement */}
            <motion.h1
              variants={itemVariants}
              className="mt-7 text-[clamp(3rem,8vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.03em]"
            >
              Vidal{' '}
              <em className="font-light italic text-muted-foreground">
                Alvarez
              </em>
              <span className="text-primary">.</span>
            </motion.h1>

            {/* Value proposition */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-[34rem] text-lg leading-relaxed text-foreground/80 sm:text-xl"
            >
              Software engineer con 12 años construyendo{' '}
              <em className="font-display italic">SaaS educativo con IA</em>,
              plataformas geoespaciales y arquitecturas que escalan — de
              Bolivia para el mundo.
            </motion.p>

            {/* CTAs — one primary, one quiet */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" className="h-11 rounded-full px-6">
                <a href="#proyectos">
                  Ver proyectos
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="h-11 rounded-full px-6 text-muted-foreground hover:text-foreground"
              >
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right: portrait with layered shadow + floating production card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.97, y: 12 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-muted shadow-lg">
              <Image
                src="/images/profile/vidal-profile.png"
                alt="Vidal Reynaldo Alvarez Challco"
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover object-[center_top]"
                priority
              />
              {/* soft bottom gradient keeps the portrait grounded */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/40 to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Floating card — one quiet, useful detail */}
            <motion.a
              href="#destacado"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-md transition-shadow hover:shadow-lg sm:-left-8"
            >
              <span
                className="status-dot h-2 w-2 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span className="text-left leading-tight">
                <span className="block text-sm font-semibold">Luminia</span>
                <span className="block text-xs text-foreground/75">
                  API SaaS educativa · en producción
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stack strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border/70 pt-5 sm:mt-24"
        >
          <span className="eyebrow mr-2">Stack principal</span>
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-[13px] text-muted-foreground"
            >
              {tech}
              <span className="ml-3 select-none text-border" aria-hidden="true">
                ·
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
