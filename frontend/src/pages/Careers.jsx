import React, { useEffect } from "react";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Heart, Sparkles, TrendingUp, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import { CONTACT } from "../data/brand";

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Professional Growth",
    desc: "Career advancement within our expanding Bangalore gym network.",
  },
  {
    icon: Sparkles,
    title: "Vibrant Environment",
    desc: "High-energy atmosphere with a packed event & community calendar.",
  },
  {
    icon: Users,
    title: "Supportive Leadership",
    desc: "Collaborate with experienced managers who value your input & development.",
  },
  {
    icon: Heart,
    title: "Impactful Work",
    desc: "Be part of a brand dedicated to premium fitness and strong local community.",
  },
];

const ROLES = [
  {
    title: "Personal Trainer / PT",
    type: "Full-time",
    desc: "Deliver 1-on-1 transformations on the floor. Certified trainers with 2+ years preferred.",
  },
  {
    title: "Floor Manager",
    type: "Full-time",
    desc: "Own the member experience end-to-end. Drive engagement, safety, and retention.",
  },
  {
    title: "Front Desk Executive",
    type: "Full-time",
    desc: "The first face members see. Own onboarding, communication, and daily ops.",
  },
  {
    title: "Group Fitness Trainer",
    type: "Part-time",
    desc: "Zumba / Aerobics / TRX / CrossFit specialists. Certified instructors only.",
  },
];

export default function Careers() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    const raf = (t) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-screen" data-testid="page-careers">
      <Navbar />

      <main className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono-ui text-[11px] tracking-[0.3em] uppercase text-white/60 hover:text-neon mb-6"
          data-testid="back-home"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back home
        </Link>

        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 lg:col-span-8">
            <span className="font-mono-ui text-xs tracking-[0.3em] uppercase text-neon">
              / Careers
            </span>
            <h1 className="mt-5 font-display text-6xl sm:text-7xl lg:text-[128px] leading-[0.85] uppercase">
              We don&apos;t hire — <span className="text-neon glow-text-neon">we build careers</span>.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-white/60 text-base leading-relaxed">
              At Bon Ton Fitness, our people ARE the brand. If you&apos;re
              passionate about excellence and want to shape the next decade of
              Bangalore fitness — your next chapter starts here.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform"
              data-testid={`benefit-${i}`}
            >
              <div className="w-11 h-11 rounded-xl bg-neon/10 flex items-center justify-center text-neon mb-4">
                <Icon className="w-5 h-5" strokeWidth={1.6} />
              </div>
              <div className="font-display text-xl uppercase">{title}</div>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Active Openings */}
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="font-mono-ui text-xs tracking-[0.3em] uppercase text-neon">
              / Active Openings
            </span>
            <h2 className="mt-3 font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
              Join the <span className="text-neon">floor</span>.
            </h2>
          </div>
          <a
            href={`tel:${CONTACT.phone}`}
            className="btn-neon"
            data-testid="careers-call-cta"
          >
            <Phone className="w-4 h-4" /> Apply · {CONTACT.phone}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-testid="roles-grid">
          {ROLES.map((r, i) => (
            <div
              key={r.title}
              className="glass rounded-2xl p-7 group hover:border-neon transition-colors"
              data-testid={`role-${i}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/40">
                    /0{i + 1}
                  </div>
                  <h3 className="mt-3 font-display text-3xl uppercase tracking-tight">
                    {r.title}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-neon/10 border border-neon/40 font-mono-ui text-[9px] tracking-[0.25em] uppercase text-neon">
                  {r.type}
                </div>
              </div>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">{r.desc}</p>
              <a
                href={`tel:${CONTACT.phone}`}
                className="mt-6 inline-flex items-center gap-2 font-mono-ui text-[11px] tracking-[0.3em] uppercase text-white group-hover:text-neon"
                data-testid={`apply-${i}`}
              >
                Apply now → {CONTACT.phone}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
