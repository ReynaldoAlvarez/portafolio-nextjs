'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowDown, Download, Mail, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { profile } from '@/lib/portfolio-data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95])

  return (
    <section
      ref={ref}
      id="inicio"
      className="section-anchor relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      {/* Background effects - layered and animated */}
      <motion.div
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 dot-pattern opacity-30 -z-10"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"
      />

      <motion.div
        style={{ y, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-3 w-3 text-primary" />
              </motion.span>
              <Badge variant="secondary" className="gap-1.5 py-1.5 px-3">
                Disponible para nuevos proyectos
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            >
              Hola, soy{' '}
              <span className="gradient-text inline-block">
                Vidal Alvarez
              </span>
              <motion.span
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="inline-block ml-2"
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6"
            >
              Software Engineer{' '}
              <span className="text-primary/70">·</span>{' '}
              <span className="text-primary">12+ años de experiencia</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Ingeniero de Sistemas (EMI 2012) especializado en arquitecturas escalables,
              microservicios y SaaS educativo con IA. Construyo plataformas web, móviles
              y sistemas distribuidos con impacto real en sector público y educativo.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button asChild size="lg" className="gap-2 shadow-lg">
                  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" />
                    Descargar CV
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="#contacto">
                    <Mail className="h-4 w-4" />
                    Contactar
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="h-4 w-4" />
              {profile.location}
            </motion.div>
          </div>

          {/* Right: Profile image with animated rings */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative w-80 h-80"
            >
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
              {/* Inner counter-rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-6 rounded-full border border-primary/20"
              />
              {/* Glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-10 rounded-full bg-primary/30 blur-2xl"
              />
              {/* Center circle with profile image */}
              <div className="absolute inset-12 rounded-full overflow-hidden ring-4 ring-background shadow-2xl">
                <Image
                  src="/images/profile/vidal-profile.png"
                  alt="Vidal Reynaldo Alvarez Challco"
                  fill
                  sizes="320px"
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20 mix-blend-overlay" />
              </div>

              {/* Orbiting tech badges */}
              {[
                { label: 'TypeScript', angle: 0, delay: 0 },
                { label: 'Angular', angle: 60, delay: 0.5 },
                { label: 'Next.js', angle: 120, delay: 1 },
                { label: 'Node.js', angle: 180, delay: 1.5 },
                { label: 'Flutter', angle: 240, delay: 2 },
                { label: 'AWS', angle: 300, delay: 2.5 },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: item.delay,
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `rotate(${item.angle}deg) translateY(-180px) rotate(-${item.angle}deg)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: item.delay,
                      }}
                      className="-translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="px-3 py-1.5 rounded-lg bg-card shadow-xl border border-primary/40 text-xs font-semibold whitespace-nowrap">
                        {item.label}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
