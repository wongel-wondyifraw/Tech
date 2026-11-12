"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ParallaxRevealImage } from "@/components/ui/parallax-reveal-image";
import { ConnectDialog } from "@/components/sections/connect-dialog";

export function FaqSection() {
  return (
    <section
      id="new-here"
      className="faq-section border-t-2 border-[var(--nb-ink)] bg-[var(--nb-surface)]/75 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="faq-container mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="faq-intro-column space-y-5 lg:col-span-5"
        >
          <Badge variant="outline" className="rounded-full border-primary/35 px-3.5 py-1 font-mono text-xs">
            Implementation &amp; Security
          </Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Technical &amp; Rollout Questions
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Clear answers on deployment timelines, legacy ERP data migration, API extensibility, and enterprise compliance standards.
          </p>
          <div className="faq-cta-box pt-2">
            <ConnectDialog triggerLabel="Request Architecture Review" variant="outline" size="lg" />
          </div>
          <div className="faq-visual-card pt-4">
            <ParallaxRevealImage
              src="/images/supply-chain-analytics.jpg"
              alt="Operations leader inspecting real-time ERP analytics in automated facility"
              caption="Dedicated solutions engineers support every migration end-to-end"
              aspectClassName="aspect-[16/10]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="faq-accordion-column lg:col-span-7"
        >
          <Accordion className="faq-accordion rounded-2xl border-2 border-[var(--nb-ink)] bg-card px-6 py-2 shadow-[6px_6px_0px_var(--nb-shadow)]">
            <AccordionItem value="item-1" className="faq-item border-b-2 border-[var(--nb-ink)]/15 py-1">
              <AccordionTrigger className="font-serif text-xl font-semibold hover:no-underline">
                How long does a typical AetherCore ERP rollout take?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Mid-market financial and inventory deployments typically go live in 6 to 10 weeks using our automated schema importers and shadow-ledger verification. Multi-country enterprise rollouts follow phased entity sprints with zero operational downtime.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="faq-item border-b-2 border-[var(--nb-ink)]/15 py-1">
              <AccordionTrigger className="font-serif text-xl font-semibold hover:no-underline">
                Can we host AetherCore inside our own AWS, Azure, or GCP VPC?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Yes. Alongside our managed ISO 27001 / SOC 2 Type II cloud, we provide Terraform and Kubernetes deployment blueprints for single-tenant private VPC hosting with full data residency control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="faq-item border-b-2 border-[var(--nb-ink)]/15 py-1">
              <AccordionTrigger className="font-serif text-xl font-semibold hover:no-underline">
                How does custom software development integrate with the ERP?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Every ERP entity exposes typed REST, GraphQL, and Kafka event streams. Our engineering team can build bespoke B2B portals, warehouse apps, or AI forecasting pipelines—or your internal engineers can build directly on our SDK.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="faq-item border-b-0 py-1">
              <AccordionTrigger className="font-serif text-xl font-semibold hover:no-underline">
                How do you migrate historical data from SAP, Oracle, or QuickBooks?
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                Our ETL migration engine extracts historical charts of accounts, open invoices, vendor masters, and inventory lots, validates referential integrity, and executes reconciled dry runs before cutover.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
