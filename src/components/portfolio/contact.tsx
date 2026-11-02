"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Download, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const EMAIL = "vidal.r.a.777@gmail.com";

const SOCIALS = [
  {
    name: "LinkedIn",
    handle: "vidal-reynaldo-alvarez-challco",
    href: "https://www.linkedin.com/in/vidal-reynaldo-alvarez-challco-46633584/",
    Icon: Linkedin,
  },
  {
    name: "GitHub",
    handle: "@ReynaldoAlvarez",
    href: "https://github.com/ReynaldoAlvarez",
    Icon: Github,
  },
  {
    name: "YouTube",
    handle: "@bunkerdev",
    href: "https://www.youtube.com/@bunkerdev",
    Icon: Youtube,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  return (
    <section id="contacto" className="relative overflow-hidden py-28 md:py-40">
      {/* Glow ambiental */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-[380px] w-[min(90vw,860px)] -translate-x-1/2 translate-y-1/2 rounded-full bg-volt/[0.06] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            index="05"
            total="05"
            label="Contacto"
            title={<>Hagámoslo real</>}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <h3 className="mt-12 font-display text-[clamp(2.6rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            ¿Tienes un <span className="text-outline">sistema</span> en mente?
            <br />
            Diseñémoslo <span className="text-volt">juntos</span>.
          </h3>
        </Reveal>

        {/* Email + CV */}
        <Reveal delay={0.1}>
          <div className="mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
            {/* Email con copiar */}
            <button
              type="button"
              data-cursor
              onClick={() => {
                navigator.clipboard
                  .writeText(EMAIL)
                  .then(() => setCopied(true))
                  .catch(() => setCopied(false));
              }}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left transition-colors duration-300 hover:border-volt/50"
            >
              <span className="flex min-w-0 items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/15 text-zinc-300 transition-colors duration-300 group-hover:border-volt/60 group-hover:text-volt">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-base font-semibold text-zinc-100">
                    {copied ? "¡Copiado al portapapeles!" : EMAIL}
                  </span>
                  <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    {copied ? "escríbeme cuando quieras" : "clic para copiar"}
                  </span>
                </span>
              </span>
              {copied ? (
                <Check className="size-5 shrink-0 text-volt" aria-hidden />
              ) : (
                <Copy className="size-5 shrink-0 text-zinc-500 transition-colors group-hover:text-volt" aria-hidden />
              )}
            </button>

            {/* CV descargable */}
            <a
              href="/resumen-vidal-alvarez-2023.pdf"
              download
              data-cursor
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-volt/50"
            >
              <span className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-volt text-[#0a0a0b] transition-shadow duration-300 group-hover:shadow-[0_0_32px_rgba(200,245,80,0.4)]">
                  <Download className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-base font-semibold text-zinc-100">
                    Descargar CV
                  </span>
                  <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    PDF · 2 páginas · datos verificables
                  </span>
                </span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 transition-colors group-hover:text-volt">
                PDF ↓
              </span>
            </a>
          </div>
        </Reveal>

        {/* Redes reales */}
        <Reveal delay={0.16}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {SOCIALS.map(({ name, handle, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 p-5 transition-colors duration-300 hover:border-volt/50"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 text-zinc-400 transition-colors duration-300 group-hover:border-volt/60 group-hover:text-volt">
                  <Icon className="size-[18px]" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-base font-semibold text-zinc-100">
                    {name}
                  </span>
                  <span className="block truncate font-mono text-xs text-zinc-500">
                    {handle}
                  </span>
                </span>
                <motion.span
                  aria-hidden
                  className="ml-auto text-volt opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  ↗
                </motion.span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 flex items-center gap-3 font-mono text-xs text-zinc-500">
            <span className="dot-ping relative size-1.5 rounded-full bg-volt" />
            Disponible para oportunidades internacionales — backend ·
            arquitectura · IA
          </p>
        </Reveal>
      </div>
    </section>
  );
}
