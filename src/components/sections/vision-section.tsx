"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Code2, Database, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TiltTechCard } from "@/components/ui/tilt-tech-card";

const TechClusterCanvas = dynamic(
  () => import("@/components/three/tech-cluster-canvas").then((mod) => mod.TechClusterCanvas),
  { ssr: false }
);

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function VisionSection() {
  const containerRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".vision-header-item", {
        y: 34,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".vision-header",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".tech-cluster-wrapper", {
        y: 40,
        scale: 0.96,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-cluster-wrapper",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".vision-svg-beam", {
        strokeDashoffset: 900,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pillars-grid",
          start: "top 82%",
          end: "bottom 55%",
          scrub: 0.9,
        },
      });

      gsap.from(".pillar-card-shell", {
        y: 56,
        rotateX: 16,
        scale: 0.94,
        opacity: 0,
        duration: 0.95,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pillars-grid",
          start: "top 84%",
          once: true,
        },
      });

      gsap.from(".fellowship-stat-item", {
        y: 26,
        opacity: 0,
        duration: 0.75,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fellowship-stats-bar",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".stat-count-countries", {
        textContent: 1,
        duration: 1.4,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: ".fellowship-stats-bar",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".stat-count-velocity", {
        textContent: 1,
        duration: 1.1,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: ".fellowship-stats-bar",
          start: "top 88%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="calling"
      ref={containerRef}
      className="vision-section relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="vision-header max-w-2xl space-y-4">
        <div className="vision-header-item">
          <Badge variant="secondary" className="rounded-full px-3.5 py-1 font-mono text-xs font-medium">
            System Architecture &amp; 3D Mesh
          </Badge>
        </div>

        <h2 className="vision-header-item font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Engineered for Speed. Audited for Scale.
        </h2>

        <p className="vision-header-item text-base leading-relaxed text-muted-foreground sm:text-lg">
          Explore our live 3D distributed architecture—unifying immutable financial data, API-first extensibility, and zero-trust cloud resilience.
        </p>
      </div>

      <div className="tech-cluster-wrapper my-12">
        <TechClusterCanvas />
      </div>

      <div className="pillars-stage relative" style={{ perspective: "1100px" }}>
        <svg
          viewBox="0 0 1100 180"
          className="pointer-events-none absolute -top-8 left-0 hidden h-44 w-full text-primary/25 md:block"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 40 120 Q 290 10, 550 90 T 1060 60"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="900"
            strokeDashoffset="0"
            className="vision-svg-beam"
          />
        </svg>

        <div className="pillars-grid relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="pillar-card-shell">
            <TiltTechCard className="p-7">
              <div className="pillar-card-top mb-6 flex items-center justify-between">
                <div className="pillar-icon-wrap flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary shadow-[3px_3px_0px_var(--nb-shadow)]">
                  <Database className="h-5 w-5" />
                </div>
                <span className="rounded-full border-2 border-[var(--nb-ink)] bg-[var(--nb-surface)] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-foreground">
                  01 // DATA_FABRIC
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Unified Data Fabric
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Event-sourced PostgreSQL and streaming analytics unify finance, warehouse inventory, CRM, and HR records with sub-50ms query performance.
              </p>

              <div className="pillar-card-footer mt-6 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-foreground/80">
                <span>&lt; 50ms Query Latency</span>
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </TiltTechCard>
          </div>

          <div className="pillar-card-shell">
            <TiltTechCard className="p-7">
              <div className="pillar-card-top mb-6 flex items-center justify-between">
                <div className="pillar-icon-wrap flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary shadow-[3px_3px_0px_var(--nb-shadow)]">
                  <Code2 className="h-5 w-5" />
                </div>
                <span className="rounded-full border-2 border-[var(--nb-ink)] bg-[var(--nb-surface)] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-foreground">
                  02 // API_GATEWAY
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Composable API Core
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Typed GraphQL, REST, and webhook SDKs let your developers integrate payment gateways, EDI partners, and custom portals in days.
              </p>

              <div className="pillar-card-footer mt-6 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-foreground/80">
                <span>GraphQL + Kafka Streams</span>
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </TiltTechCard>
          </div>

          <div className="pillar-card-shell">
            <TiltTechCard className="p-7">
              <div className="pillar-card-top mb-6 flex items-center justify-between">
                <div className="pillar-icon-wrap flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary shadow-[3px_3px_0px_var(--nb-shadow)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="rounded-full border-2 border-[var(--nb-ink)] bg-[var(--nb-surface)] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-foreground">
                  03 // ZERO_TRUST
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground">
                Enterprise Governance
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Fine-grained RBAC, SSO/SAML, cryptographic audit logs, and automated regional tax engines built for global compliance out of the box.
              </p>

              <div className="pillar-card-footer mt-6 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-foreground/80">
                <span>SOC 2 Type II + ISO 27001</span>
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </TiltTechCard>
          </div>
        </div>
      </div>

      <div className="fellowship-stats-bar mt-14 grid grid-cols-1 gap-6 rounded-2xl border-2 border-[var(--nb-ink)] bg-[var(--nb-surface)] p-8 shadow-[6px_6px_0px_var(--nb-shadow)] sm:grid-cols-3">
        <div className="fellowship-stat-item space-y-1">
          <p className="font-serif text-4xl font-bold text-primary">
            <span className="stat-count-velocity">10</span>
            <span>x Faster</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Month-end financial close and multi-entity intercompany reconciliation.
          </p>
        </div>

        <div className="fellowship-stat-item space-y-1">
          <p className="font-serif text-4xl font-bold text-primary">
            <span className="stat-count-countries">42</span>
            <span>+ Countries</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Supported with localized tax rules, e-invoicing, and multi-currency ledgers.
          </p>
        </div>

        <div className="fellowship-stat-item space-y-1">
          <p className="font-serif text-4xl font-bold text-primary">99.99% SLA</p>
          <p className="text-sm text-muted-foreground">
            Multi-region active-active failover with zero-downtime schema deployments.
          </p>
        </div>
      </div>
    </section>
  );
}
