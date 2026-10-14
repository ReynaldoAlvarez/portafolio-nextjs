'use client'

import Link from 'next/link'
import { Github, Linkedin, Youtube, Heart } from 'lucide-react'

const footerNav = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#destacado', label: 'Proyecto Destacado' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#skills', label: 'Skills' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
]

const socialLinks = [
  { href: 'https://github.com/ReynaldoAlvarez', icon: Github, label: 'GitHub' },
  {
    href: 'https://linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  { href: 'https://youtube.com/@bunkerdev', icon: Youtube, label: 'YouTube' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border/60 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                VA
              </div>
              <span className="font-semibold">Vidal Alvarez</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Software Engineer especializado en arquitecturas escalables, SaaS
              educativo con IA y desarrollo fullstack. Construyendo software con
              impacto desde Bolivia para el mundo.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Navegación</h4>
            <ul className="space-y-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Conecta</h4>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-accent/30 transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              La Paz, Bolivia
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            &copy; {year} Vidal Reynaldo Alvarez Challco. Todos los derechos
            reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Construido con
            <Heart className="h-3 w-3 text-primary fill-primary" />
            usando Next.js 16, TypeScript y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
