import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const PRINCIPLES = [
  {
    t: "Soluciones a medida",
    d: "Cada problema define su arquitectura: capas, hexagonal, microservicios o event-driven — nunca plantillas de moda.",
  },
  {
    t: "Código a mano, con rigor",
    d: "12+ años escribiendo software para empresas en Bolivia, España y EE. UU.: tipado estricto, tests y revisión continua.",
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
                en 2012. Mi carrera atraviesa tres empresas que la marcaron:{" "}
                <span className="text-zinc-100">Hansa</span>,{" "}
                <span className="text-zinc-100">GEOPOIS</span> y{" "}
                <span className="text-volt">Luminia</span>.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-400">
                Empecé en <span className="text-zinc-200">Hansa Ltda.</span> (La
                Paz) como ingeniero de software del área GIS, construyendo su
                sistema de información geográfica de cero. Luego di el salto a{" "}
                <span className="text-zinc-200">GEOPOIS.COM</span> (Madrid) como
                ingeniero y arquitecto principal de software: plataformas de
                geointeligencia con PostGIS, web mapping y geomarketing.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                Hoy desarrollo desde <span className="text-zinc-200">Luminia</span>{" "}
                (luminia.com.bo): software a medida para cada cliente y, sobre
                todo, proyectos individuales de gran envergadura — lanzados y en
                producción — potenciados con{" "}
                <span className="text-volt">inteligencia artificial</span>, como
                mi SaaS educativo multi-tenant.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
                  Ahora
                </span>
                <span className="font-mono text-xs text-zinc-300">
                  Soluciones a medida + proyectos propios @ Luminia
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
