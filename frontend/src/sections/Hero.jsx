import React from "react";

const HERO_BG =
  "https://images.pexels.com/photos/29392546/pexels-photo-29392546.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden grain vignette"
      data-testid="section-hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Gym"
          className="w-full h-full object-cover opacity-55"
          style={{ filter: "blur(3px) saturate(0.9)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Floating accent shapes */}
      <div
        className="absolute -left-32 top-1/3 w-[420px] h-[420px] rounded-full blur-[120px] z-10"
        style={{ background: "radial-gradient(circle, rgba(214,255,0,0.22), transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-40 pb-16 min-h-screen grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-7">
          <div
            className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full glass"
            data-testid="hero-tag"
          >
            <span className="w-2 h-2 bg-neon rounded-full pulse-dot" />
            <span className="font-mono-ui text-xs tracking-[0.25em] uppercase text-white/80">
              Flagship · Nagasandra · Bangalore
            </span>
          </div>

          <h1
            className="font-display text-[72px] sm:text-[96px] md:text-[132px] lg:text-[168px] leading-[0.85] uppercase text-white"
            data-testid="hero-heading"
          >
            Built
            <br />
            <span className="text-neon glow-text-neon">Different.</span>
          </h1>

          <p
            className="mt-8 max-w-xl text-base md:text-lg text-white/70 leading-relaxed"
            data-testid="hero-subtext"
          >
            Be stronger than your excuses. Eight years. Six branches.
            Thousands of transformations. The gym Bangalore trains at.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a href="#transform" className="btn-neon" data-testid="hero-cta-join">
              Join Now
              <span className="text-base">→</span>
            </a>
            <a href="#about" className="btn-ghost" data-testid="hero-cta-explore">
              Explore
            </a>
          </div>

          {/* Strip stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            <div data-testid="hero-stat-1">
              <div className="font-display text-4xl md:text-5xl text-white">08</div>
              <div className="font-mono-ui text-[10px] tracking-[0.25em] uppercase text-white/50 mt-1">
                Years Strong
              </div>
            </div>
            <div data-testid="hero-stat-2">
              <div className="font-display text-4xl md:text-5xl text-white">
                06
              </div>
              <div className="font-mono-ui text-[10px] tracking-[0.25em] uppercase text-white/50 mt-1">
                Branches
              </div>
            </div>
            <div data-testid="hero-stat-3">
              <div className="font-display text-4xl md:text-5xl text-neon">
                4.9
              </div>
              <div className="font-mono-ui text-[10px] tracking-[0.25em] uppercase text-white/50 mt-1">
                1400+ Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Right column intentionally empty — the 3D dumbbell scene sits here */}
        <div className="hidden md:block md:col-span-5" />
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-mono-ui text-[10px] tracking-[0.35em] uppercase text-white/50">
          Scroll to lift
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">
        <div className="flex whitespace-nowrap py-3 marquee-track">
          {Array.from({ length: 2 }).map((_, j) => (
            <div key={j} className="flex items-center gap-10 px-6">
              {[
                "NO SHORTCUTS",
                "STRENGTH · DISCIPLINE · COMMUNITY",
                "NAGASANDRA FLAGSHIP",
                "EST. 2017",
                "BUILT IN BANGALORE",
                "4.9 ★ · 1400+ MEMBERS",
              ].map((t, i) => (
                <span
                  key={i}
                  className="font-mono-ui text-xs tracking-[0.3em] uppercase text-white/50 flex items-center gap-10"
                >
                  {t}
                  <span className="text-neon">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
