'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { profile } from '@/lib/portfolio-data'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#skills', label: 'Stack' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#inicio')
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 16)

    const sections = navLinks.map((l) => l.href.slice(1))
    const offset = window.innerHeight / 3
    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveSection(`#${id}`)
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const isDark = resolvedTheme === 'dark'

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/90 shadow-2xs backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="container-portfolio">
        <div className="flex h-16 items-center justify-between">
          {/* Wordmark */}
          <Link href="#inicio" className="group flex items-center gap-3">
            <span className="relative block h-9 w-9 overflow-hidden rounded-full shadow-2xs">
              <Image
                src="/images/profile/vidal-profile.png"
                alt=""
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-semibold tracking-tight">
                {profile.shortName}
              </span>
              <span className="text-[11px] text-muted-foreground">
                Software Engineer
              </span>
            </span>
          </Link>

          {/* Desktop nav — morphing pill (spring, no bounce) */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200',
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: 'spring', duration: 0.45, bounce: 0.2 }}
                      className="absolute inset-0 -z-10 rounded-full bg-secondary"
                    />
                  )}
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden h-9 gap-1.5 rounded-full px-4 text-[13px] font-medium md:inline-flex"
            >
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-3.5 w-3.5" />
                CV
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Cambiar tema"
              className="h-10 w-10 rounded-full sm:h-9 sm:w-9"
              suppressHydrationWarning
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted && isDark ? (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Moon className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Sun className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full lg:hidden sm:h-9 sm:w-9"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menú"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="x"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.16 }}
                  >
                    <X className="h-4.5 w-4.5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.16 }}
                  >
                    <Menu className="h-4.5 w-4.5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — height via grid-rows (no layout thrash) */}
      <div
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="min-h-0">
          <div className="border-t border-border/70 bg-background/95 backdrop-blur-md">
            <div className="container-portfolio flex flex-col gap-0.5 py-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={false}
                  animate={
                    isOpen
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 6 }
                  }
                  transition={{ delay: isOpen ? idx * 0.03 : 0, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors',
                      activeSection === link.href
                        ? 'bg-secondary text-foreground'
                        : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                    )}
                  >
                    {link.label}
                    <span className="font-mono text-[10px] text-muted-foreground tnum">
                      0{idx + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-[15px] font-medium"
              >
                <Download className="h-4 w-4" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
