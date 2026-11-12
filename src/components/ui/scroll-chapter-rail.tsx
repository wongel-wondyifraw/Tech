"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollChapterRail() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  const [activeId, setActiveId] = React.useState("hero");

  React.useEffect(() => {
    const sectionIds = [
      "hero",
      "engineering-showcase",
      "pinned-journey",
      "solutions",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-38% 0px -45% 0px", threshold: 0.01 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      id="scroll-chapter-rail"
      className="scroll-chapter-rail fixed top-1/2 right-5 z-30 hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex"
      aria-label="Page Chapter Progress"
    >
      <div className="rail-track relative flex flex-col items-end gap-3.5 pr-4">
        <div
          className="rail-line-bg absolute top-1 right-1 bottom-1 w-px bg-border/70"
          aria-hidden="true"
        />
        <motion.div
          className="rail-line-fill absolute top-1 right-1 bottom-1 w-[2px] origin-top bg-primary"
          style={{ scaleY: smoothProgress }}
          aria-hidden="true"
        />

        <a
          href="#hero"
          className="rail-dot-link group flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className={activeId === "hero" ? "text-primary opacity-100" : "opacity-0 transition-opacity group-hover:opacity-100"}>
            Overview
          </span>
          <span className={`h-2 w-2 rounded-full border transition-all ${activeId === "hero" ? "scale-125 border-primary bg-primary" : "border-border bg-background"}`} />
        </a>

        <a
          href="#engineering-showcase"
          className="rail-dot-link group flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className={activeId === "engineering-showcase" ? "text-primary opacity-100" : "opacity-0 transition-opacity group-hover:opacity-100"}>
            Services
          </span>
          <span className={`h-2 w-2 rounded-full border transition-all ${activeId === "engineering-showcase" ? "scale-125 border-primary bg-primary" : "border-border bg-background"}`} />
        </a>

        <a
          href="#pinned-journey"
          className="rail-dot-link group flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className={activeId === "pinned-journey" ? "text-primary opacity-100" : "opacity-0 transition-opacity group-hover:opacity-100"}>
            Showcase
          </span>
          <span className={`h-2 w-2 rounded-full border transition-all ${activeId === "pinned-journey" ? "scale-125 border-primary bg-primary" : "border-border bg-background"}`} />
        </a>

        <a
          href="#solutions"
          className="rail-dot-link group flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className={activeId === "solutions" ? "text-primary opacity-100" : "opacity-0 transition-opacity group-hover:opacity-100"}>
            Solutions
          </span>
          <span className={`h-2 w-2 rounded-full border transition-all ${activeId === "solutions" ? "scale-125 border-primary bg-primary" : "border-border bg-background"}`} />
        </a>
      </div>
    </aside>
  );
}
