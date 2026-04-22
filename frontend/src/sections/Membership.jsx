import React from "react";
import { Check, Star } from "lucide-react";

const PLANS = [
  {
    name: "Basic",
    price: "₹1,499",
    period: "/month",
    tagline: "Get in. Get strong.",
    highlight: false,
    features: [
      "Full gym access · Mon–Sat",
      "Locker & changing room",
      "Induction workout plan",
      "Single branch",
    ],
  },
  {
    name: "Premium",
    price: "₹2,499",
    period: "/month",
    tagline: "Our most-loved plan.",
    highlight: true,
    features: [
      "All 6 Bangalore branches",
      "Personal trainer (4 sessions)",
      "Diet consultation",
      "Cardio + functional + free weights",
      "Sunday morning access",
    ],
  },
  {
    name: "Elite",
    price: "₹4,999",
    period: "/month",
    tagline: "Train like an athlete.",
    highlight: false,
    features: [
      "Unlimited PT sessions",
      "Monthly body composition scan",
      "Custom nutrition plan",
      "Priority booking & guest passes",
      "Recovery & mobility sessions",
    ],
  },
];

const MEMBERSHIP_BG =
  "https://images.pexels.com/photos/29392549/pexels-photo-29392549.jpeg";

export default function Membership() {
  return (
    <section
      id="plans"
      className="relative min-h-screen w-full overflow-hidden py-32"
      data-testid="section-membership"
    >
      {/* BG texture */}
      <div className="absolute inset-0 z-0">
        <img
          src={MEMBERSHIP_BG}
          alt=""
          className="w-full h-full object-cover opacity-25"
          style={{ filter: "saturate(0.7)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 items-end mb-16">
          <div className="col-span-12 lg:col-span-8">
            <span className="font-mono-ui text-xs tracking-[0.3em] uppercase text-neon">
              /03 — Memberships
            </span>
            <h2
              className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[104px] leading-[0.9] uppercase text-white"
              data-testid="membership-heading"
            >
              Choose your <span className="text-neon">plan</span>.
              <br />
              Commit to the <em className="not-italic text-white/50">grind</em>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <div className="flex items-center gap-2 lg:justify-end">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-neon text-neon" />
              ))}
              <span className="font-display text-3xl text-white ml-2">4.9</span>
            </div>
            <div className="font-mono-ui text-xs tracking-[0.25em] uppercase text-white/50 mt-2">
              1400+ Google reviews
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="plans-grid">
          {PLANS.map((plan, idx) => (
            <div
              key={plan.name}
              className={[
                "relative rounded-3xl p-8 transition-all duration-500",
                plan.highlight
                  ? "glass border-neon glow-neon md:-translate-y-6 scale-[1.02]"
                  : "glass hover:-translate-y-2",
              ].join(" ")}
              data-testid={`plan-card-${plan.name.toLowerCase()}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-neon text-black font-mono-ui text-[10px] tracking-[0.25em] uppercase">
                  Most Popular
                </div>
              )}
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-display text-3xl uppercase text-white">
                    {plan.name}
                  </div>
                  <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/50 mt-1">
                    {plan.tagline}
                  </div>
                </div>
                <div className="font-mono-ui text-[10px] tracking-[0.25em] uppercase text-white/30">
                  0{idx + 1}
                </div>
              </div>

              <div className="mt-8 flex items-end gap-2">
                <span className={`font-display text-6xl ${plan.highlight ? "text-neon" : "text-white"}`}>
                  {plan.price}
                </span>
                <span className="font-mono-ui text-sm text-white/50 mb-2">
                  {plan.period}
                </span>
              </div>

              <div className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? "bg-neon text-black" : "bg-white/10 text-white/70"}`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-white/80">{f}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full py-4 rounded-full font-display uppercase tracking-wider text-sm transition-all ${
                  plan.highlight
                    ? "bg-neon text-black hover:shadow-[0_10px_40px_rgba(214,255,0,0.4)]"
                    : "border border-white/20 text-white hover:border-neon hover:text-neon"
                }`}
                data-testid={`plan-cta-${plan.name.toLowerCase()}`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Statement block */}
        <div className="mt-24 relative rounded-3xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="relative px-8 md:px-16 py-16 md:py-24">
            <h3
              className="font-display text-5xl sm:text-7xl md:text-[128px] leading-[0.85] uppercase text-white"
              data-testid="limit-statement"
            >
              Your only <span className="text-neon glow-text-neon">limit</span>
              <br />
              is <em className="not-italic">you</em>.
            </h3>
            <div className="mt-8 flex flex-wrap items-center gap-8 font-mono-ui text-[11px] tracking-[0.25em] uppercase text-white/50">
              <span>· 12,000+ Members</span>
              <span>· 4.9 Average rating</span>
              <span>· 1400+ Google reviews</span>
              <span>· 8 years of community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
