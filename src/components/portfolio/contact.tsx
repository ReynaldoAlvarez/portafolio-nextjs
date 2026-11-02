'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Youtube } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

const socials = [
  { label: 'GitHub', handle: '@ReynaldoAlvarez', href: profile.social.github, icon: Github },
  { label: 'LinkedIn', handle: 'Vidal Alvarez Challco', href: profile.social.linkedin, icon: Linkedin },
  { label: 'YouTube', handle: '@bunkerdev', href: profile.social.youtube, icon: Youtube },
]

export function Contact() {
  return (
    <section
      id="contacto"
      className="section-anchor scroll-mt-24 border-t border-border/70 py-20 lg:py-28"
    >
      <div className="container-portfolio">
        <SectionHeading
          index="06"
          eyebrow="Contacto"
          title={
            <>
              Construyamos algo{' '}
              <em className="font-light italic">juntos</em>
              <span className="text-primary">.</span>
            </>
          }
          className="mb-12 lg:mb-16"
        />

        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              Abierto a oportunidades profesionales y proyectos, en especial
              tecnología para el sector educativo público. Cuéntame qué
              quieres construir.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-8 inline-flex flex-wrap items-center gap-2 font-display text-[clamp(1.4rem,3.5vw,2.4rem)] font-medium tracking-tight"
            >
              {profile.email}
              <ArrowUpRight className="h-6 w-6 text-primary" />
            </a>

            <p className="mt-5 text-xs text-muted-foreground">
              Respondo en menos de 24 horas · Remoto o presencial · Español /
              Inglés
            </p>
          </motion.div>

          {/* Social links — quiet stack */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2.5"
          >
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 rounded-xl border border-border bg-card px-5 py-3.5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <Icon className="h-4.5 w-4.5 text-muted-foreground transition-colors group-hover:text-foreground" />
                    <span className="leading-tight">
                      <span className="block text-sm font-semibold">
                        {social.label}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {social.handle}
                      </span>
                    </span>
                    <ArrowUpRight className="ml-2 h-4 w-4 text-muted-foreground/50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                </li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
