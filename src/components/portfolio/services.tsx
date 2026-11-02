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
    title: "Desarrollo Front-End",
    sub: "Interfaces vivas a 60 fps",
    desc: "Aplicaciones web con React y Next.js: arquitectura escalable, tipado estricto y micro-interacciones que responden en milisegundos. Performance budget desde el primer commit.",
    deliverables: [
      "SPAs, SSR e ISR",
      "Design systems componentizados",
      "Migraciones y refactorizaciones",
      "Testing unitario y E2E",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    num: "02",
    title: "Diseño UI/UX",
    sub: "De research a handoff",
    desc: "Investigación, arquitectura de información y prototipos de alta fidelidad. Diseño en Figma con tokens que se traducen 1:1 a código — sin píxeles perdidos en el camino.",
    deliverables: [
      "Auditoría y research",
      "Wireframes y flujos",
      "UI kits y prototipos",
      "Design tokens",
    ],
    stack: ["Figma", "FigJam", "Auto Layout", "Variables"],
  },
  {
    num: "03",
    title: "E-Commerce & CMS",
    sub: "Tiendas que venden",
    desc: "Tiendas headless y catálogos editoriales con checkout optimizado, búsqueda instantánea y un CMS que tu equipo no técnico puede manejar sin pedir ayuda.",
    deliverables: [
      "Shopify headless",
      "Checkout personalizado",
      "Integraciones de pago",
      "Analítica y reportes",
    ],
    stack: ["Next.js", "Shopify", "Hydrogen", "Prisma"],
  },
  {
    num: "04",
    title: "Performance & SEO",
    sub: "Core Web Vitals en verde",
    desc: "Auditorías y optimización integral: LCP bajo 1 segundo, CLS de 0 y accesibilidad AA. SEO técnico para que tu sitio posicione desde el lanzamiento.",
    deliverables: [
      "Auditoría Lighthouse",
      "Optimización de imágenes",
      "SEO técnico y schema",
      "Monitoreo continuo",
    ],
    stack: ["Lighthouse", "Vercel", "Search Console"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            index="03"
            label="Servicios"
            title={
              <>
                Lo que puedo <span className="text-volt">hacer por ti</span>
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
