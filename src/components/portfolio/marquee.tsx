import { Asterisk } from "lucide-react";

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Framer Motion",
  "Prisma",
  "Figma",
  "PostgreSQL",
  "Git",
];

/** Cinta infinita de tecnologías. Pausa al hacer hover. */
export function Marquee() {
  return (
    <section
      aria-label="Tecnologías que uso"
      className="group overflow-hidden border-y border-white/10 bg-[#0d0d0f] py-5"
    >
      <div className="animate-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
        {[...STACK, ...STACK].map((t, i) => (
          <span
            key={`${t}-${i}`}
            aria-hidden={i >= STACK.length}
            className="flex items-center font-mono text-[13px] uppercase tracking-[0.26em] text-zinc-500"
          >
            <span className="px-7 transition-colors">{t}</span>
            <Asterisk className="size-4 shrink-0 text-volt" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
