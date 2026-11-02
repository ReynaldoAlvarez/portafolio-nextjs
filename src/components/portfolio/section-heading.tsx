import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  label: string;
  total?: string;
  title: ReactNode;
  className?: string;
};

/** Encabezado editorial de sección: número + etiqueta + línea + título. */
export function SectionHeading({
  index,
  label,
  total = "04",
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-volt">{index}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
          {label}
        </span>
        <div className="h-px flex-1 bg-white/10" aria-hidden />
        <span className="font-mono text-[11px] text-zinc-600">
          {index}/{total}
        </span>
      </div>
      <h2 className="mt-6 font-display text-3xl md:text-5xl font-semibold tracking-tight text-zinc-100">
        {title}
      </h2>
    </div>
  );
}
