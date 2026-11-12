"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Layers, Palette, Smartphone, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TiltTechCard } from "@/components/ui/tilt-tech-card";
import { ConnectDialog } from "@/components/sections/connect-dialog";

export function GatheringsSection() {
  return (
    <section
      id="solutions"
      className="gatherings-section border-t-2 border-[var(--nb-ink)] bg-[var(--nb-surface)]/75 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="gatherings-container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="gatherings-header mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="gatherings-heading-block max-w-xl space-y-3">
            <Badge variant="outline" className="rounded-full px-3.5 py-1 font-mono text-xs">
              Service Capabilities
            </Badge>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Tailored Engineering Across Every Layer
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore how we deliver custom software, native mobile apps, ERP modules, and UI/UX systems built for your exact operational goals.
          </p>
        </motion.div>

        <Tabs defaultValue="software" className="gatherings-tabs w-full space-y-8">
          <TabsList className="gatherings-tabs-list h-auto flex-wrap gap-1.5 rounded-full border-2 border-[var(--nb-ink)] bg-card p-1.5 shadow-[4px_4px_0px_var(--nb-shadow)]">
            <TabsTrigger value="software" className="rounded-full px-5 py-2 text-sm font-semibold">
              Software &amp; Custom
            </TabsTrigger>
            <TabsTrigger value="mobile-ux" className="rounded-full px-5 py-2 text-sm font-semibold">
              Mobile &amp; UI/UX Design
            </TabsTrigger>
            <TabsTrigger value="erp" className="rounded-full px-5 py-2 text-sm font-semibold">
              ERP Development
            </TabsTrigger>
          </TabsList>

          <TabsContent value="software" className="software-tab-panel">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="software-cards-grid grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              <TiltTechCard>
                <div className="solution-media-header relative aspect-[16/9] w-full overflow-hidden border-b-2 border-[var(--nb-ink)]">
                  <Image
                    src="/images/engineering-studio.jpg"
                    alt="Full-stack web and enterprise software engineering"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border-2 border-[#475569] bg-white/95 px-3 py-1 font-mono text-[11px] font-bold text-[#2d3748] shadow-[2.5px_2.5px_0px_#a9bad3]">
                    <Code2 className="h-3 w-3 text-[#2f6fed]" />
                    <span>SOFTWARE DEV</span>
                  </span>
                </div>

                <div className="solution-card-body flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Web Apps · Cloud APIs
                      </span>
                      <Badge variant="secondary" className="rounded-full font-mono text-[10px]">
                        Full-Stack
                      </Badge>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      Software Development
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Fast SaaS platforms, customer portals, and secure backend architectures engineered with modern TypeScript, Next.js, and NestJS.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-primary">
                    <span>Next.js · NestJS · PostgreSQL</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </TiltTechCard>

              <TiltTechCard>
                <div className="solution-media-header relative aspect-[16/9] w-full overflow-hidden border-b-2 border-[var(--nb-ink)]">
                  <Image
                    src="/images/devops-3d-mockup.jpg"
                    alt="Custom software integrations and workflow automation"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border-2 border-[#475569] bg-white/95 px-3 py-1 font-mono text-[11px] font-bold text-[#2d3748] shadow-[2.5px_2.5px_0px_#a9bad3]">
                    <Wrench className="h-3 w-3 text-[#2f6fed]" />
                    <span>CUSTOM SOLUTIONS</span>
                  </span>
                </div>

                <div className="solution-card-body flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Bespoke Systems · Sync
                      </span>
                      <Badge variant="secondary" className="rounded-full font-mono text-[10px]">
                        Tailored
                      </Badge>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      Custom Solutions &amp; Automation
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Custom middleware, third-party payment and CRM connectors, internal dashboards, and zero-loss legacy system modernization.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-primary">
                    <span>APIs · Webhooks · Automation</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </TiltTechCard>
            </motion.div>
          </TabsContent>

          <TabsContent value="mobile-ux" className="mobile-ux-tab-panel">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mobile-ux-cards-grid grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              <TiltTechCard>
                <div className="solution-media-header relative aspect-[16/9] w-full overflow-hidden border-b-2 border-[var(--nb-ink)]">
                  <Image
                    src="/images/mobile-3d-mockup.jpg"
                    alt="Mobile app development for iOS and Android"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border-2 border-[#475569] bg-white/95 px-3 py-1 font-mono text-[11px] font-bold text-[#2d3748] shadow-[2.5px_2.5px_0px_#a9bad3]">
                    <Smartphone className="h-3 w-3 text-[#2f6fed]" />
                    <span>MOBILE APPS</span>
                  </span>
                </div>

                <div className="solution-card-body flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        iOS · Android · Offline Sync
                      </span>
                      <Badge variant="secondary" className="rounded-full font-mono text-[10px]">
                        Mobile
                      </Badge>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      Mobile App Development
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Consumer and enterprise mobile apps using React Native, Flutter, Swift, and Kotlin—complete with real-time sync and app-store launch.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-primary">
                    <span>React Native · Flutter · Swift</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </TiltTechCard>

              <TiltTechCard>
                <div className="solution-media-header relative aspect-[16/9] w-full overflow-hidden border-b-2 border-[var(--nb-ink)]">
                  <Image
                    src="/images/supply-chain-analytics.jpg"
                    alt="UI UX product design and interactive prototyping"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border-2 border-[#475569] bg-white/95 px-3 py-1 font-mono text-[11px] font-bold text-[#2d3748] shadow-[2.5px_2.5px_0px_#a9bad3]">
                    <Palette className="h-3 w-3 text-[#2f6fed]" />
                    <span>UI/UX DESIGN</span>
                  </span>
                </div>

                <div className="solution-card-body flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Figma · Design Systems
                      </span>
                      <Badge variant="secondary" className="rounded-full font-mono text-[10px]">
                        Product UX
                      </Badge>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      UI/UX Design &amp; Prototyping
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      User journey mapping, interactive prototypes, accessible component libraries, and cohesive visual systems for web and mobile products.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-primary">
                    <span>Wireframes · Figma · UX Systems</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </TiltTechCard>
            </motion.div>
          </TabsContent>

          <TabsContent value="erp" className="erp-tab-panel">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="erp-cards-grid grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              <TiltTechCard>
                <div className="solution-media-header relative aspect-[16/9] w-full overflow-hidden border-b-2 border-[var(--nb-ink)]">
                  <Image
                    src="/images/erp-command-center.jpg"
                    alt="Enterprise ERP financial and operational system"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border-2 border-[#475569] bg-white/95 px-3 py-1 font-mono text-[11px] font-bold text-[#2d3748] shadow-[2.5px_2.5px_0px_#a9bad3]">
                    <Layers className="h-3 w-3 text-[#2f6fed]" />
                    <span>ERP CORE</span>
                  </span>
                </div>

                <div className="solution-card-body flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Finance · Inventory · HR
                      </span>
                      <Badge variant="secondary" className="rounded-full font-mono text-[10px]">
                        Enterprise
                      </Badge>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      Custom ERP Development
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      End-to-end ERP platforms tailored around your general ledger, purchasing, stock management, multi-branch roles, and reporting.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-primary">
                    <span>Accounting · WMS · Approvals</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </TiltTechCard>

              <TiltTechCard>
                <div className="solution-media-header relative aspect-[16/9] w-full overflow-hidden border-b-2 border-[var(--nb-ink)]">
                  <Image
                    src="/images/storage-3d-mockup.jpg"
                    alt="Secure cloud ERP storage and database infrastructure"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border-2 border-[#475569] bg-white/95 px-3 py-1 font-mono text-[11px] font-bold text-[#2d3748] shadow-[2.5px_2.5px_0px_#a9bad3]">
                    <Database className="h-3 w-3 text-[#2f6fed]" />
                    <span>DATA &amp; STORAGE</span>
                  </span>
                </div>

                <div className="solution-card-body flex flex-1 flex-col justify-between p-6">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        Cloud · Security · Analytics
                      </span>
                      <Badge variant="secondary" className="rounded-full font-mono text-[10px]">
                        Infrastructure
                      </Badge>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">
                      Cloud Storage &amp; Data Migration
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Encrypted multi-region storage, automated backups, and clean data migration from legacy accounting or ERP tools.
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t-2 border-[var(--nb-ink)]/15 pt-4 font-mono text-xs font-semibold text-primary">
                    <span>AWS · PostgreSQL · ETL Sync</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </TiltTechCard>
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="solutions-cta-banner mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border-2 border-[var(--nb-ink)] bg-card p-8 shadow-[6px_6px_0px_var(--nb-shadow)] sm:flex-row sm:items-center">
          <div className="space-y-1.5">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Ready to Build
            </p>
            <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Have a software, mobile, ERP, or UI/UX project in mind?
            </h3>
            <p className="text-sm text-muted-foreground">
              Share your scope and get an actionable architecture &amp; delivery roadmap.
            </p>
          </div>
          <div className="shrink-0">
            <ConnectDialog triggerLabel="Start a Project" variant="default" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
