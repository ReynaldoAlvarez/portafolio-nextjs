"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/* ——— Contador que anima de 0 al valor al entrar en pantalla ——— */
function CountUp({
  to,
  className,
  duration = 1.8,
}: {
  to: number;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {n}
    </span>
  );
}

const CELLS: {
  value: React.ReactNode;
  label: string;
}[] = [
  {
    value: (
      <>
        <CountUp to={5} /> <span className="text-volt">+</span>
      </>
    ),
    label: "años de código",
  },
  {
    value: (
      <>
        <CountUp to={40} /> <span className="text-volt">+</span>
      </>
    ),
    label: "proyectos lanzados",
  },
  {
    value: (
      <>
        <CountUp to={12} /> <span className="text-volt">+</span>
      </>
    ),
    label: "clientes felices",
  },
  {
    value: <span className="text-volt">24/7</span>,
    label: "curiosidad activa",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            index="01"
            label="Sobre mí"
            title={
              <>
                Ideas complejas,{" "}
                <span className="text-volt">interfaces simples</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="max-w-xl font-display text-2xl font-medium leading-snug tracking-tight text-zinc-300 md:text-[2rem] md:leading-[1.25]">
                Soy Reynaldo, desarrollador front-end y diseñador digital.
                Construyo productos web que equilibran{" "}
                <span className="text-volt">estética</span> y{" "}
                <span className="text-volt">rendimiento</span> — del primer
                wireframe al último deploy.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400">
                Desde La Paz trabajo con startups y estudios de Latinoamérica y
                EE. UU.: desde landing pages premiadas hasta dashboards que usan
                miles de personas cada día. Mi enfoque es simple — diseño
                sistemático, código limpio y obsesión por el detalle.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                Las micro-interacciones, la tipografía y la velocidad no son
                extras: son el estándar mínimo de todo lo que entrego.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
                  Actualmente
                </span>
                <span className="font-mono text-xs text-zinc-300">
                  Next.js 16 · Tailwind 4 · Framer Motion
                </span>
                <span className="dot-ping relative ml-1 size-1.5 rounded-full bg-volt" />
              </div>
            </Reveal>
          </div>

          {/* Grid de stats (celdas separadas por 1px) */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {CELLS.map((c) => (
                <div
                  key={c.label}
                  className="group bg-[#0c0c0e] p-7 transition-colors duration-500 hover:bg-ink-2 md:p-9"
                >
                  <dd className="font-display text-4xl font-semibold tracking-tight text-zinc-100 md:text-5xl">
                    {c.value}
                  </dd>
                  <dt className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600 transition-colors group-hover:text-zinc-400">
                    {c.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
