"use client";

import * as React from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

export function TiltTechCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowX = useMotionValue(-200);
  const glowY = useMotionValue(-200);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [3.5, -3.5]), {
    stiffness: 240,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-3.5, 3.5]), {
    stiffness: 240,
    damping: 24,
  });

  const spotlightBg = useMotionTemplate`radial-gradient(320px circle at ${glowX}px ${glowY}px, rgba(47, 111, 237, 0.1), transparent 72%)`;

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    mouseX.set(x / rect.width);
    mouseY.set(y / rect.height);
    glowX.set(x);
    glowY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
    glowX.set(-200);
    glowY.set(-200);
  }

  return (
    <div style={{ perspective: "1100px" }} className="tilt-card-perspective h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`tilt-tech-card group relative h-full overflow-hidden rounded-2xl border-2 border-[var(--nb-ink)] bg-card shadow-[6px_6px_0px_var(--nb-shadow)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_var(--nb-shadow)] ${className}`}
      >
        <motion.div
          style={{ background: spotlightBg }}
          className="tilt-card-spotlight pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
        <div
          className="tilt-card-grid-bg pointer-events-none absolute inset-0 z-0 opacity-[0.045] dark:opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
          aria-hidden="true"
        />
        <div className="tilt-card-inner relative z-20 flex h-full flex-col">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

