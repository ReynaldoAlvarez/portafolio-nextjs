import { Building2, GraduationCap, Layers } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Station = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  org: string;
  place: string;
  desc: string;
  tags: string[];
};

const STATIONS: Station[] = [
  {
    icon: Building2,
    title: "Ingeniero Arquitecto de Software",
    org: "GEOPOIS.COM",
    place: "Madrid, España",
    desc: "La empresa más importante de mi carrera. Diseño la arquitectura de plataformas de geointeligencia: GIS, web mapping, geomarketing y web scraping, sobre un stack geoespacial de producción con PostgreSQL/PostGIS.",
    tags: ["PostgreSQL", "PostGIS", "Leaflet", "Mapbox", "OpenLayers", "GeoServer"],
  },
  {
    icon: Layers,
    title: "Soluciones educativas + IA",
    org: "Proyectos propios",
    place: "Remoto",
    desc: "El dominio donde más construyo: plataformas educativas escritas a mano, hoy potenciadas con inteligencia artificial. Luminia (API SaaS con IA integrada) y BunkerDev (contenido formativo en YouTube).",
    tags: ["TypeScript", "Prisma", "Docker", "Vercel", "IA"],
  },
  {
    icon: GraduationCap,
    title: "Ingeniería — EMI",
    org: "Escuela Militar de Ingeniería",
    place: "La Paz, Bolivia · 2012",
    desc: "Formación ingenieril de rigurosa base matemática y sistémica. El punto de partida de 14 años construyendo software.",
    tags: ["Ingeniería de software", "Sistemas"],
  },
];

export function Experience() {
  return (
    <section id="trayectoria" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            index="02"
            total="05"
            label="Trayectoria"
            title={
              <>
                De La Paz a <span className="text-outline-volt">Madrid</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {STATIONS.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.08}
              className="lg:col-span-12"
            >
              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-2 p-7 transition-colors duration-500 hover:border-volt/30 md:p-9">
                {/* Número de estación */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-7 select-none font-display text-[7rem] font-bold leading-none text-white/[0.07] transition-colors duration-500 group-hover:text-volt/[0.12] md:text-[9rem]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
                  {/* Icono en círculo */}
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-[#0a0a0b] text-volt transition-colors duration-500 group-hover:border-volt/40">
                    <s.icon className="size-6" aria-hidden />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">
                        {s.title}
                      </h3>
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-volt">
                        {s.org}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs text-zinc-500">
                      {s.place}
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
                      {s.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
