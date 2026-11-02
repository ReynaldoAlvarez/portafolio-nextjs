"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const LINKS = [
  { href: "#sobre-mi", label: "Sobre mí", num: "01" },
  { href: "#trayectoria", label: "Trayectoria", num: "02" },
  { href: "#proyectos", label: "Proyectos", num: "03" },
  { href: "#servicios", label: "Servicios", num: "04" },
  { href: "#contacto", label: "Contacto", num: "05" },
];

const CV_URL = "/resumen-vidal-alvarez-2023.pdf";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[75] transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#0a0a0b]/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-[76px]">
        {/* Logo */}
        <a
          href="#"
          aria-label="Inicio — Reynaldo Alvarez"
          className="font-display text-lg font-bold tracking-tight text-zinc-100 transition-colors hover:text-volt"
        >
          reynaldo<span className="text-volt">©</span>
        </a>

        {/* Nav desktop */}
        <nav
          aria-label="Principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-100"
            >
              <span className="mr-1 text-volt/80">{l.num}.</span>
              {l.label}
            </a>
          ))}

          {/* CV */}
          <a
            href={CV_URL}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-300 transition-all hover:border-volt/60 hover:text-volt"
          >
            <Download className="size-3.5" aria-hidden />
            CV
          </a>

          {/* CTA */}
          <a
            href="https://www.linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-volt px-5 py-2 font-display text-sm font-semibold text-[#0a0a0b] transition-all hover:bg-[#d9ff6e] hover:shadow-[0_0_28px_rgba(200,245,80,0.35)]"
          >
            Hablemos
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </nav>

        {/* Menú móvil */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Abrir menú"
              className="grid size-11 place-items-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:border-volt/60 hover:text-volt lg:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full border-r-0 bg-[#0a0a0b]/95 p-0 backdrop-blur-xl sm:max-w-full sm:w-[88%]"
          >
            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            <nav
              aria-label="Menú móvil"
              className="flex h-full flex-col justify-center gap-1 px-8 pb-16"
            >
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  className="flex items-baseline justify-between border-b border-white/10 py-5 font-display text-4xl font-semibold tracking-tight text-zinc-200 transition-colors hover:text-volt"
                >
                  {l.label}
                  <span className="font-mono text-xs text-zinc-600">{l.num}</span>
                </motion.a>
              ))}
              <motion.a
                href={CV_URL}
                download
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-volt/50 px-6 py-3 font-display text-base font-semibold text-volt"
              >
                <Download className="size-4" aria-hidden />
                Descargar CV
              </motion.a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 font-mono text-xs leading-relaxed text-zinc-500"
              >
                <p>Luminia · La Paz, BO — hoy</p>
                <p className="mt-2">GEOPOIS.COM · Madrid, ES — EMI 2012</p>
              </motion.div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
