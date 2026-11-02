"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("es-BO", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "America/La_Paz",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0d0d0f]/60">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-3 md:items-center">
        <p className="order-2 font-mono text-xs text-zinc-600 md:order-1">
          © 2026 Reynaldo Alvarez — La Paz, Bolivia
        </p>

        <p className="order-1 font-mono text-xs text-zinc-500 md:order-2 md:text-center">
          La Paz{" "}
          <span className="text-volt tabular-nums" suppressHydrationWarning>
            {time ?? "--:--:--"}
          </span>{" "}
          <span className="text-zinc-700">·</span> v2.0 — Next.js + Tailwind
        </p>

        <div className="order-3 md:text-right">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Volver arriba"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-zinc-400 transition-colors duration-300 hover:border-volt/50 hover:text-volt"
          >
            Subir
            <ArrowUp className="size-3.5" aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}
