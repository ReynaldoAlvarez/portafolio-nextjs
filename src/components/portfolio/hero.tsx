"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

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
  { n: "14", suf: "+", l: "años de trayectoria" },
  { n: "25", suf: "", l: "repos públicos" },
  { big: "GEOPOIS", l: "Madrid · arquitecto" },
  { big: "EMI", l: "La Paz · 2012" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo: glow volt suave + fade inferior (sin rejillas) */}
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
          Ingeniero de software · backend & arquitectura
        </motion.div>

        {/* Título masivo: sólido + outline */}
        <h1 className="mt-9 font-display text-[clamp(3rem,10vw,8.2rem)] font-bold uppercase leading-[0.92] tracking-[-0.03em]">
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

        {/* Split: texto izquierda + retrato derecha */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px] text-zinc-500"
            >
              <span>
                La Paz, BO <span className="text-volt">→</span> Madrid, ES
              </span>
              <span className="text-zinc-700" aria-hidden>
                ·
              </span>
              <span>
                EMI 2012{" "}
                <span className="text-zinc-700">·</span>{" "}
                <span className="text-zinc-400">
                  @ReynaldoAlvarez
                </span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
              className="mt-7 font-mono text-sm text-zinc-400 md:text-base"
            >
              <span className="text-zinc-500">yo </span>
              <ScrambleText
                className="text-volt"
                phrases={[
                  "diseño arquitecturas",
                  "construyo backend",
                  "integro IA",
                  "educo con tecnología",
                ]}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
              className="mt-7 max-w-xl text-base leading-relaxed text-zinc-400"
            >
              Soy <span className="text-zinc-200">Vidal Reynaldo Alvarez Challco</span>:
              ingeniero de software graduado de la EMI (2012). Diseño soluciones a
              medida con las mejores prácticas de la industria — del backend y la
              arquitectura hasta la <span className="text-volt">IA aplicada a la educación</span>.
              Actualmente arquitecto de software en{" "}
              <span className="text-zinc-200">GEOPOIS.COM</span> (Madrid).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-4"
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
                href="/cv-reynaldo-alvarez.pdf"
                download
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 font-display text-base font-semibold text-zinc-200 transition-colors duration-300 hover:border-volt/60 hover:text-volt"
              >
                <Download className="size-4" aria-hidden />
                Descargar CV
              </a>
            </motion.div>
          </div>

          {/* Retrato */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease: EASE }}
            className="relative mx-auto w-full max-w-[340px] lg:col-span-5 lg:max-w-[360px]"
          >
            {/* Marco desplazado decorativo */}
            <div
              aria-hidden
              className="absolute -inset-3 translate-x-4 translate-y-4 rounded-[2.4rem] border border-volt/25"
            />
            <figure className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2">
              <Image
                src="/images/reynaldo.jpg"
                alt="Retrato de Vidal Reynaldo Alvarez Challco"
                width={900}
                height={900}
                priority
                sizes="(max-width: 1024px) 80vw, 360px"
                className="aspect-[4/5] w-full object-cover grayscale contrast-[1.03] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0"
              />
              {/* Degradado inferior + chip */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0b]/85 to-transparent"
              />
              <figcaption className="absolute bottom-4 left-4 flex items-center gap-2.5">
                <span className="dot-ping relative size-1.5 rounded-full bg-volt" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-300">
                  Open to work · Backend / Arquitectura
                </span>
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* Stats reales */}
        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: EASE }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 md:mt-20 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.l}>
              <dt className="order-2 mt-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">
                {s.l}
              </dt>
              <dd className="order-1 font-display text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
                {"big" in s ? (
                  s.big
                ) : (
                  <>
                    {s.n}
                    {s.suf === "+" && <span className="text-volt">+</span>}
                  </>
                )}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
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
