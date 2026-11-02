"use client";

import { Check, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Service = {
  num: string;
  title: string;
  sub: string;
  desc: string;
  deliverables: string[];
  stack: string[];
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Arquitectura de Software",
    sub: "La decisión correcta para cada problema",
    desc: "Evaluación y diseño de la arquitectura que el problema pide — no la que está de moda: capas, hexagonal, microservicios o event-driven, documentada con criterio y lista para escalar.",
    deliverables: [
      "Evaluación y ADRs",
      "Diseño de sistemas a medida",
      "Revisión de arquitectura",
      "Roadmaps técnicos",
    ],
    stack: ["C4", "ADR", "DDD", "Escalabilidad"],
  },
  {
    num: "02",
    title: "Desarrollo Backend",
    sub: "APIs sólidas, tipadas y probadas",
    desc: "El backend es mi especialidad: APIs REST con TypeScript y Node.js, modelado de datos con Prisma sobre PostgreSQL, y despliegues limpios con Docker.",
    deliverables: [
      "APIs REST de producción",
      "Modelado de datos (Prisma)",
      "Integraciones y pipelines",
      "Testing y CI/CD",
    ],
    stack: ["TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker"],
  },
  {
    num: "03",
    title: "Educación + IA",
    sub: "Mi dominio: enseñar y construir para enseñar",
    desc: "Es donde más soluciones he construido. Plataformas educativas SaaS escritas a mano, hoy potenciadas con inteligencia artificial integrada — como Luminia.",
    deliverables: [
      "SaaS educativo (Luminia)",
      "IA integrada al core",
      "Contenido formativo (BunkerDev)",
      "Formación de equipos",
    ],
    stack: ["Luminia", "TypeScript", "Vercel"],
  },
  {
    num: "04",
    title: "Geointeligencia",
    sub: "Sistemas geoespaciales a escala",
    desc: "Lo que hago en GEOPOIS.COM (Madrid): plataformas de GIS, web mapping y geomarketing sobre el stack geoespacial de producción.",
    deliverables: [
      "Plataformas GIS",
      "Web mapping interactivo",
      "Web scraping y datos",
      "Geomarketing",
    ],
    stack: ["PostGIS", "Leaflet", "Mapbox", "OpenLayers", "GeoServer"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            index="04"
            total="05"
            label="Servicios"
            title={
              <>
                Lo que puedo <span className="text-volt">construir por ti</span>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <Accordion
            type="single"
            collapsible
            defaultValue="s-01"
            className="border-t border-white/10"
          >
            {SERVICES.map((s) => (
              <AccordionItem
                key={s.num}
                value={`s-${s.num}`}
                className="border-white/10"
              >
                <AccordionTrigger className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 py-7 text-left hover:no-underline [&>svg]:hidden md:gap-x-8 md:py-8">
                  <span className="font-mono text-xs text-volt">{s.num}</span>
                  <span className="flex min-w-0 flex-col gap-1.5">
                    <span className="font-display text-xl font-semibold tracking-tight text-zinc-300 transition-colors duration-300 group-hover:text-zinc-100 group-data-[state=open]:text-zinc-100 md:text-3xl">
                      {s.title}
                    </span>
                    <span className="truncate font-sans text-sm font-normal text-zinc-500">
                      {s.sub}
                    </span>
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-volt/50 group-data-[state=open]:rotate-45 group-data-[state=open]:border-volt/60">
                    <Plus
                      className="size-4 text-zinc-400 transition-colors group-data-[state=open]:text-volt"
                      aria-hidden
                    />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-9">
                  <div className="grid max-w-5xl gap-8 md:grid-cols-2">
                    <p className="max-w-md text-sm leading-relaxed text-zinc-400">
                      {s.desc}
                    </p>
                    <div>
                      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-600">
                        Entregables
                      </p>
                      <ul className="space-y-2.5">
                        {s.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2.5 text-sm text-zinc-300"
                          >
                            <Check className="size-3.5 shrink-0 text-volt" aria-hidden />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {s.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
