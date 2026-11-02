import { Building2, Check, Globe2, GraduationCap, Lightbulb } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Job = {
  icon: React.ComponentType<{ className?: string }>;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  place: string;
  current?: boolean;
  desc: string;
  achievements: string[];
  tags: string[];
};

/* Datos verificados contra el CV (resumen-vidal-alvarez-2023.pdf) y LinkedIn */
const JOBS: Job[] = [
  {
    icon: Lightbulb,
    role: "Ingeniero de Software — Soluciones a medida",
    company: "Luminia",
    companyUrl: "https://luminia.com.bo",
    period: "2023 — Hoy",
    place: "La Paz, Bolivia · Remoto",
    current: true,
    desc: "Desarrollo de software a medida — web, móvil y backend — y, sobre todo, proyectos individuales de gran envergadura diseñados, construidos y puestos en producción de principio a fin.",
    achievements: [
      "Luminia: API SaaS educativa con IA integrada, multi-tenant, en producción",
      "Backends con Clean Architecture (Apitemplarios): DDD, Pino, Zod, JWT",
      "Despliegues productivos con Docker, CI/CD y migraciones automáticas",
      "Mentoría técnica y estándares de code review con principios SOLID",
    ],
    tags: ["TypeScript", "Express 5", "Prisma 6", "Docker", "Vercel", "IA"],
  },
  {
    icon: Globe2,
    role: "Ingeniero y Arquitecto Principal de Software",
    company: "GEOPOIS.COM",
    companyUrl: "https://geopois.com",
    period: "2020 — 2022",
    place: "Madrid, España",
    desc: "La empresa más importante de mi carrera. Arquitectura de la plataforma geoespacial geopois.com y de sus servicios: web mapping interactivo, geomarketing y procesamiento de datos geográficos.",
    achievements: [
      "Arquitectura de la plataforma geopois.com con PostgreSQL/PostGIS",
      "Microservicios para procesamiento de datos geoespaciales",
      "Integración de Google Maps API y OpenStreetMap en tiempo real",
      "Despliegues en AWS (EC2, S3, Lambda) y Google Cloud",
    ],
    tags: ["Node.js", "PostgreSQL", "PostGIS", "AWS", "Google Cloud", "GIS"],
  },
  {
    icon: Building2,
    role: "Ingeniero de Software — Área GIS",
    company: "Hansa Ltda.",
    companyUrl: "https://hansa.com.bo",
    period: "2015 — 2019",
    place: "La Paz, Bolivia",
    desc: "División Industria y Construcción. A cargo del diseño, desarrollo y despliegue del Sistema de Información Geográfica empresarial — de la arquitectura inicial a la puesta en producción.",
    achievements: [
      "SIG empresarial diseñado e implementado de principio a fin",
      "Visores cartográficos desplegados en Google Cloud",
      "Módulos CRM geoespaciales: geofences y geomarketing",
      "Stack propio con PHP, JavaScript, MySQL y Google Cloud",
    ],
    tags: ["PHP", "JavaScript", "MySQL", "Google Cloud", "Geomarketing", "GIS"],
  },
];

export function Experience() {
  return (
    <section id="trayectoria" className="relative py-24 md:py-36" aria-label="Trayectoria profesional">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            index="02"
            total="05"
            label="Trayectoria"
            title={
              <>
                Tres empresas, <span className="text-outline-volt">un oficio</span>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
            Donde más he aprendido y construido: del SIG empresarial en La Paz
            a la geointeligencia en Madrid, y hoy las soluciones a medida desde
            Luminia.
          </p>
        </Reveal>

        {/* Timeline */}
        <ol className="relative mt-14 space-y-8 before:absolute before:bottom-6 before:left-[13px] before:top-2 before:w-px before:bg-white/10 md:before:left-[15px]">
          {JOBS.map((j, i) => (
            <li key={j.company} className="relative pl-12 md:pl-16">
              {/* Nodo */}
              <span
                aria-hidden
                className={`absolute left-0 top-8 grid size-7 place-items-center rounded-full border bg-[#0a0a0b] md:size-8 ${
                  j.current ? "border-volt/70" : "border-white/15"
                }`}
              >
                <span
                  className={`rounded-full ${j.current ? "size-2.5 bg-volt" : "size-2 bg-zinc-500"}`}
                />
              </span>

              <Reveal delay={i * 0.07}>
                <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-2 p-7 transition-colors duration-500 hover:border-volt/30 md:p-9">
                  {/* Número de estación */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-7 select-none font-display text-[7rem] font-bold leading-none text-white/[0.06] transition-colors duration-500 group-hover:text-volt/[0.1] md:text-[9rem]"
                  >
                    {String(JOBS.length - i).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    {/* Encabezado */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                      <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-[#0a0a0b] text-volt">
                        <j.icon className="size-5" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">
                            {j.role}
                          </h3>
                          {j.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-volt/40 bg-volt/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-volt">
                              <span className="dot-ping relative size-1.5 rounded-full bg-volt" />
                              Actual
                            </span>
                          )}
                        </div>
                        <p className="mt-1 flex flex-wrap items-center gap-x-3 font-mono text-xs text-zinc-500">
                          <a
                            href={j.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-volt/90 underline-offset-4 transition-colors hover:text-volt hover:underline"
                          >
                            {j.company}
                          </a>
                          <span className="text-zinc-700" aria-hidden>
                            ·
                          </span>
                          <span>{j.place}</span>
                          <span className="text-zinc-700" aria-hidden>
                            ·
                          </span>
                          <span className="text-zinc-400">{j.period}</span>
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400">
                      {j.desc}
                    </p>

                    {/* Logros */}
                    <ul className="mt-5 grid gap-2.5 md:grid-cols-2">
                      {j.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-volt"
                            aria-hidden
                          />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {j.tags.map((t) => (
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
            </li>
          ))}

          {/* Base: EMI */}
          <li className="relative pl-12 md:pl-16">
            <span
              aria-hidden
              className="absolute left-0 top-7 grid size-7 place-items-center rounded-full border border-white/15 bg-[#0a0a0b] md:size-8"
            >
              <GraduationCap className="size-3.5 text-zinc-400" aria-hidden />
            </span>
            <Reveal delay={0.24}>
              <article className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-200">
                    Licenciatura en Ingeniería de Sistemas —{" "}
                    <span className="text-zinc-400">
                      Escuela Militar de Ingeniería
                    </span>
                  </h3>
                  <p className="font-mono text-xs text-zinc-500">
                    EMI · La Paz · 2007 — 2012
                  </p>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
                  La base: arquitectura de software, bases de datos, sistemas
                  distribuidos e ingeniería geoespacial. De ahí salió todo lo
                  demás.
                </p>
              </article>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  );
}
