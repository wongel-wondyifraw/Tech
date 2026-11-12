"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Badge } from "@/components/ui/badge";
import { ParallaxRevealImage } from "@/components/ui/parallax-reveal-image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SanctuaryStorySection() {
  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".story-intro-item", {
        y: 30,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-intro-header",
          start: "top 82%",
          once: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".story-chapter-copy").forEach((el, index) => {
        gsap.from(el, {
          x: index % 2 === 0 ? 44 : -44,
          y: 26,
          opacity: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="sanctuary-story"
      ref={sectionRef}
      className="sanctuary-story-section mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="story-intro-header mb-16 max-w-2xl space-y-4">
        <div className="story-intro-item">
          <Badge variant="outline" className="rounded-full border-primary/35 px-3.5 py-1 font-mono text-xs">
            Platform Engineering
          </Badge>
        </div>
        <h2 className="story-intro-item font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Replace Fragmented Legacy Tools With One Intelligent Core
        </h2>
        <p className="story-intro-item text-base leading-relaxed text-muted-foreground sm:text-lg">
          Scroll through how AetherCore connects executive finance, engineering velocity, and resilient multi-region cloud infrastructure into a single source of truth.
        </p>
      </div>

      <div className="story-chapters-stack space-y-24">
        <div className="story-chapter-row grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="story-chapter-media lg:col-span-7">
            <ParallaxRevealImage
              src="/images/erp-command-center.jpg"
              alt="Real-time enterprise ERP financial and operational command center"
              caption="Executive Telemetry — Live P&L, cash flow, and entity consolidation"
              aspectClassName="aspect-[16/10]"
              priority
            />
          </div>

          <div className="story-chapter-copy space-y-4 lg:col-span-5 lg:pl-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              01 · Unified Command
            </span>
            <h3 className="font-serif text-3xl font-bold tracking-tight text-foreground">
              Real-Time Visibility Across Every Subsidiary
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Eliminate spreadsheet reconciliation delays. Every journal entry, purchase order, and inventory movement streams directly into live multi-currency executive dashboards.
            </p>
          </div>
        </div>

        <div className="story-chapter-row grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="story-chapter-copy order-2 space-y-4 lg:order-1 lg:col-span-5 lg:pr-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              02 · Bespoke Software
            </span>
            <h3 className="font-serif text-3xl font-bold tracking-tight text-foreground">
              Custom Engineering Tailored to Your Workflows
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our senior software architects build composable web portals, customer apps, and automated ERP connectors around your exact operational rules—never forcing rigid templates.
            </p>
          </div>

          <div className="story-chapter-media order-1 lg:order-2 lg:col-span-7">
            <ParallaxRevealImage
              src="/images/engineering-studio.jpg"
              alt="Software engineering and ERP architecture team collaborating in modern studio"
              caption="Dedicated Delivery Pods — TypeScript, NestJS, Next.js & GraphQL"
              aspectClassName="aspect-[16/10]"
            />
          </div>
        </div>

        <div className="story-chapter-row grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="story-chapter-media lg:col-span-7">
            <ParallaxRevealImage
              src="/images/cloud-infrastructure.jpg"
              alt="Anodized aluminum enterprise cloud infrastructure with fiber optic telemetry"
              caption="Cloud Native Backbone — Encrypted, audited, and geo-replicated"
              aspectClassName="aspect-[16/10]"
            />
          </div>

          <div className="story-chapter-copy space-y-4 lg:col-span-5 lg:pl-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              03 · Sovereign Cloud
            </span>
            <h3 className="font-serif text-3xl font-bold tracking-tight text-foreground">
              Zero-Downtime Scale &amp; Compliance Built In
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Deploy in our managed multi-region cloud or your private VPC with role-based access control, immutable audit logs, and automated regional tax &amp; IFRS compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
