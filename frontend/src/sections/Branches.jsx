import React from "react";
import { MapPin, Clock } from "lucide-react";

const BRANCHES = [
  {
    name: "Nagasandra",
    tag: "Flagship · 8 years",
    area: "Opp. Nagasandra Metro",
    timings: "5:00 AM — 10:00 PM",
    flagship: true,
  },
  {
    name: "Byadarahalli",
    tag: "Anjana Nagar",
    area: "Near Anjana Nagar Bus Stop",
    timings: "5:00 AM — 10:00 PM",
  },
  {
    name: "Nelamangala",
    tag: "Outer Ring",
    area: "Main Rd, Nelamangala",
    timings: "5:00 AM — 10:00 PM",
  },
  {
    name: "Chikka Gollarahatti",
    tag: "West Bangalore",
    area: "Magadi Main Road",
    timings: "5:00 AM — 10:00 PM",
  },
  {
    name: "Laggere",
    tag: "North-West",
    area: "Laggere Main Road",
    timings: "5:00 AM — 10:00 PM",
  },
  {
    name: "Herohalli",
    tag: "Sunkadakatte",
    area: "Magadi Road, Herohalli",
    timings: "5:00 AM — 10:00 PM",
  },
];

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
              Six floors.
              <br />
              One <span className="text-neon">Bangalore</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-4">
            <p className="text-white/60 text-base leading-relaxed">
              From our Nagasandra flagship to our west-city outposts — you&apos;re
              never more than a ride away from a Bon Ton floor. Train across any
              branch on our Premium &amp; Elite plans.
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
                  {String(i + 1).padStart(2, "0")} / 06
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
                  <Clock className="w-4 h-4 mt-0.5 text-white/40" strokeWidth={1.8} />
                  <span>{b.timings} · Sun mornings</span>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <a
                  href="#transform"
                  className="font-mono-ui text-[11px] tracking-[0.3em] uppercase text-white group-hover:text-neon transition-colors"
                  data-testid={`branch-visit-${i}`}
                >
                  Get Directions →
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
