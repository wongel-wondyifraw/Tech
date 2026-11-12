"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Palette,
  Smartphone,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedMockupStage } from "@/components/ui/animated-mockup-stage";
import { TiltTechCard } from "@/components/ui/tilt-tech-card";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function TechSolutionsShowcase() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".showcase-split-row").forEach((row) => {
        gsap.from(row, {
          y: 44,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            once: true,
          },
        });
      });

      gsap.from(".core-service-tile", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".core-services-strip",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="engineering-showcase"
      ref={sectionRef}
      className="engineering-showcase-section mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="showcase-header mb-16 max-w-2xl space-y-4">
        <Badge variant="outline" className="rounded-full px-3.5 py-1 font-mono text-xs">
          Our Services
        </Badge>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Focused Software, Mobile, ERP &amp; UI/UX Services
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          We design and engineer reliable digital products—combining custom software development, native mobile apps, enterprise ERP platforms, custom integrations, and clean UI/UX design.
        </p>
      </div>

      <div className="showcase-rows-stack space-y-20">
        <div className="showcase-split-row grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="showcase-3d-col lg:col-span-6">
            <AnimatedMockupStage
              src="/images/devops-3d-mockup.jpg"
              alt="Bright 3D product render representing custom software engineering and cloud systems"
              badgeText="SOFTWARE & CUSTOM SOLUTIONS"
              metricText="Web · APIs · Cloud"
            />
          </div>

          <div className="showcase-service-col lg:col-span-6">
            <TiltTechCard className="p-7 sm:p-8">
              <div className="service-card-header mb-5 flex items-center gap-3.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary shadow-[3px_3px_0px_var(--nb-shadow)]">
                  <Code2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                    01 // Software Development &amp; Custom Solutions
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Scalable Web Platforms &amp; Bespoke Systems
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                End-to-end engineering for SaaS platforms, customer portals, workflow automation tools, and custom API integrations tailored around your exact business rules.
              </p>

              <ul className="service-feature-list mt-6 space-y-3 text-sm text-foreground/90">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>Full-stack web applications engineered with Next.js, TypeScript &amp; NestJS</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>Custom system integrations, payment gateways &amp; automated workflows</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>Cloud architecture, CI/CD pipelines &amp; long-term maintainability</span>
                </li>
              </ul>

              <div className="service-card-footer mt-7 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-foreground/85">
                <span>Next.js · Node.js · PostgreSQL · REST / GraphQL</span>
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </TiltTechCard>
          </div>
        </div>

        <div className="showcase-split-row grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="showcase-service-col order-2 lg:order-1 lg:col-span-6">
            <TiltTechCard className="p-7 sm:p-8">
              <div className="service-card-header mb-5 flex items-center gap-3.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary shadow-[3px_3px_0px_var(--nb-shadow)]">
                  <Smartphone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                    02 // Mobile App Development &amp; UI/UX Design
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    iOS, Android Apps &amp; Human-Centered Design
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Crisp, intuitive mobile apps and digital product interfaces designed from user flows and Figma prototypes through App Store and Google Play launch.
              </p>

              <ul className="service-feature-list mt-6 space-y-3 text-sm text-foreground/90">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>Cross-platform &amp; native iOS / Android development with offline sync</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>UI/UX research, wireframing, interactive prototypes &amp; design systems</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>Real-time push alerts, biometric login &amp; field operations support</span>
                </li>
              </ul>

              <div className="service-card-footer mt-7 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-foreground/85">
                <span>React Native · Flutter · Swift · Figma UI/UX</span>
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </TiltTechCard>
          </div>

          <div className="showcase-3d-col order-1 lg:order-2 lg:col-span-6">
            <AnimatedMockupStage
              src="/images/mobile-3d-mockup.jpg"
              alt="Bright 3D product render of mobile app interfaces and UI/UX widgets"
              badgeText="MOBILE APPS & UI/UX"
              metricText="iOS · Android · Figma"
            />
          </div>
        </div>

        <div className="showcase-split-row grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="showcase-3d-col lg:col-span-6">
            <AnimatedMockupStage
              src="/images/storage-3d-mockup.jpg"
              alt="Bright 3D isometric render of modular ERP data storage and enterprise modules"
              badgeText="ERP DEVELOPMENT"
              metricText="Finance · Ops · Storage"
            />
          </div>

          <div className="showcase-service-col lg:col-span-6">
            <TiltTechCard className="p-7 sm:p-8">
              <div className="service-card-header mb-5 flex items-center gap-3.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary shadow-[3px_3px_0px_var(--nb-shadow)]">
                  <Database className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                    03 // ERP Development &amp; Data Platforms
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Unified Finance, Inventory &amp; Operations ERP
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Replace disconnected spreadsheets and rigid legacy software with custom ERP modules built around your accounting, procurement, HR, and warehouse teams.
              </p>

              <ul className="service-feature-list mt-6 space-y-3 text-sm text-foreground/90">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>Multi-entity general ledger, invoicing &amp; automated reconciliations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>Real-time warehouse inventory, procurement &amp; approval pipelines</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <span>Role-based security, audit logs &amp; encrypted multi-region backups</span>
                </li>
              </ul>

              <div className="service-card-footer mt-7 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-foreground/85">
                <span>Custom ERP · Multi-Currency · Audit Ready</span>
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </TiltTechCard>
          </div>
        </div>
      </div>

      <div className="core-services-strip mt-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Core Disciplines at a Glance
          </h3>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            5 Specialized Practices
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="core-service-tile rounded-2xl border-2 border-[var(--nb-ink)] bg-card p-5 shadow-[4px_4px_0px_var(--nb-shadow)]">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary">
              <Code2 className="h-4 w-4" />
            </span>
            <h4 className="font-serif text-lg font-bold text-foreground">
              Software Development
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Modern web platforms, APIs, and scalable cloud backends.
            </p>
          </div>

          <div className="core-service-tile rounded-2xl border-2 border-[var(--nb-ink)] bg-card p-5 shadow-[4px_4px_0px_var(--nb-shadow)]">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary">
              <Smartphone className="h-4 w-4" />
            </span>
            <h4 className="font-serif text-lg font-bold text-foreground">
              Mobile App Development
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Fast iOS and Android apps built for customers and field teams.
            </p>
          </div>

          <div className="core-service-tile rounded-2xl border-2 border-[var(--nb-ink)] bg-card p-5 shadow-[4px_4px_0px_var(--nb-shadow)]">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary">
              <Layers className="h-4 w-4" />
            </span>
            <h4 className="font-serif text-lg font-bold text-foreground">
              ERP Development
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Integrated finance, inventory, payroll, and supply operations.
            </p>
          </div>

          <div className="core-service-tile rounded-2xl border-2 border-[var(--nb-ink)] bg-card p-5 shadow-[4px_4px_0px_var(--nb-shadow)]">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary">
              <Wrench className="h-4 w-4" />
            </span>
            <h4 className="font-serif text-lg font-bold text-foreground">
              Custom Solutions
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Tailored automations, legacy migrations, and third-party sync.
            </p>
          </div>

          <div className="core-service-tile rounded-2xl border-2 border-[var(--nb-ink)] bg-card p-5 shadow-[4px_4px_0px_var(--nb-shadow)]">
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary">
              <Palette className="h-4 w-4" />
            </span>
            <h4 className="font-serif text-lg font-bold text-foreground">
              UI/UX Design
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              User flows, interactive Figma prototypes, and design systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
