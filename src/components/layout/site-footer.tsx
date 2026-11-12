import { Cpu } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="site-footer border-t-2 border-[var(--nb-ink)] bg-[var(--nb-surface)]/75"
    >
      <div className="footer-container mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="footer-grid grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="footer-brand-column space-y-3">
            <div className="footer-brand-row flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[var(--nb-ink)] bg-[var(--nb-accent-soft)] text-primary shadow-[2.5px_2.5px_0px_var(--nb-shadow)]">
                <Cpu className="h-4 w-4" />
              </span>
              <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                AetherCore Systems
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Enterprise software engineering and intelligent cloud ERP architecture—built for multi-entity finance, global supply chains, and mission-critical scale.
            </p>
          </div>

          <div className="footer-gatherings-column space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-foreground">
              Core Services
            </h3>
            <ul className="footer-schedule-list space-y-2 text-sm text-muted-foreground">
              <li>Software Development</li>
              <li>Mobile App Development</li>
              <li>ERP Development</li>
              <li>Custom Solutions &amp; UI/UX Design</li>
            </ul>
          </div>

          <div className="footer-links-column space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-foreground">
              Navigation
            </h3>
            <ul className="footer-nav-list space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#hero" className="transition-colors hover:text-foreground">
                  Overview
                </a>
              </li>
              <li>
                <a href="#engineering-showcase" className="transition-colors hover:text-foreground">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#pinned-journey" className="transition-colors hover:text-foreground">
                  Interactive Showcase
                </a>
              </li>
              <li>
                <a href="#solutions" className="transition-colors hover:text-foreground">
                  Service Capabilities
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 h-0.5 bg-[var(--nb-ink)]/25" />

        <div className="footer-bottom flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © 2026 AetherCore Systems Inc. All rights reserved worldwide.
          </p>
          <p className="font-mono text-xs text-foreground/80">
            STATUS: 99.99% GLOBAL SLA · MULTI-REGION ACTIVE
          </p>
        </div>
      </div>
    </footer>
  );
}
