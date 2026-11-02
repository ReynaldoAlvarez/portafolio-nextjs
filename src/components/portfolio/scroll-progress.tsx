"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Barra de progreso de scroll (3px, volt) pegada al borde superior. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[85] h-[3px] origin-left bg-volt"
      style={{ scaleX }}
    />
  );
}
