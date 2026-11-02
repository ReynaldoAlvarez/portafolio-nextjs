"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ——— Texto con efecto scramble que rota frases ——— */
function ScrambleText({
  phrases,
  className,
}: {
  phrases: string[];
  className?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(phrases[0] ?? "");

  useEffect(() => {
    const target = phrases[idx % phrases.length];
    const CHARS = "—/\\|<>+*#_";
    let frame = 0;
    let hold: ReturnType<typeof setTimeout> | undefined;

    const id = setInterval(() => {
      frame += 0.34;
      const revealed = Math.floor(frame);
      if (revealed >= target.length) {
        setText(target);
        clearInterval(id);
        hold = setTimeout(() => setIdx((v) => v + 1), 2400);
        return;
      }
      const rand = CHARS[Math.floor(Math.random() * CHARS.length)];
      setText(target.slice(0, revealed) + rand);
    }, 42);

    return () => {
      clearInterval(id);
      if (hold) clearTimeout(hold);
    };
  }, [idx, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse" aria-hidden>
        _
      </span>
    </span>
  );
}

/* ——— Wrapper magnético para el CTA principal ——— */
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 160, damping: 15, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      className="inline-block"
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

const STATS = [
  { n: "5+", l: "años de experiencia" },
  { n: "40+", l: "proyectos entregados" },
  { n: "12+", l: "clientes felices" },
  { n: "24/7", l: "curiosidad activa" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo: grid técnico + glow volt + fade inferior */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_62%_at_50%_32%,black_30%,transparent_78%)]"
      />
      <div
        aria-hidden
        className="absolute -top-44 left-1/2 h-[440px] w-[min(88vw,920px)] -translate-x-1/2 rounded-full bg-volt/[0.08] blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0a0a0b] to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 md:pb-32 md:pt-48">
        {/* Badge de disponibilidad */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-zinc-400"
        >
          <span className="dot-ping relative size-1.5 rounded-full bg-volt" />
          Disponible para nuevos proyectos
        </motion.div>

        {/* Título masivo: sólido + outline */}
        <h1 className="mt-9 font-display text-[clamp(3.4rem,11vw,9.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em]">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className="block text-zinc-100"
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.05, delay: 0.15, ease: EASE }}
            >
              Reynaldo
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              className="text-outline block"
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.05, delay: 0.28, ease: EASE }}
            >
              Alvarez
            </motion.span>
          </span>
        </h1>

        {/* Meta: ubicación + scramble + año */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px] text-zinc-500"
        >
          <span>
            La Paz, Bolivia <span className="text-zinc-700">/</span> UTC−4
          </span>
          <span className="text-zinc-700" aria-hidden>
            ·
          </span>
          <span>
            yo{" "}
            <ScrambleText
              className="text-volt"
              phrases={[
                "diseño interfaces",
                "construyo productos",
                "creo experiencias",
                "optimizo todo",
              ]}
            />
          </span>
          <span className="text-zinc-700" aria-hidden>
            ·
          </span>
          <span>©2026 — v2.0</span>
        </motion.div>

        {/* Intro + CTAs (asimetría editorial) */}
        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
            className="max-w-md text-base leading-relaxed text-zinc-400 md:col-span-7"
          >
            Diseño y construyo productos digitales con foco en performance,
            accesibilidad y detalle. Del concepto al deploy: interfaces que se
            sienten vivas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
            className="flex flex-wrap items-center gap-4 md:col-span-5 md:justify-end"
          >
            <Magnetic>
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-2.5 rounded-full bg-volt px-7 py-3.5 font-display text-base font-semibold text-[#0a0a0b] transition-shadow duration-300 hover:shadow-[0_0_46px_rgba(200,245,80,0.35)]"
              >
                Ver proyectos
                <ArrowDown
                  className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden
                />
              </a>
            </Magnetic>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 font-display text-base font-semibold text-zinc-200 transition-colors duration-300 hover:border-volt/60 hover:text-volt"
            >
              Contacto
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 md:mt-24 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.l}>
              <dt className="order-2 mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">
                {s.l}
              </dt>
              <dd className="order-1 font-display text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
                {s.n.replace("+", "")}
                {s.n.includes("+") && <span className="text-volt">+</span>}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
        aria-hidden
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-zinc-600">
          scroll
        </span>
        <div className="relative h-12 w-px overflow-hidden bg-white/15">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-volt"
            animate={{ y: [-18, 52] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
