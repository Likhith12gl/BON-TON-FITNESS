import React from "react";
import { Dumbbell, Flame, Salad, Users } from "lucide-react";

const FEATURES = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    desc: "Olympic bars, calibrated plates, progressive overload programming.",
  },
  {
    icon: Flame,
    title: "Pro Equipment",
    desc: "Hammer Strength, Matrix, Cybex — maintained and sanitized daily.",
  },
  {
    icon: Salad,
    title: "Nutrition Guidance",
    desc: "1-on-1 diet mapping with certified sports nutritionists.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "A lifting tribe that pushes harder than any algorithm can.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden py-32"
      data-testid="section-about"
    >
      {/* Side label */}
      <div className="hidden lg:block absolute top-32 right-8 rotate-90 origin-top-right">
        <span className="font-mono-ui text-[10px] tracking-[0.4em] uppercase text-white/30">
          /02 — Philosophy
        </span>
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-12 lg:col-span-7">
            <span className="font-mono-ui text-xs tracking-[0.3em] uppercase text-neon">
              / Mentality &gt; Physicality
            </span>
            <h2
              className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[112px] leading-[0.9] uppercase text-white"
              data-testid="about-heading"
            >
              We don&apos;t just build <span className="text-neon">bodies</span>
              <br />
              — we build <em className="not-italic text-neon glow-text-neon">mentality</em>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Our floor isn&apos;t about vanity metrics. It&apos;s built on
              work ethic, sweat, and the quiet commitment to show up every
              single day — especially on the days you don&apos;t feel like it.
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-neon via-white/30 to-transparent" />
            <div className="mt-6 flex items-center gap-6">
              <div>
                <div className="font-display text-4xl text-white">12k+</div>
                <div className="font-mono-ui text-[10px] tracking-[0.25em] uppercase text-white/40 mt-1">
                  Members trained
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-white">48</div>
                <div className="font-mono-ui text-[10px] tracking-[0.25em] uppercase text-white/40 mt-1">
                  Coaches
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          data-testid="features-grid"
        >
          {FEATURES.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={title}
              className="group relative glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--neon)]"
              data-testid={`feature-card-${idx}`}
            >
              <div className="font-mono-ui text-[10px] tracking-[0.3em] text-white/30">
                0{idx + 1}
              </div>
              <div className="mt-6 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-neon/20 group-hover:border-neon transition-all">
                <Icon className="w-6 h-6 text-white group-hover:text-neon transition-colors" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-display text-2xl uppercase text-white tracking-tight">
                {title}
              </h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">
                {desc}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="h-px w-full bg-white/10" />
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 40px rgba(214,255,0,0.12)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
