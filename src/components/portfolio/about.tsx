import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const PRINCIPLES = [
  {
    t: "Soluciones a medida",
    d: "Cada problema define su arquitectura: capas, hexagonal, microservicios o event-driven — nunca plantillas de moda.",
  },
  {
    t: "Código a mano, con rigor",
    d: "14 años escribiendo software con las mejores prácticas de la industria: tipado estricto, tests y revisión continua.",
  },
  {
    t: "IA como ventaja",
    d: "Del código artesanal a la inteligencia artificial integrada: la educación y la geointeligencia son mis dominios.",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            index="01"
            total="05"
            label="Sobre mí"
            title={
              <>
                Arquitectura con <span className="text-volt">propósito</span>,
                código con oficio
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="max-w-xl font-display text-2xl font-medium leading-snug tracking-tight text-zinc-300 md:text-[2rem] md:leading-[1.25]">
                Soy ingeniero de software, graduado de la{" "}
                <span className="text-volt">Escuela Militar de Ingeniería</span>{" "}
                en 2012. Desde entonces construí soluciones para educación y
                distintas empresas, siempre desde el{" "}
                <span className="text-volt">backend</span> y la arquitectura.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400">
                La empresa más importante de mi carrera es{" "}
                <span className="text-zinc-200">GEOPOIS.COM</span> (Madrid),
                donde trabajo como{" "}
                <span className="text-zinc-200">
                  ingeniero arquitecto de software
                </span>
                : diseño sistemas de geointeligencia con GIS, web mapping y
                geomarketing sobre PostgreSQL/PostGIS.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                Mi especialidad es presentar la mejor solución posible: evaluar
                el problema, elegir la arquitectura correcta y entregar con las
                mejores prácticas de la industria. Hoy lo hago potenciado con{" "}
                <span className="text-volt">inteligencia artificial</span> —
                como en Luminia, mi SaaS educativo con IA integrada.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
                  Ahora
                </span>
                <span className="font-mono text-xs text-zinc-300">
                  Arquitecto @ GEOPOIS.COM · Madrid
                </span>
                <span className="dot-ping relative ml-1 size-1.5 rounded-full bg-volt" />
              </div>
            </Reveal>
          </div>

          {/* Principios */}
          <div className="flex lg:col-span-5">
            <Reveal delay={0.1} className="flex h-full w-full">
              <ul className="flex h-full w-full flex-col justify-between gap-4">
                {PRINCIPLES.map((p, i) => (
                  <li
                    key={p.t}
                    className="group flex-1 rounded-2xl border border-white/10 bg-ink-2 p-6 transition-colors duration-500 hover:border-volt/30"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-volt">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-100">
                          {p.t}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                          {p.d}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
