"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltTechCard } from "@/components/ui/tilt-tech-card";

export function FellowshipCarousel() {
  const [autoplayPlugin] = React.useState(() =>
    Autoplay({
      delay: 5500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [autoplayPlugin]
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section
      id="global-fellowship"
      className="fellowship-carousel-section mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="carousel-header mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
      >
        <div className="carousel-title-group max-w-xl space-y-3">
          <Badge variant="secondary" className="rounded-full px-3.5 py-1 font-mono text-xs font-medium">
            Enterprise Deployments
          </Badge>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Trusted by Engineering &amp; Finance Leaders
          </h2>
        </div>

        <div className="carousel-controls flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            aria-label="Previous client case study"
            className="rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            aria-label="Next client case study"
            className="rounded-full"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      <div ref={emblaRef} className="embla-viewport overflow-hidden">
        <div className="embla-container -ml-6 flex py-2">
          <div className="embla-slide min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]">
            <TiltTechCard className="p-7">
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="story-quote-block space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="h-5 w-5 text-primary/75" />
                    <span className="rounded-full border-2 border-[var(--nb-ink)] bg-[var(--nb-surface)] px-3 py-1 font-mono text-[11px] font-bold text-foreground shadow-[2px_2px_0px_var(--nb-shadow)]">
                      -88% CLOSE TIME
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    “AetherCore cut our 14-subsidiary month-end financial close from 16 days down to 36 hours—while giving our board live cash-flow visibility across 9 currencies.”
                  </p>
                </div>
                <div className="story-author flex items-center gap-3 border-t-2 border-[var(--nb-ink)]/15 pt-4">
                  <Avatar className="h-10 w-10 border-2 border-[var(--nb-ink)] shadow-[2px_2px_0px_var(--nb-shadow)]">
                    <AvatarFallback className="bg-[var(--nb-accent-soft)] font-mono text-xs font-bold text-primary">
                      MK
                    </AvatarFallback>
                  </Avatar>
                  <div className="story-author-meta">
                    <p className="text-sm font-semibold text-foreground">Marcus Lindqvist</p>
                    <p className="text-xs text-muted-foreground">CFO · Nordik Freight Group</p>
                  </div>
                </div>
              </div>
            </TiltTechCard>
          </div>

          <div className="embla-slide min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]">
            <TiltTechCard className="p-7">
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="story-quote-block space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="h-5 w-5 text-primary/75" />
                    <span className="rounded-full border-2 border-[var(--nb-ink)] bg-[var(--nb-surface)] px-3 py-1 font-mono text-[11px] font-bold text-foreground shadow-[2px_2px_0px_var(--nb-shadow)]">
                      5-WEEK PORTAL SHIP
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    “Unlike legacy ERPs that lock data behind proprietary screens, AetherCore’s GraphQL and webhook architecture let our team ship a custom B2B portal in 5 weeks.”
                  </p>
                </div>
                <div className="story-author flex items-center gap-3 border-t-2 border-[var(--nb-ink)]/15 pt-4">
                  <Avatar className="h-10 w-10 border-2 border-[var(--nb-ink)] shadow-[2px_2px_0px_var(--nb-shadow)]">
                    <AvatarFallback className="bg-[var(--nb-accent-soft)] font-mono text-xs font-bold text-primary">
                      PR
                    </AvatarFallback>
                  </Avatar>
                  <div className="story-author-meta">
                    <p className="text-sm font-semibold text-foreground">Priya Ramanathan</p>
                    <p className="text-xs text-muted-foreground">CTO · Helix MedTech</p>
                  </div>
                </div>
              </div>
            </TiltTechCard>
          </div>

          <div className="embla-slide min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]">
            <TiltTechCard className="p-7">
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="story-quote-block space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="h-5 w-5 text-primary/75" />
                    <span className="rounded-full border-2 border-[var(--nb-ink)] bg-[var(--nb-surface)] px-3 py-1 font-mono text-[11px] font-bold text-foreground shadow-[2px_2px_0px_var(--nb-shadow)]">
                      -31% HOLDING COST
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    “Connecting 28 regional fulfillment hubs to AetherCore’s inventory engine eliminated stockouts during peak season and reduced excess carrying capital by 31%.”
                  </p>
                </div>
                <div className="story-author flex items-center gap-3 border-t-2 border-[var(--nb-ink)]/15 pt-4">
                  <Avatar className="h-10 w-10 border-2 border-[var(--nb-ink)] shadow-[2px_2px_0px_var(--nb-shadow)]">
                    <AvatarFallback className="bg-[var(--nb-accent-soft)] font-mono text-xs font-bold text-primary">
                      JO
                    </AvatarFallback>
                  </Avatar>
                  <div className="story-author-meta">
                    <p className="text-sm font-semibold text-foreground">James Okafor</p>
                    <p className="text-xs text-muted-foreground">COO · Apex Supply Networks</p>
                  </div>
                </div>
              </div>
            </TiltTechCard>
          </div>

          <div className="embla-slide min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]">
            <TiltTechCard className="p-7">
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="story-quote-block space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="h-5 w-5 text-primary/75" />
                    <span className="rounded-full border-2 border-[var(--nb-ink)] bg-[var(--nb-surface)] px-3 py-1 font-mono text-[11px] font-bold text-foreground shadow-[2px_2px_0px_var(--nb-shadow)]">
                      ZERO CUTOVER LOSS
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    “Migration from our 12-year-old on-premise ERP happened with zero lost orders. Their engineering pod ran parallel verification until every ledger balanced to the cent.”
                  </p>
                </div>
                <div className="story-author flex items-center gap-3 border-t-2 border-[var(--nb-ink)]/15 pt-4">
                  <Avatar className="h-10 w-10 border-2 border-[var(--nb-ink)] shadow-[2px_2px_0px_var(--nb-shadow)]">
                    <AvatarFallback className="bg-[var(--nb-accent-soft)] font-mono text-xs font-bold text-primary">
                      SC
                    </AvatarFallback>
                  </Avatar>
                  <div className="story-author-meta">
                    <p className="text-sm font-semibold text-foreground">Sofia Chen</p>
                    <p className="text-xs text-muted-foreground">VP Engineering · Veridian Mfg</p>
                  </div>
                </div>
              </div>
            </TiltTechCard>
          </div>
        </div>
      </div>

      <div className="carousel-dots mt-8 flex items-center justify-center gap-2" aria-label="Slide indicators">
        <button
          type="button"
          onClick={() => emblaApi?.scrollTo(0)}
          aria-label="Go to slide 1"
          className={`h-2 rounded-full transition-all ${selectedIndex === 0 ? "w-7 bg-primary" : "w-2 bg-border"}`}
        />
        <button
          type="button"
          onClick={() => emblaApi?.scrollTo(1)}
          aria-label="Go to slide 2"
          className={`h-2 rounded-full transition-all ${selectedIndex === 1 ? "w-7 bg-primary" : "w-2 bg-border"}`}
        />
        <button
          type="button"
          onClick={() => emblaApi?.scrollTo(2)}
          aria-label="Go to slide 3"
          className={`h-2 rounded-full transition-all ${selectedIndex === 2 ? "w-7 bg-primary" : "w-2 bg-border"}`}
        />
        <button
          type="button"
          onClick={() => emblaApi?.scrollTo(3)}
          aria-label="Go to slide 4"
          className={`h-2 rounded-full transition-all ${selectedIndex === 3 ? "w-7 bg-primary" : "w-2 bg-border"}`}
        />
      </div>
    </section>
  );
}
