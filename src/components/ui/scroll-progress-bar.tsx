"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-progress-bar"
      className="scroll-progress-bar fixed top-0 right-0 left-0 z-50 h-[2.5px] origin-left bg-gradient-to-r from-blue-600 via-primary to-cyan-300"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
