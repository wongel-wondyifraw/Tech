"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap } from "lucide-react";

export function KineticMarquee() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const topTrackX = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const bottomTrackX = useTransform(scrollYProgress, [0, 1], ["-14%", "0%"]);

  return (
    <section
      id="kinetic-marquee"
      ref={sectionRef}
      className="kinetic-marquee-section relative overflow-hidden border-b-2 border-[var(--nb-ink)] bg-[var(--nb-surface)] py-7"
      aria-label="Enterprise Platform Capabilities"
    >
      <div
        className="marquee-edge-fade pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--nb-surface)] to-transparent"
        aria-hidden="true"
      />
      <div
        className="marquee-edge-fade pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--nb-surface)] to-transparent"
        aria-hidden="true"
      />

      <div className="marquee-rows-stack space-y-3">
        <motion.div
          style={{ x: topTrackX }}
          className="marquee-track-top flex w-max items-center gap-10 whitespace-nowrap"
        >
          <span className="font-serif text-2xl font-semibold text-foreground/90 sm:text-3xl">
            Real-Time Multi-Entity ERP
          </span>
          <Zap className="h-4 w-4 text-primary" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            SOC 2 TYPE II
          </span>
          <Zap className="h-4 w-4 text-primary" />
          <span className="font-serif text-2xl font-semibold text-foreground/90 sm:text-3xl">
            Automated General Ledger &amp; Treasury
          </span>
          <Zap className="h-4 w-4 text-primary" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            99.99% UPTIME SLA
          </span>
          <Zap className="h-4 w-4 text-primary" />
          <span className="font-serif text-2xl font-semibold text-foreground/90 sm:text-3xl">
            Finance · Inventory · HR · Custom APIs
          </span>
          <Zap className="h-4 w-4 text-primary" />
          <span className="font-serif text-2xl font-semibold text-foreground/90 sm:text-3xl">
            Real-Time Multi-Entity ERP
          </span>
        </motion.div>

        <motion.div
          style={{ x: bottomTrackX }}
          className="marquee-track-bottom flex w-max items-center gap-10 whitespace-nowrap opacity-75"
        >
          <span className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            NEW YORK · LONDON · FRANKFURT · SINGAPORE · DUBAI · NAIROBI
          </span>
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span className="font-serif text-xl text-foreground/80 sm:text-2xl">
            Event-Driven Microservices &amp; Zero-Downtime Migrations
          </span>
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            ISO 27001 · GDPR · IFRS READY
          </span>
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span className="font-serif text-xl text-foreground/80 sm:text-2xl">
            Sub-50ms Global Query Execution
          </span>
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            NEW YORK · LONDON · FRANKFURT · SINGAPORE · DUBAI · NAIROBI
          </span>
        </motion.div>
      </div>
    </section>
  );
}
