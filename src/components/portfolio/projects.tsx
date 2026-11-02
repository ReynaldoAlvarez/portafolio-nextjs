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
  status: { label: string; live?: boolean };
  links: ProjectLink[];
  span: string;
  sizes: string;
};

/* Proyectos verificados: enlaces comprobados en producción (oct. 2026) */
const PROJECTS: Project[] = [
  {
    img: "/images/proj-luminia.jpg",
    alt: "Arquitectura backend de Luminia: nodos de IA conectando paneles de código y terminales",
    title: "Luminia — SaaS Educativo con IA",
    cat: "Backend SaaS · Educación",
    desc: "Mi proyecto insignia: API SaaS multi-tenant para instituciones educativas con IA integrada. Express 5, Prisma 6, JWT, Zod, tests con Jest y despliegue con Docker + CI/CD.",
    tags: ["TypeScript", "Express 5", "Prisma 6", "PostgreSQL", "Docker"],
    metric: "IA",
    metricLabel: "integrada en el core",
    status: { label: "Producción" },
    links: [
      { label: "Código", href: "https://github.com/ReynaldoAlvarez/api-edu-saas-luminia" },
    ],
    span: "lg:col-span-7",
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
  {
    img: "/images/proj-geopois.jpg",
    alt: "Mapa mundial con puntos de datos y arcos de conexión: plataforma de geointeligencia de GEOPOIS",
    title: "GEOPOIS",
    cat: "Geointeligencia · Madrid",
    desc: "Plataforma geoespacial que arquitecturé como ingeniero principal: visores web mapping, PostgreSQL/PostGIS, geomarketing y servicios en AWS y Google Cloud.",
    tags: ["PostgreSQL", "PostGIS", "Node.js", "AWS"],
    metric: "GIS",
    metricLabel: "geointeligencia",
    status: { label: "Producción", live: true },
    links: [
      { label: "Sitio", href: "https://geopois.com" },
      { label: "Código", href: "https://github.com/ReynaldoAlvarez/lefleat-react-map" },
    ],
    span: "lg:col-span-5",
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
  {
    img: "/images/proj-bunkerbible.jpg",
    alt: "Biblioteca digital de contenido con ondas de audio y reproductor de podcasts",
    title: "BunkerBible",
    cat: "Plataforma de contenido",
    desc: "Servicio digital en producción: podcasts, sermones, estudios bíblicos y audiolibros categorizados por autor y tema, con recomendaciones personalizadas y rankings.",
    tags: ["Next.js", "React", "Netlify"],
    metric: "2022",
    metricLabel: "en producción",
    status: { label: "Producción", live: true },
    links: [{ label: "Ver sitio", href: "https://bunkerbible.netlify.app" }],
    span: "lg:col-span-5",
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
  {
    img: "/images/proj-emaillite.jpg",
    alt: "Microservicio de correo: sobres luminosos viajando por un pipeline serverless de nodos",
    title: "Email Lite — Microservicio",
    cat: "Backend · Serverless",
    desc: "Microservicio de notificaciones con responsabilidad única: envío de correo con Nodemailer y SMTP de Google, API REST minimalista y despliegue serverless en Vercel.",
    tags: ["TypeScript", "Nodemailer", "SMTP", "Vercel"],
    metric: "API",
    metricLabel: "serverless · Vercel",
    status: { label: "Producción", live: true },
    links: [
      { label: "Demo", href: "https://email-lite.vercel.app" },
      { label: "Código", href: "https://github.com/ReynaldoAlvarez/email-lite" },
    ],
    span: "lg:col-span-7",
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
  {
    img: "/images/proj-gmaps.jpg",
    alt: "Interfaz de mapa con marcadores de ruta para plataforma de movilidad",
    title: "ZMove — Movilidad",
    cat: "Mobile · Ride-sharing",
    desc: "Plataforma de movilidad lanzada en 2022: conductores publican viajes, pasajeros encuentran opciones según su geolocalización. Backend Node.js + MongoDB, app Flutter iOS/Android, AWS.",
    tags: ["Flutter", "Node.js", "MongoDB", "AWS", "Google Maps"],
    metric: "iOS·Android",
    metricLabel: "app Flutter",
    status: { label: "Lanzada 2022" },
    links: [],
    span: "lg:col-span-6",
    sizes: "(max-width: 1024px) 100vw, 48vw",
  },
  {
    img: "/images/proj-apitemplarios.jpg",
    alt: "Anillos concéntricos de capas de software: arquitectura hexagonal limpia",
    title: "Apitemplarios",
    cat: "Backend · Clean Architecture",
    desc: "Backend empresarial open source con arquitectura hexagonal y DDD: capas core/infrastructure/modules/shared, logging con Pino, validación Zod y seguridad JWT + bcrypt.",
    tags: ["TypeScript", "Clean Architecture", "DDD", "Pino", "Zod"],
    metric: "DDD",
    metricLabel: "arquitectura hexagonal",
    status: { label: "Open Source" },
    links: [
      { label: "Código", href: "https://github.com/ReynaldoAlvarez/apitemplarios" },
    ],
    span: "lg:col-span-6",
    sizes: "(max-width: 1024px) 100vw, 48vw",
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
          {/* Estado: en producción / lanzada / open source */}
          <span
            className={`absolute right-4 top-4 flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur ${
              p.status.live
                ? "border-volt/40 bg-volt/10 text-volt"
                : "border-white/15 bg-black/45 text-zinc-300"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${p.status.live ? "dot-ping relative bg-volt" : "bg-zinc-400"}`}
              aria-hidden
            />
            {p.status.label}
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

          {/* Tags */}
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

          {/* Links */}
          {p.links.length > 0 && (
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
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="relative py-24 md:py-36" aria-label="Proyectos en producción">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            index="03"
            total="05"
            label="Proyectos"
            title={
              <>
                Lanzados y en <span className="text-outline-volt">producción</span>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Proyectos individuales de gran envergadura y plataformas a medida,
            verificados con enlaces vivos: código en GitHub y sistemas corriendo
            en producción.
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
