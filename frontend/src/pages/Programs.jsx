import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, GlassWater, Lock, DoorOpen, Droplets, ParkingCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import { PROGRAMS, FACILITIES } from "../data/brand";

const ICONS = { GlassWater, Lock, DoorOpen, Droplets, ParkingCircle };

export default function Programs() {
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
    <div className="relative bg-[#0a0a0a] text-white min-h-screen" data-testid="page-programs">
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
              / Programs
            </span>
            <h1 className="mt-5 font-display text-6xl sm:text-7xl lg:text-[128px] leading-[0.85] uppercase">
              Train <span className="text-neon glow-text-neon">your way</span>.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-white/60 text-base leading-relaxed">
              From raw strength to rhythmic Zumba — ten specialised programs
              under one roof. Learn more about your options and feel free to
              reach out with any questions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="programs-grid">
          {PROGRAMS.map((p, idx) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/5] cursor-pointer"
              data-testid={`program-${idx}`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/60">
                    /{String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-neon group-hover:text-black group-hover:border-neon transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-3xl uppercase tracking-tight leading-none">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-[28ch]">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities */}
        <div className="mt-24 rounded-3xl glass p-8 md:p-12">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-4">
              <span className="font-mono-ui text-xs tracking-[0.3em] uppercase text-neon">
                / Facilities
              </span>
              <h2 className="mt-4 font-display text-5xl lg:text-6xl uppercase leading-[0.9]">
                What we <span className="text-neon">provide</span>.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {FACILITIES.map((f) => {
                  const Icon = ICONS[f.icon] || GlassWater;
                  return (
                    <div
                      key={f.name}
                      className="flex flex-col items-center text-center p-5 rounded-xl border border-white/10 bg-white/5 hover:border-neon hover:bg-neon/5 transition-colors"
                      data-testid={`facility-${f.name}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center text-neon mb-3">
                        <Icon className="w-5 h-5" strokeWidth={1.6} />
                      </div>
                      <div className="font-display text-sm uppercase">{f.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
