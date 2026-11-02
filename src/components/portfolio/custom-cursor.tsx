"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const fineMQ =
  typeof window !== "undefined"
    ? window.matchMedia("(pointer: fine)")
    : null;

function subscribePointer(cb: () => void) {
  fineMQ?.addEventListener("change", cb);
  return () => fineMQ?.removeEventListener("change", cb);
}

/**
 * Cursor personalizado: punto volt + anillo con inercia.
 * Solo se activa en dispositivos con puntero fino (mouse).
 */
export function CustomCursor() {
  const finePointer = useSyncExternalStore(
    subscribePointer,
    () => fineMQ?.matches ?? false,
    () => false
  );
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.55 });

  useEffect(() => {
    if (!finePointer) return;
    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(
        !!t?.closest(
          "a, button, [role='button'], [data-cursor], input, textarea"
        )
      );
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [finePointer, x, y]);

  if (!finePointer) return null;

  return (
    <>
      {/* Punto principal */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[95]"
        style={{ x, y, opacity: visible ? 1 : 0 }}
      >
        <motion.span
          className="block -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt"
          animate={{
            width: hovering ? 5 : 7,
            height: hovering ? 5 : 7,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      {/* Anillo con inercia */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[94]"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      >
        <motion.span
          className="block -translate-x-1/2 -translate-y-1/2 rounded-full border"
          animate={{
            width: hovering ? 52 : 34,
            height: hovering ? 52 : 34,
            borderColor: hovering
              ? "rgba(200,245,80,0.8)"
              : "rgba(255,255,255,0.28)",
            backgroundColor: hovering
              ? "rgba(200,245,80,0.08)"
              : "rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      </motion.div>
    </>
  );
}
