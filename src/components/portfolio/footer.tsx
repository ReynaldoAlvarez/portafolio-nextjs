'use client'

import Link from 'next/link'
import { ArrowUp, Github, Linkedin, Youtube } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

const socialLinks = [
  { href: profile.social.github, icon: Github, label: 'GitHub' },
  { href: profile.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: profile.social.youtube, icon: Youtube, label: 'YouTube' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border/70">
      <div className="container-portfolio flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
        <p className="text-[13px] text-muted-foreground">
          © {year} {profile.shortName}
        </p>

        <div className="flex items-center gap-1">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-4 text-[13px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full bg-primary/80"
              aria-hidden="true"
            />
            {profile.location}
          </span>
          <Link
            href="#inicio"
            className="link-underline inline-flex items-center gap-1"
            aria-label="Volver arriba"
          >
            Arriba
            <ArrowUp className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
