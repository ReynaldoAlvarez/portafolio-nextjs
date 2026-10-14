'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="inicio"
      className="section-anchor relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 dot-pattern opacity-30 -z-10" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Badge variant="secondary" className="gap-1.5 py-1.5 px-3">
                <Sparkles className="h-3 w-3" />
                Disponible para nuevos proyectos
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            >
              Hola, soy{' '}
              <span className="gradient-text">Vidal Alvarez</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6"
            >
              Software Engineer <span className="text-primary/70">·</span>{' '}
              <span className="text-primary">12+ años de experiencia</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Ingeniero de Sistemas (EMI 2012) especializado en arquitecturas escalables,
              microservicios y SaaS educativo con IA. Construyo plataformas web, móviles
              y sistemas distribuidos con impacto real en sector público y educativo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8"
            >
              <Button asChild size="lg" className="gap-2">
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#contacto">
                  <Mail className="h-4 w-4" />
                  Contactar
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="h-4 w-4" />
              {profile.location}
            </motion.div>
          </motion.div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
              {/* Inner counter-rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-primary/20"
              />
              {/* Center circle with avatar */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                <div className="text-center text-primary-foreground px-4">
                  <div className="text-5xl font-bold mb-1">VA</div>
                  <div className="text-xs opacity-90 uppercase tracking-wider">
                    Software Engineer
                  </div>
                </div>
              </div>

              {/* Orbiting tech badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="px-3 py-1.5 rounded-lg bg-card shadow-xl border border-primary/40 text-xs font-semibold">
                    TypeScript
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                  <div className="px-3 py-1.5 rounded-lg bg-card shadow-xl border border-primary/40 text-xs font-semibold">
                    Next.js
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="px-3 py-1.5 rounded-lg bg-card shadow-xl border border-primary/40 text-xs font-semibold">
                    Node.js
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="px-3 py-1.5 rounded-lg bg-card shadow-xl border border-primary/40 text-xs font-semibold">
                    Flutter
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
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
      </div>
    </section>
  )
}
