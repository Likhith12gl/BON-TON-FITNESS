import React from "react";
import { GALLERY } from "../data/brand";

/**
 * Infinite marquee of real gym / member photos from the brand.
 * Two rows drifting in opposite directions.
 */
export default function GalleryMarquee() {
  const row1 = [...GALLERY, ...GALLERY];
  const row2 = [...GALLERY.slice().reverse(), ...GALLERY.slice().reverse()];

  return (
    <section
      className="relative py-32 overflow-hidden"
      data-testid="section-gallery"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mb-12">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="font-mono-ui text-xs tracking-[0.3em] uppercase text-neon">
              /07 — Gallery
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl lg:text-[88px] leading-[0.9] uppercase">
              Life on the <span className="text-neon">floor</span>.
            </h2>
          </div>
          <p className="max-w-sm text-white/60 text-sm">
            A peek at the moments, members, and milestones from across all five
            Bon Ton Fitness branches.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex gap-6 marquee-track" style={{ animationDuration: "65s" }}>
          {row1.map((src, i) => (
            <div
              key={`r1-${i}`}
              className="shrink-0 w-[260px] h-[340px] rounded-xl overflow-hidden border border-white/5"
              data-testid={`gallery-r1-${i}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div
          className="flex gap-6 marquee-track"
          style={{ animationDuration: "80s", animationDirection: "reverse" }}
        >
          {row2.map((src, i) => (
            <div
              key={`r2-${i}`}
              className="shrink-0 w-[260px] h-[340px] rounded-xl overflow-hidden border border-white/5"
              data-testid={`gallery-r2-${i}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
