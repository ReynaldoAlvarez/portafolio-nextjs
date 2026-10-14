'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin,
  Youtube,
  Globe,
  MapPin,
  Send,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { profile } from '@/lib/portfolio-data'

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: 'text-primary',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: profile.location,
    href: undefined,
    color: 'text-chart-2',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'geopois.com',
    href: profile.social.website,
    color: 'text-chart-3',
  },
]

const socialButtons = [
  {
    icon: Github,
    label: 'GitHub',
    href: profile.social.github,
    handle: '@ReynaldoAlvarez',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: profile.social.linkedin,
    handle: 'Vidal Reynaldo Alvarez Challco',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    href: profile.social.youtube,
    handle: '@bunkerdev',
  },
]

export function Contact() {
  return (
    <section
      id="contacto"
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
            Contacto
          </motion.span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Construyamos algo{' '}
            <span className="gradient-text">juntos</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"
          />
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            Estoy abierto a oportunidades profesionales, especialmente en
            proyectos tecnológicos para el sector educativo público. Hablemos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact info cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="space-y-4"
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-xl font-semibold mb-4"
            >
              Información de contacto
            </motion.h3>

            {contactCards.map((card) => {
              const Icon = card.icon
              const content = (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { type: 'spring', stiffness: 100, damping: 15 },
                    },
                  }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Card className="p-4 flex items-center gap-4 hover:shadow-md transition-shadow hover:border-primary/40 cursor-pointer">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`flex h-11 w-11 items-center justify-center rounded-lg bg-secondary ${card.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground font-medium">
                        {card.label}
                      </p>
                      <p className="text-sm font-semibold truncate">{card.value}</p>
                    </div>
                  </Card>
                </motion.div>
              )

              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              )
            })}

            {/* Social buttons */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                Redes profesionales
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {socialButtons.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-border/60 hover:border-primary/40 hover:bg-accent/30 transition-all group"
                    >
                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div className="flex-1 min-w-0">
                        <span className="block text-sm font-medium">
                          {social.label}
                        </span>
                        <span className="block text-xs text-muted-foreground truncate">
                          {social.handle}
                        </span>
                      </div>
                      <Send className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* CTA Card with animated background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="h-full p-8 lg:p-10 bg-gradient-to-br from-primary to-accent text-primary-foreground border-0 relative overflow-hidden">
              <motion.div
                animate={{
                  backgroundPosition: ['0px 0px', '50px 50px'],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 dot-pattern opacity-20"
              />
              {/* Floating glow */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl"
              />
              <div className="relative">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold mb-4"
                >
                  ¿Listo para tu próximo proyecto?
                </motion.h3>
                <p className="text-sm opacity-90 mb-6 leading-relaxed">
                  Si buscas un ingeniero de software con experiencia construyendo
                  plataformas escalables, SaaS educativo y soluciones de alto
                  impacto, estaré encantado de conversar.
                </p>

                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08, delayChildren: 0.4 },
                    },
                  }}
                  className="space-y-2 mb-8 text-sm"
                >
                  {[
                    'Disponible para modalidad remota o presencial',
                    'Experiencia con sector público educativo',
                    'Compromiso con calidad y buenas prácticas',
                    'Responsive en menos de 24 horas',
                  ].map((item) => (
                    <motion.li
                      key={item}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="flex items-start gap-2"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                        className="inline-block h-1.5 w-1.5 rounded-full bg-white mt-1.5 flex-shrink-0"
                      />
                      <span className="opacity-90">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="w-full bg-white text-primary hover:bg-white/90 gap-2 shadow-lg"
                  >
                    <a href={`mailto:${profile.email}`}>
                      <Mail className="h-4 w-4" />
                      Enviar un correo
                    </a>
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
