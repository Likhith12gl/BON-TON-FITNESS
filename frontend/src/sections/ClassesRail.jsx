import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PROGRAMS } from "../data/brand";

/**
 * Horizontal scroll rail — pinned section where vertical scroll translates
 * the horizontal track. Creates the cinematic "side-scroll" feel of Spidera /
 * headphone landing pages.
 */
export default function ClassesRail() {
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const section = pinRef.current;
      const track = trackRef.current;
      if (!section || !track) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // distance the section has scrolled past the top, normalized over total scroll length
      const total = section.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      const maxX = track.scrollWidth - window.innerWidth + 80;
      track.style.transform = `translate3d(-${p * maxX}px, 0, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="classes-rail"
      ref={pinRef}
      className="relative w-full"
      style={{ height: "260vh" }}
      data-testid="section-classes-rail"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Backdrop layer */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 30%, rgba(214,255,0,0.08), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(0, 200, 255, 0.05), transparent 55%)",
            }}
          />
        </div>

        <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-rows-[auto_1fr_auto] pt-28 pb-10">
          {/* Header */}
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono-ui text-xs tracking-[0.3em] uppercase text-neon">
                /04 — Programs
              </span>
              <h2
                className="mt-4 font-display text-5xl sm:text-6xl lg:text-[96px] leading-[0.9] uppercase"
                data-testid="classes-rail-heading"
              >
                Ten <span className="text-neon">disciplines</span>.
                <br />
                One <em className="not-italic text-white/40">mentality</em>.
              </h2>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2">
              <div className="font-mono-ui text-[10px] tracking-[0.35em] uppercase text-white/40">
                Scroll to drift →
              </div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-neon" />
            </div>
          </div>

          {/* Horizontal track */}
          <div className="relative flex items-center overflow-hidden">
            <div
              ref={trackRef}
              className="flex items-center gap-6 will-change-transform"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {PROGRAMS.map((p, idx) => (
                <div
                  key={p.title}
                  className="relative shrink-0 w-[320px] sm:w-[380px] lg:w-[440px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group"
                  data-testid={`rail-card-${idx}`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/60">
                        /{String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-neon group-hover:text-black transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-neon/70 mb-2">
                        Program {String(idx + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-display text-3xl lg:text-4xl uppercase tracking-tight leading-none">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm text-white/70 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <Link
                to="/programs"
                className="shrink-0 w-[260px] aspect-[4/5] rounded-2xl border border-dashed border-neon/40 flex flex-col items-center justify-center gap-4 hover:bg-neon/5"
                data-testid="rail-cta-all"
              >
                <div className="w-14 h-14 rounded-full bg-neon text-black flex items-center justify-center">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="font-display text-xl uppercase text-center">
                  View all
                  <br />
                  <span className="text-neon">programs</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Bottom progress */}
          <div className="flex items-center gap-6 mt-6">
            <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/40">
              Horizontal scroll
            </div>
            <div className="flex-1 h-px bg-white/10 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 bottom-0 bg-neon"
                style={{ width: "25%" }}
              />
            </div>
            <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-neon">
              10 disciplines
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
