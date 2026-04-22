import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Instagram, Facebook, MapPin, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import { CONTACT, SOCIAL, BRANCHES } from "../data/brand";

export default function Contact() {
  const [form, setForm] = useState({ name: "", number: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
    setForm({ name: "", number: "", message: "" });
  };

  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-screen" data-testid="page-contact">
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
              / Get in touch
            </span>
            <h1 className="mt-5 font-display text-6xl sm:text-7xl lg:text-[128px] leading-[0.85] uppercase">
              Let&apos;s <span className="text-neon glow-text-neon">lift</span>.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Form */}
          <form
            onSubmit={submit}
            className="col-span-12 lg:col-span-7 glass rounded-3xl p-8 md:p-10"
            data-testid="contact-form"
          >
            <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-neon mb-3">
              /Send us a message
            </div>
            <h3 className="font-display text-4xl uppercase leading-tight">
              Drop us a <span className="text-neon">note</span>.
            </h3>

            <div className="mt-8 space-y-4">
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-neon"
                data-testid="contact-name"
              />
              <input
                type="tel"
                required
                placeholder="Phone number"
                value={form.number}
                onChange={(e) => setForm({ ...form, number: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-neon"
                data-testid="contact-number"
              />
              <textarea
                rows={5}
                placeholder="Message (optional)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-neon resize-none"
                data-testid="contact-message"
              />
              <button
                type="submit"
                className="btn-neon justify-center"
                data-testid="contact-submit"
              >
                <Send className="w-4 h-4" /> Submit
              </button>
              {sent && (
                <div className="font-mono-ui text-xs tracking-[0.25em] uppercase text-neon">
                  ✓ Message received. We&apos;ll call you shortly.
                </div>
              )}
            </div>
          </form>

          {/* Side info */}
          <div className="col-span-12 lg:col-span-5 space-y-5">
            <a
              href={`tel:${CONTACT.phone}`}
              className="block glass rounded-2xl p-6 hover:border-neon transition-colors"
              data-testid="contact-phone-card"
            >
              <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/40">
                Flagship · HMT Layout
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Phone className="w-5 h-5 text-neon" strokeWidth={1.6} />
                <span className="font-display text-3xl">{CONTACT.phone}</span>
              </div>
            </a>

            <div className="glass rounded-2xl p-6">
              <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
                All branches
              </div>
              <div className="space-y-3">
                {BRANCHES.map((b) => (
                  <a
                    key={b.name}
                    href={`tel:${b.phone}`}
                    className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 hover:text-neon"
                    data-testid={`branch-phone-${b.name}`}
                  >
                    <span className="font-display text-sm uppercase">{b.name}</span>
                    <span className="font-mono-ui text-sm">{b.phone}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
                Social
              </div>
              <div className="flex gap-3">
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:border-neon hover:text-neon transition-colors font-mono-ui text-xs tracking-[0.25em] uppercase"
                  data-testid="social-instagram"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:border-neon hover:text-neon transition-colors font-mono-ui text-xs tracking-[0.25em] uppercase"
                  data-testid="social-facebook"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
