"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const EMAIL = "hola@reynaldoalvarez.com";

const SOCIALS = [
  { name: "GitHub", href: "https://github.com", Icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { name: "X (Twitter)", href: "https://x.com", Icon: Twitter },
  { name: "Instagram", href: "https://instagram.com", Icon: Instagram },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* portapapeles no disponible */
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden py-28 md:py-40">
      {/* Glow ambiental */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-[380px] w-[min(90vw,860px)] -translate-x-1/2 translate-y-1/2 rounded-full bg-volt/[0.06] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading index="04" label="Contacto" title={<>Hagámoslo real</>} />
        </Reveal>

        <Reveal delay={0.08}>
          <h3 className="mt-12 font-display text-[clamp(2.6rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            ¿Tienes una{" "}
            <span className="text-outline">idea</span> en mente?
            <br />
            Hagámosla <span className="text-volt">realidad</span>.
          </h3>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-center">
            {/* Email: clic para copiar */}
            <button
              type="button"
              data-cursor
              onClick={copyEmail}
              aria-label={`Copiar email ${EMAIL}`}
              className="group inline-flex items-center gap-4 rounded-full border border-white/15 bg-white/[0.03] py-4 pl-7 pr-5 transition-colors duration-300 hover:border-volt/60"
            >
              <Mail className="size-5 shrink-0 text-volt" aria-hidden />
              <span className="font-mono text-sm text-zinc-200 md:text-base">
                {EMAIL}
              </span>
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-volt/60">
                {copied ? (
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-volt"
                  >
                    <Check className="size-4" aria-hidden />
                  </motion.span>
                ) : (
                  <Copy className="size-4 text-zinc-400" aria-hidden />
                )}
                <span className="sr-only">
                  {copied ? "Copiado" : "Copiar"}
                </span>
              </span>
            </button>

            {/* Redes */}
            <div className="flex flex-wrap items-center gap-3">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid size-11 place-items-center rounded-full border border-white/15 text-zinc-400 transition-all duration-300 hover:border-volt/50 hover:text-volt"
                >
                  <Icon className="size-[18px]" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 flex items-center gap-3 font-mono text-xs text-zinc-500">
            <span className="dot-ping relative size-1.5 rounded-full bg-volt" />
            Disponible para freelance — Q1 2027 · Respondo en menos de 24 h
          </p>
        </Reveal>
      </div>
    </section>
  );
}
