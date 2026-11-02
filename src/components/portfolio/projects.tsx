"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Project = {
  img: string;
  alt: string;
  title: string;
  year: string;
  cat: string;
  desc: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  span: string;
  sizes: string;
};

const PROJECTS: Project[] = [
  {
    img: "/images/proj-nova.jpg",
    alt: "Interfaz del dashboard Nova Analytics en modo oscuro con gráficos y acentos lima",
    title: "Nova Analytics",
    year: "2026",
    cat: "SaaS",
    desc: "Dashboard de métricas en tiempo real: visualización de datos a 60 fps, roles, alertas y un design system de 40+ componentes.",
    tags: ["Next.js", "TypeScript", "D3.js"],
    metric: "+38%",
    metricLabel: "retención de usuarios",
    span: "lg:col-span-7",
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
  {
    img: "/images/proj-atlas.jpg",
    alt: "Tienda de moda Atlas Commerce con tipografía editorial y fotografía monocromática",
    title: "Atlas Commerce",
    year: "2025",
    cat: "E-commerce",
    desc: "Tienda headless para una marca de moda: checkout de un paso, búsqueda instantánea y CMS editorial para drops.",
    tags: ["Next.js", "Shopify", "Tailwind"],
    metric: "0.8s",
    metricLabel: "LCP promedio",
    span: "lg:col-span-5",
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
  {
    img: "/images/proj-pulse.jpg",
    alt: "App móvil Pulse con anillos de actividad y estadísticas de salud en modo oscuro",
    title: "Pulse",
    year: "2025",
    cat: "Mobile",
    desc: "App de hábitos y bienestar: anillos de actividad, rachas y estadísticas. 40 mil descargas en su primer mes.",
    tags: ["React Native", "Figma", "Motion"],
    metric: "40k",
    metricLabel: "descargas / mes 1",
    span: "lg:col-span-5",
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
  {
    img: "/images/proj-lumen.jpg",
    alt: "Escultura líquida 3D con reflejos iridiscentes para el sitio inmersivo de Lumen Studio",
    title: "Lumen Studio",
    year: "2026",
    cat: "WebGL",
    desc: "Sitio inmersivo con WebGL: esculturas líquidas que reaccionan al scroll. Mención de honor en Awwwards.",
    tags: ["Three.js", "WebGL", "GSAP"],
    metric: "98",
    metricLabel: "Lighthouse",
    span: "lg:col-span-7",
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
];

/* Spotlight: actualiza --mx/--my en la card (heredan al layer .spotlight) */
function onSpotlight(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <Reveal delay={(i % 2) * 0.08} className={p.span}>
      <article
        data-cursor
        onMouseMove={onSpotlight}
        className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-2 transition-colors duration-500 hover:border-volt/30"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            fill
            src={p.img}
            alt={p.alt}
            sizes={p.sizes}
            className="object-cover saturate-[0.85] transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:saturate-100"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/80 via-transparent to-transparent"
          />
          <div
            aria-hidden
            className="spotlight absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          {/* Categoría + año */}
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur">
            {p.cat} · {p.year}
          </span>
          {/* Métrica de impacto */}
          <span className="absolute bottom-4 right-4 flex items-baseline gap-2 rounded-full border border-white/10 bg-black/45 px-3.5 py-1.5 backdrop-blur">
            <span className="font-display text-lg font-semibold text-volt">
              {p.metric}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
              {p.metricLabel}
            </span>
          </span>
        </div>

        <div className="p-6 md:p-7">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-volt">
              {p.title}
            </h3>
            <span className="font-mono text-xs text-zinc-600">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
            {p.desc}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            index="02"
            label="Proyectos"
            title={
              <>
                Trabajo <span className="text-outline-volt">seleccionado</span>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Una muestra de lo que construyo: productos con métricas reales, no
            solo capturas bonitas.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 font-mono text-sm text-zinc-500">
            ¿Quieres algo así para tu marca?{" "}
            <a
              href="#contacto"
              className="text-volt underline-offset-4 transition-colors hover:underline"
            >
              Hablemos →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
