"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticAura() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.6 });

  React.useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX - 180);
      mouseY.set(event.clientY - 180);
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      id="magnetic-cursor-aura"
      className="magnetic-cursor-aura pointer-events-none fixed top-0 left-0 z-30 hidden h-[360px] w-[360px] rounded-full lg:block"
      style={{
        x: smoothX,
        y: smoothY,
        background:
          "radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(37, 99, 235, 0.05) 44%, transparent 74%)",
        filter: "blur(14px)",
      }}
      aria-hidden="true"
    />
  );
}
