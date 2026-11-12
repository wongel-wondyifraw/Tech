"use client";

import * as React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ParallaxRevealImage({
  src,
  alt,
  caption,
  aspectClassName = "aspect-[4/3]",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  aspectClassName?: string;
  priority?: boolean;
}) {
  const frameRef = React.useRef<HTMLDivElement>(null);
  const mediaRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!frameRef.current || !mediaRef.current) return;

      gsap.fromTo(
        frameRef.current,
        {
          clipPath: "inset(14% 4% 14% 4% round 1.25rem)",
          opacity: 0.4,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 1.25rem)",
          opacity: 1,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top 86%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        mediaRef.current,
        { scale: 1.12, yPercent: -5 },
        {
          scale: 1.0,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        }
      );
    },
    { scope: frameRef }
  );

  return (
    <figure className="parallax-reveal-figure group space-y-3">
      <div
        ref={frameRef}
        className={`parallax-reveal-frame relative w-full overflow-hidden rounded-2xl border-2 border-[var(--nb-ink)] bg-secondary shadow-[6px_6px_0px_var(--nb-shadow)] ${aspectClassName}`}
      >
        <div
          ref={mediaRef}
          className="parallax-reveal-media relative h-full w-full will-change-transform"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      {caption ? (
        <figcaption className="parallax-reveal-caption inline-block rounded-lg border-2 border-[var(--nb-ink)] bg-[var(--nb-surface)] px-3 py-1 font-mono text-xs font-semibold tracking-wide text-foreground shadow-[2.5px_2.5px_0px_var(--nb-shadow)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

