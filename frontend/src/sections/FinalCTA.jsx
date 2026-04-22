import React from "react";
import { Instagram, Facebook, Youtube, Phone, Mail, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="transform"
      className="relative min-h-screen w-full overflow-hidden"
      data-testid="section-final-cta"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(214,255,0,0.18), transparent 70%)" }}
      />

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-8">
        <div className="grid grid-cols-12 gap-6 items-center min-h-[70vh]">
          <div className="col-span-12 lg:col-span-5 lg:col-start-7">
            <span className="font-mono-ui text-xs tracking-[0.3em] uppercase text-neon">
              /06 — The Last Rep
            </span>
            <h2
              className="mt-6 font-display text-6xl sm:text-7xl md:text-8xl lg:text-[136px] leading-[0.82] uppercase text-white"
              data-testid="final-cta-heading"
            >
              Transform your <span className="text-neon">body</span>.
              <br />
              Transform your <em className="not-italic text-neon glow-text-neon">life</em>.
            </h2>
            <p className="mt-8 text-white/70 text-base md:text-lg max-w-md">
              No waiting. No gimmicks. Walk into any of our 6 Bangalore
              branches and lift your first rep today.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <a
                href="#hero"
                className="btn-neon !py-5 !px-8 !text-lg"
                data-testid="final-cta-join"
              >
                Join Now <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+910000000000"
                className="btn-ghost !py-5 !px-8 !text-lg"
                data-testid="final-cta-call"
              >
                <Phone className="w-4 h-4" /> Talk to a coach
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="mt-24 pt-12 border-t border-white/10 grid grid-cols-12 gap-8"
          data-testid="site-footer"
        >
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neon text-black font-display text-xl">
                B
              </div>
              <div className="leading-tight">
                <div className="font-display text-xl tracking-widest uppercase">
                  Bon Ton Fitness
                </div>
                <div className="font-mono-ui text-[10px] text-white/50 tracking-[0.3em] mt-0.5">
                  BLR · SINCE 2017
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/50 max-w-xs leading-relaxed">
              Bangalore&apos;s no-nonsense strength &amp; conditioning
              community. Six branches. One mentality.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-neon hover:border-neon transition-colors"
                  data-testid={`social-${i}`}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Quick Links
            </div>
            <ul className="space-y-3 text-sm text-white/75">
              <li><a href="#about" className="hover:text-neon">Philosophy</a></li>
              <li><a href="#plans" className="hover:text-neon">Memberships</a></li>
              <li><a href="#branches" className="hover:text-neon">Branches</a></li>
              <li><a href="#testimonials" className="hover:text-neon">Results</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Hours
            </div>
            <ul className="space-y-3 text-sm text-white/75">
              <li>Mon–Sat · 5 AM — 10 PM</li>
              <li>Sunday · Morning hours</li>
              <li className="text-neon">All 6 branches · BLR</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-2">
            <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Contact
            </div>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> +91 · Bangalore</li>
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> hello@bontonfitness.in</li>
            </ul>
          </div>
        </footer>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono-ui text-[10px] tracking-[0.25em] uppercase text-white/40">
          <div>© {new Date().getFullYear()} Bon Ton Fitness · All rights reserved</div>
          <div className="flex items-center gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span className="text-neon">Built for lifters</span>
          </div>
        </div>
      </div>
    </section>
  );
}
