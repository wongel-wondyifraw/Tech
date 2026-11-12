"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LottieBeacon } from "@/components/ui/lottie-beacon";
import { ConnectDialog } from "@/components/sections/connect-dialog";

const LightCanvas = dynamic(
  () => import("@/components/three/light-canvas").then((mod) => mod.LightCanvas),
  { ssr: false }
);

export function HeroSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 96]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.08]);
  const topLineX = useTransform(scrollYProgress, [0, 1], [0, -28]);
  const bottomLineX = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="hero-section relative flex min-h-[92vh] items-center justify-center overflow-hidden border-b-2 border-[var(--nb-ink)] bg-background/70 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div
        className="hero-mesh-backdrop pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 68% 54% at 22% 24%, rgba(147, 197, 253, 0.24), transparent 65%), radial-gradient(ellipse 62% 50% at 78% 30%, rgba(199, 210, 254, 0.2), transparent 65%), radial-gradient(ellipse 58% 45% at 50% 80%, rgba(219, 234, 254, 0.22), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        className="hero-simple-backdrop pointer-events-none absolute inset-0 z-0 opacity-[0.045] dark:opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1.15px, transparent 1.15px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <LightCanvas />

      <motion.div
        style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
        className="hero-content-container relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <h1 className="hero-headline font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          <span className="hero-headline-mask block overflow-hidden pb-1">
            <motion.span
              style={{ x: topLineX }}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Unified Enterprise ERP
            </motion.span>
          </span>
          <span className="hero-headline-mask block overflow-hidden pb-2">
            <motion.span
              style={{ x: bottomLineX }}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-primary"
            >
              Built for Global Velocity
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="hero-subtitle mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg"
        >
          AetherCore Systems unifies multi-entity finance, autonomous supply chains, and custom enterprise software into one resilient, real-time operating backbone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
          className="hero-cta-group mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <ConnectDialog triggerLabel="Book Live Demo" variant="default" size="lg" />

          <a href="#engineering-showcase" className="hero-secondary-link">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6"
            >
              <Layers className="mr-2 h-4 w-4 text-primary" />
              <span>Explore Services</span>
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="hero-scroll-beacon mt-14 flex flex-col items-center gap-2"
        >
          <a
            href="#engineering-showcase"
            className="scroll-beacon-link group flex flex-col items-center gap-1 text-xs font-mono font-medium uppercase tracking-[0.22em] text-foreground/75 transition-colors hover:text-foreground"
          >
            <LottieBeacon />
            <span className="flex items-center gap-1">
              <span>Scroll to Explore Services</span>
              <ArrowDownRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
