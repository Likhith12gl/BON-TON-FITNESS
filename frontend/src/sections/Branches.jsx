import React from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import { BRANCHES } from "../data/brand";

export default function Branches() {
  return (
    <section
      id="branches"
      className="relative min-h-screen w-full overflow-hidden py-32"
      data-testid="section-branches"
    >
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-8">
            <span className="font-mono-ui text-xs tracking-[0.3em] uppercase text-neon">
              /04 — Branches
            </span>
            <h2
              className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[104px] leading-[0.9] uppercase text-white"
              data-testid="branches-heading"
            >
              Five floors.
              <br />
              One <span className="text-neon">Bangalore</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-4">
            <p className="text-white/60 text-base leading-relaxed">
              From our HMT Layout flagship to our west-city outposts — you&apos;re
              never more than a ride away from a Bon Ton floor. Premium members
              train across all five branches.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" data-testid="branches-grid">
          {BRANCHES.map((b, i) => (
            <div
              key={b.name}
              className={[
                "group relative rounded-2xl p-7 transition-all duration-500",
                b.flagship
                  ? "glass border-neon glow-neon"
                  : "glass hover:-translate-y-2 hover:border-[color:var(--neon)]",
              ].join(" ")}
              data-testid={`branch-card-${i}`}
            >
              <div className="flex items-start justify-between">
                <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/40">
                  {String(i + 1).padStart(2, "0")} / {String(BRANCHES.length).padStart(2, "0")}
                </div>
                {b.flagship && (
                  <div className="px-2 py-1 rounded-full bg-neon text-black font-mono-ui text-[9px] tracking-[0.25em] uppercase">
                    Flagship
                  </div>
                )}
              </div>
              <h3 className="mt-5 font-display text-4xl uppercase text-white tracking-tight">
                {b.name}
              </h3>
              <div className="mt-1 font-mono-ui text-xs tracking-[0.2em] uppercase text-neon/80">
                {b.tag}
              </div>

              <div className="mt-8 space-y-3 text-sm">
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-4 h-4 mt-0.5 text-white/40" strokeWidth={1.8} />
                  <span>{b.area}</span>
                </div>
                <div className="flex items-start gap-3 text-white/70">
                  <Phone className="w-4 h-4 mt-0.5 text-white/40" strokeWidth={1.8} />
                  <a href={`tel:${b.phone}`} className="hover:text-neon">
                    {b.phone}
                  </a>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <a
                  href={b.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono-ui text-[11px] tracking-[0.3em] uppercase text-white group-hover:text-neon transition-colors"
                  data-testid={`branch-map-${i}`}
                >
                  Find on maps <ExternalLink className="w-3 h-3" />
                </a>
                <div className="w-2 h-2 rounded-full bg-neon pulse-dot" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
