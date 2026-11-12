"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AnimatedMockupStage({
  src,
  alt,
  badgeText,
  metricText,
}: {
  src: string;
  alt: string;
  badgeText: string;
  metricText: string;
}) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), {
    stiffness: 180,
    damping: 22,
  });

  useGSAP(
    () => {
      if (!stageRef.current) return;

      gsap.fromTo(
        stageRef.current,
        {
          clipPath: "inset(12% 4% 12% 4% round 1.25rem)",
          opacity: 0.4,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 1.25rem)",
          opacity: 1,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stageRef.current,
            start: "top 86%",
            once: true,
          },
        }
      );
    },
    { scope: stageRef }
  );

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div style={{ perspective: "1200px" }} className="mockup-stage-perspective">
      <motion.div
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="animated-mockup-stage group relative aspect-[16/11] w-full overflow-hidden rounded-2xl border-2 border-[var(--nb-ink)] bg-[#f4f7fb] shadow-[7px_7px_0px_var(--nb-shadow)] transition-shadow duration-200 hover:shadow-[9px_9px_0px_var(--nb-shadow)]"
      >
        <motion.div
          animate={{ y: [0, -7, 0], scale: [1.02, 1.05, 1.02] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="mockup-float-layer relative h-full w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          animate={{ x: ["-120%", "220%"] }}
          transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
          className="mockup-sheen-sweep pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          aria-hidden="true"
        />

        <div className="mockup-hud-overlay pointer-events-none absolute right-4 bottom-4 left-4 z-10 flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#475569] bg-white/95 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#2d3748] shadow-[3px_3px_0px_#a9bad3]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span>{badgeText}</span>
          </span>

          <span className="rounded-full border-2 border-[#475569] bg-[#e9eef7] px-3.5 py-1.5 font-mono text-[11px] font-bold text-[#2d3748] shadow-[3px_3px_0px_#a9bad3]">
            {metricText}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

