'use client'

import { MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Global motion defaults (Emil Kowalski principles):
 * - One exponential ease-out family (ease-out-quint) for everything that enters
 * - Springs only where physics matter (nav pill, drag)
 * - reducedMotion="user" → Framer auto-falls back to opacity/color changes
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionConfig>
  )
}
