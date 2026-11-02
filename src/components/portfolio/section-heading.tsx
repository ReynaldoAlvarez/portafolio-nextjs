'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  /** Editorial index, e.g. "01" */
  index: string
  /** Small caps label, e.g. "Sobre mí" */
  eyebrow: string
  title: ReactNode
  description?: string
  className?: string
}

/**
 * Editorial section header: index + small-caps eyebrow on a hairline rule,
 * display-serif title below. Left-aligned, no gradient underline.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45 }}
        className="flex items-center gap-4"
      >
        <span className="font-mono text-xs text-muted-foreground tnum">
          {index}
        </span>
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.06 }}
        className="mt-5 text-[1.9rem] sm:text-4xl lg:text-[2.6rem] font-medium leading-[1.1] tracking-[-0.02em] text-balance"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  )
}
