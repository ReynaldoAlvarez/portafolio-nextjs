"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type ProjectLink = { label: string; href: string };

type Project = {
  img: string;
  alt: string;
  title: string;
  cat: string;
  desc: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  links: ProjectLink[];
  span: string;
  sizes: string;
};

const PROJECTS: Project[] = [
  {
    img: "/images/proj-luminia.jpg",
    alt: "Arquitectura backend de Luminia: nodos de IA conectando paneles de código y terminales",
    title: "Luminia",
    cat: "SaaS · Educación",
    desc: "API SaaS para educación con inteligencia artificial integrada. TypeScript, Prisma y Docker, desplegada en Vercel — mi proyecto insignia del dominio educativo.",
    tags: ["TypeScript", "Prisma", "Docker", "Vercel"],
    metric: "IA",
    metricLabel: "integrada en el core",
    links: [
      { label: "Código", href: "https://github.com/ReynaldoAlvarez/api-edu-saas-luminia" },
      { label: "Demo", href: "https://api-edu-saas-luminia.vercel.app" },
    ],
    span: "lg:col-span-7",
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
  {
    img: "/images/proj-geopois.jpg",
    alt: "Mapa mundial con puntos de datos y arcos de conexión: plataforma de geointeligencia de GEOPOIS",
    title: "GEOPOIS",
    cat: "Geointeligencia",
    desc: "Arquitectura de plataformas de geointeligencia en Madrid: GIS, web mapping, geomarketing y web scraping sobre PostgreSQL/PostGIS.",
    tags: ["PostgreSQL", "PostGIS", "GIS"],
    metric: "Madrid",
    metricLabel: "arquitecto de software",
    links: [{ label: "Sitio", href: "https://geopois.com" }],
    span: "lg:col-span-5",
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
  {
    img: "/images/proj-gmaps.jpg",
    alt: "Interfaz de mapa minimalista con marcadores de ruta y módulos utilitarios de JavaScript",
    title: "GMaps Utilities",
    cat: "Open Source",
    desc: "Utilidades y mejoras sobre la librería oficial de Google Maps JavaScript API v3 — contribuciones al ecosistema de web mapping.",
    tags: ["JavaScript", "GIS", "Open Source"],
    metric: "v3",
    metricLabel: "Google Maps JS API",
    links: [
      { label: "Código", href: "https://github.com/ReynaldoAlvarez/v3-utility-library" },
    ],
    span: "lg:col-span-5",
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
  {
    img: "/images/proj-bunkerdev.jpg",
    alt: "Estudio de código con pantalla mostrando código y botón de reproducción: canal BunkerDev",
    title: "BunkerDev",
    cat: "Educación tech",
    desc: "Canal de contenido formativo de tecnología: la educación es mi dominio — también enseñando cómo se construye.",
    tags: ["Contenido", "Educación", "Tech"],
    metric: "YouTube",
    metricLabel: "@bunkerdev",
    links: [{ label: "Canal", href: "https://www.youtube.com/@bunkerdev" }],
    span: "lg:col-span-7",
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
];

/* Spotlight: actualiza --mx/--my en la card */
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
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur">
            {p.cat}
          </span>
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

          {/* Tags + links reales */}
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
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-4">
            {p.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.16em] text-zinc-400 transition-colors hover:text-volt"
              >
                {l.label}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
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
            index="03"
            total="05"
            label="Proyectos"
            title={
              <>
                Trabajo <span className="text-outline-volt">real</span>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Proyectos verificables con enlaces directos: código en GitHub,
            plataformas en producción y contenido publicado.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-12 font-mono text-sm text-zinc-500">
            ¿Quieres ver el resto?{" "}
            <a
              href="https://github.com/ReynaldoAlvarez?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-volt underline-offset-4 transition-colors hover:underline"
            >
              Todos mis repositorios →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
