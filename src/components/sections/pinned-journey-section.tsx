"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function PinnedJourneySection() {
  const stageRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const counterRotate = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const svgDraw = useTransform(scrollYProgress, [0, 0.92], [0.05, 1]);
  const progressBarScale = useTransform(scrollYProgress, [0, 1], [0.04, 1]);

  const act1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.28], [1, 1, 0]);
  const act1Y = useTransform(scrollYProgress, [0, 0.28], [0, -36]);
  const act1Scale = useTransform(scrollYProgress, [0, 0.28], [1, 1.09]);

  const act2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.29, 0.48, 0.56],
    [0, 1, 1, 0]
  );
  const act2Y = useTransform(scrollYProgress, [0.2, 0.3, 0.55], [38, 0, -36]);
  const act2Scale = useTransform(scrollYProgress, [0.22, 0.56], [1.1, 1]);
  const act2Clip = useTransform(
    scrollYProgress,
    [0.2, 0.31],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const act3Opacity = useTransform(
    scrollYProgress,
    [0.48, 0.57, 0.74, 0.82],
    [0, 1, 1, 0]
  );
  const act3Y = useTransform(scrollYProgress, [0.48, 0.58, 0.81], [38, 0, -36]);
  const act3Scale = useTransform(scrollYProgress, [0.5, 0.82], [1.1, 1]);
  const act3Clip = useTransform(
    scrollYProgress,
    [0.48, 0.59],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const act4Opacity = useTransform(scrollYProgress, [0.74, 0.83, 1], [0, 1, 1]);
  const act4Y = useTransform(scrollYProgress, [0.74, 0.84, 1], [38, 0, 0]);
  const act4Scale = useTransform(scrollYProgress, [0.75, 1], [1.1, 1]);
  const act4Clip = useTransform(
    scrollYProgress,
    [0.74, 0.85],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const cardTiltY = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [-5, 2, -2, 4]);
  const cardTiltX = useTransform(scrollYProgress, [0, 0.5, 1], [2.5, 0, -2.5]);
  const ghostNumeralY = useTransform(scrollYProgress, [0, 1], [24, -40]);

  return (
    <section
      id="pinned-journey"
      ref={stageRef}
      className="pinned-journey-section relative border-y-2 border-[var(--nb-ink)] bg-[var(--nb-surface)]/75"
    >
      <div className="pinned-desktop-stage hidden lg:block lg:h-[400vh]">
        <div className="pinned-sticky-frame sticky top-16 flex h-[calc(100vh-4rem)] w-full items-center overflow-hidden px-6 xl:px-12">
          <div className="pinned-ambient-backdrop pointer-events-none absolute inset-0 z-0 opacity-20 blur-3xl saturate-150" aria-hidden="true">
            <motion.div style={{ opacity: act1Opacity }} className="absolute inset-0">
              <Image src="/images/erp-command-center.jpg" alt="" fill sizes="100vw" className="object-cover" />
            </motion.div>
            <motion.div style={{ opacity: act2Opacity }} className="absolute inset-0">
              <Image src="/images/supply-chain-analytics.jpg" alt="" fill sizes="100vw" className="object-cover" />
            </motion.div>
            <motion.div style={{ opacity: act3Opacity }} className="absolute inset-0">
              <Image src="/images/engineering-studio.jpg" alt="" fill sizes="100vw" className="object-cover" />
            </motion.div>
            <motion.div style={{ opacity: act4Opacity }} className="absolute inset-0">
              <Image src="/images/cloud-infrastructure.jpg" alt="" fill sizes="100vw" className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-background/65" />
          </div>

          <motion.svg
            style={{ rotate: ringRotate }}
            viewBox="0 0 600 600"
            className="pinned-sacred-svg pointer-events-none absolute -left-32 top-1/2 z-0 h-[780px] w-[780px] -translate-y-1/2 text-primary/20"
            fill="none"
            aria-hidden="true"
          >
            <motion.circle
              cx="300"
              cy="300"
              r="275"
              stroke="currentColor"
              strokeWidth="1"
              style={{ pathLength: svgDraw }}
            />
            <motion.circle
              cx="300"
              cy="300"
              r="205"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 8"
              style={{ pathLength: svgDraw }}
            />
            <motion.path
              d="M300 18 L300 582 M18 300 L582 300"
              stroke="currentColor"
              strokeWidth="0.75"
              style={{ pathLength: svgDraw }}
            />
          </motion.svg>

          <motion.svg
            style={{ rotate: counterRotate }}
            viewBox="0 0 500 500"
            className="pinned-sacred-svg-right pointer-events-none absolute -right-24 top-1/2 z-0 h-[640px] w-[640px] -translate-y-1/2 text-primary/15"
            fill="none"
            aria-hidden="true"
          >
            <motion.circle
              cx="250"
              cy="250"
              r="220"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 10"
              style={{ pathLength: svgDraw }}
            />
            <motion.path
              d="M94 94 L406 406 M406 94 L94 406"
              stroke="currentColor"
              strokeWidth="0.75"
              style={{ pathLength: svgDraw }}
            />
          </motion.svg>

          <div className="pinned-grid relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-12 items-center gap-10 xl:gap-14">
            <div className="pinned-narrative-col relative col-span-5 flex flex-col justify-between space-y-8 py-4">
              <motion.div
                style={{ y: ghostNumeralY }}
                className="pinned-ghost-numerals pointer-events-none absolute -top-14 -left-4 z-0 select-none font-serif text-[11rem] font-bold leading-none text-primary/10"
                aria-hidden="true"
              >
                <motion.span style={{ opacity: act1Opacity }} className="absolute top-0 left-0">
                  01
                </motion.span>
                <motion.span style={{ opacity: act2Opacity }} className="absolute top-0 left-0">
                  02
                </motion.span>
                <motion.span style={{ opacity: act3Opacity }} className="absolute top-0 left-0">
                  03
                </motion.span>
                <motion.span style={{ opacity: act4Opacity }} className="absolute top-0 left-0">
                  04
                </motion.span>
              </motion.div>

              <div className="pinned-label-row relative z-10 flex items-center gap-3">
                <Badge
                  variant="outline"
                  className="rounded-full px-4 py-1 font-mono text-xs"
                >
                  Interactive Delivery Flow
                </Badge>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  4 Core Service Pillars
                </span>
              </div>

              <div className="pinned-acts-stage relative z-10 h-[270px]">
                <motion.div
                  style={{ opacity: act1Opacity, y: act1Y }}
                  className="pinned-act-panel absolute inset-0 flex flex-col justify-center space-y-4"
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    01 · Software Development
                  </p>
                  <h2 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-foreground xl:text-5xl">
                    Full-Stack Web Apps &amp; Cloud Platforms
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground xl:text-lg">
                    We architect fast, maintainable SaaS products, customer portals, and secure backend APIs designed to grow cleanly with your business.
                  </p>
                  <p className="font-mono text-sm text-primary">
                    STACK: NEXT.JS · TYPESCRIPT · NESTJS · POSTGRESQL
                  </p>
                </motion.div>

                <motion.div
                  style={{ opacity: act2Opacity, y: act2Y }}
                  className="pinned-act-panel absolute inset-0 flex flex-col justify-center space-y-4"
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    02 · Mobile App Development
                  </p>
                  <h2 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-foreground xl:text-5xl">
                    Native &amp; Cross-Platform Mobile Experiences
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground xl:text-lg">
                    Smooth iOS and Android applications featuring offline sync, push workflows, and direct integration with your live business data.
                  </p>
                  <p className="font-mono text-sm text-primary">
                    PLATFORMS: IOS · ANDROID · REACT NATIVE · FLUTTER
                  </p>
                </motion.div>

                <motion.div
                  style={{ opacity: act3Opacity, y: act3Y }}
                  className="pinned-act-panel absolute inset-0 flex flex-col justify-center space-y-4"
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    03 · ERP Development
                  </p>
                  <h2 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-foreground xl:text-5xl">
                    Unified Finance, Inventory &amp; Operations
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground xl:text-lg">
                    Modular ERP systems built around your exact accounting rules, stock tracking, multi-branch approvals, and executive reporting.
                  </p>
                  <p className="font-mono text-sm text-primary">
                    MODULES: LEDGER · INVENTORY · HR · PROCUREMENT
                  </p>
                </motion.div>

                <motion.div
                  style={{ opacity: act4Opacity, y: act4Y }}
                  className="pinned-act-panel absolute inset-0 flex flex-col justify-center space-y-4"
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    04 · Custom Solutions &amp; UI/UX Design
                  </p>
                  <h2 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-foreground xl:text-5xl">
                    Bespoke Workflows &amp; Human-Centered Design
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground xl:text-lg">
                    From Figma design systems and interactive prototypes to custom automation pipelines and legacy integrations tailored for your team.
                  </p>
                  <p className="font-mono text-sm text-primary">
                    CRAFT: UI/UX SYSTEMS · INTEGRATIONS · AUTOMATION
                  </p>
                </motion.div>
              </div>

              <div className="pinned-progress-track relative z-10 space-y-3 pt-4">
                <div className="h-3 w-full overflow-hidden rounded-full border-2 border-[var(--nb-ink)] bg-card">
                  <motion.div
                    style={{ scaleX: progressBarScale }}
                    className="h-full origin-left bg-primary"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-foreground/80">
                  <span>01 Software</span>
                  <span>02 Mobile</span>
                  <span>03 ERP</span>
                  <span>04 UI/UX</span>
                </div>
              </div>
            </div>

            <div
              className="pinned-visual-col col-span-7 flex justify-end"
              style={{ perspective: "1400px" }}
            >
              <motion.div
                style={{ rotateY: cardTiltY, rotateX: cardTiltX }}
                className="pinned-photo-stage relative h-[72vh] min-h-[520px] w-full overflow-hidden rounded-[2rem] border-2 border-[var(--nb-ink)] bg-card shadow-[8px_8px_0px_var(--nb-shadow)]"
              >
                <motion.div
                  style={{ opacity: act1Opacity, scale: act1Scale }}
                  className="pinned-photo-layer absolute inset-0"
                >
                  <Image
                    src="/images/engineering-studio.jpg"
                    alt="Software engineering pod collaborating on web and cloud applications"
                    fill
                    sizes="60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/15 to-transparent" />
                  <div className="pinned-photo-caption absolute right-8 bottom-8 left-8 flex items-end justify-between gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                        01 · Software Development
                      </span>
                      <p className="font-serif text-2xl font-semibold text-white xl:text-3xl">
                        Scalable Web Platforms &amp; APIs
                      </p>
                    </div>
                    <span className="rounded-full border-2 border-[#475569] bg-white/95 px-4 py-1.5 font-mono text-xs font-bold text-[#2d3748] shadow-[2.5px_2.5px_0px_#a9bad3]">
                      Full-Stack
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  style={{ opacity: act2Opacity, scale: act2Scale, clipPath: act2Clip }}
                  className="pinned-photo-layer absolute inset-0"
                >
                  <Image
                    src="/images/mobile-3d-mockup.jpg"
                    alt="Mobile application interfaces and cross-platform screens"
                    fill
                    sizes="60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/15 to-transparent" />
                  <div className="pinned-photo-caption absolute right-8 bottom-8 left-8 flex items-end justify-between gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                        02 · Mobile App Development
                      </span>
                      <p className="font-serif text-2xl font-semibold text-white xl:text-3xl">
                        Native iOS &amp; Android Experiences
                      </p>
                    </div>
                    <span className="rounded-full border-2 border-[#475569] bg-white/95 px-4 py-1.5 font-mono text-xs font-bold text-[#2d3748] shadow-[2.5px_2.5px_0px_#a9bad3]">
                      iOS &amp; Android
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  style={{ opacity: act3Opacity, scale: act3Scale, clipPath: act3Clip }}
                  className="pinned-photo-layer absolute inset-0"
                >
                  <Image
                    src="/images/erp-command-center.jpg"
                    alt="Enterprise ERP financial and operational command center"
                    fill
                    sizes="60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/15 to-transparent" />
                  <div className="pinned-photo-caption absolute right-8 bottom-8 left-8 flex items-end justify-between gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                        03 · ERP Development
                      </span>
                      <p className="font-serif text-2xl font-semibold text-white xl:text-3xl">
                        Unified Finance, Inventory &amp; Ops
                      </p>
                    </div>
                    <span className="rounded-full border-2 border-[#475569] bg-white/95 px-4 py-1.5 font-mono text-xs font-bold text-[#2d3748] shadow-[2.5px_2.5px_0px_#a9bad3]">
                      Custom ERP
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  style={{ opacity: act4Opacity, scale: act4Scale, clipPath: act4Clip }}
                  className="pinned-photo-layer absolute inset-0"
                >
                  <Image
                    src="/images/devops-3d-mockup.jpg"
                    alt="Custom software workflows and UI/UX design systems"
                    fill
                    sizes="60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/15 to-transparent" />
                  <div className="pinned-photo-caption absolute right-8 bottom-8 left-8 flex items-end justify-between gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                        04 · Custom Solutions &amp; UI/UX Design
                      </span>
                      <p className="font-serif text-2xl font-semibold text-white xl:text-3xl">
                        Bespoke Workflows &amp; Design Systems
                      </p>
                    </div>
                    <span className="rounded-full border-2 border-[#475569] bg-white/95 px-4 py-1.5 font-mono text-xs font-bold text-[#2d3748] shadow-[2.5px_2.5px_0px_#a9bad3]">
                      UI/UX &amp; APIs
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="pinned-mobile-fallback space-y-12 px-4 py-20 sm:px-6 lg:hidden">
        <div className="mobile-journey-header space-y-3">
          <Badge variant="outline" className="rounded-full px-3.5 py-1 font-mono text-xs">
            Interactive Delivery Flow
          </Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Custom UI/UX to Full-Scale ERP
          </h2>
        </div>

        <div className="mobile-journey-cards space-y-10">
          <div className="mobile-journey-item space-y-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-[var(--nb-ink)]">
              <Image
                src="/images/engineering-studio.jpg"
                alt="Software engineering pod collaborating on web platforms"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              01 · Software Development
            </p>
            <h3 className="font-serif text-2xl font-bold">
              Full-Stack Web Apps &amp; Cloud Platforms
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Fast SaaS platforms, customer portals, and secure backend APIs built with modern TypeScript stacks.
            </p>
          </div>

          <div className="mobile-journey-item space-y-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-[var(--nb-ink)]">
              <Image
                src="/images/mobile-3d-mockup.jpg"
                alt="Mobile application interfaces and cross-platform screens"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              02 · Mobile App Development
            </p>
            <h3 className="font-serif text-2xl font-bold">
              Native &amp; Cross-Platform Mobile Experiences
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              iOS and Android apps featuring offline sync, push workflows, and seamless business integrations.
            </p>
          </div>

          <div className="mobile-journey-item space-y-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-[var(--nb-ink)]">
              <Image
                src="/images/erp-command-center.jpg"
                alt="Enterprise ERP financial and operational command center"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              03 · ERP Development
            </p>
            <h3 className="font-serif text-2xl font-bold">
              Unified Finance, Inventory &amp; Operations
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Modular ERP systems built around your exact accounting, inventory, payroll, and approval rules.
            </p>
          </div>

          <div className="mobile-journey-item space-y-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-[var(--nb-ink)]">
              <Image
                src="/images/devops-3d-mockup.jpg"
                alt="Custom software workflows and UI/UX design systems"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              04 · Custom Solutions &amp; UI/UX Design
            </p>
            <h3 className="font-serif text-2xl font-bold">
              Bespoke Workflows &amp; Human-Centered Design
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Figma design systems, custom integrations, and workflow automation tailored for your team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
