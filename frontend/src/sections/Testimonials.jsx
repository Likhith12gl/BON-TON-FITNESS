import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Kiran R.",
    role: "Member · Nagasandra",
    img: "https://images.pexels.com/photos/11338008/pexels-photo-11338008.jpeg",
    quote:
      "Lost 22kg, gained a second family. The coaches here don't just train you — they remake you.",
    rating: 5,
  },
  {
    name: "Arjun M.",
    role: "Member · Herohalli",
    img: "https://images.unsplash.com/photo-1754475412029-3a4896a930c7",
    quote:
      "Best equipment in all of West Bangalore. I've trained at chains across the city — nothing comes close.",
    rating: 5,
  },
  {
    name: "Sahana P.",
    role: "Member · Byadarahalli",
    img: "https://images.unsplash.com/photo-1754475096386-b7a2a45a91fb",
    quote:
      "Safe, clean, no-nonsense. The nutrition program alone transformed the way I eat. 4.9 is underrated.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const current = TESTIMONIALS[idx];

  const next = () => setIdx((idx + 1) % TESTIMONIALS.length);
  const prev = () => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="relative min-h-screen w-full overflow-hidden py-32"
      data-testid="section-testimonials"
    >
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 lg:col-span-8">
            <span className="font-mono-ui text-xs tracking-[0.3em] uppercase text-neon">
              /05 — Real Results
            </span>
            <h2
              className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[104px] leading-[0.9] uppercase text-white"
              data-testid="testimonials-heading"
            >
              Proof over <span className="text-neon">promises</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right flex lg:justify-end gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-neon hover:text-neon transition-colors"
              data-testid="testimonial-prev"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-neon text-black flex items-center justify-center hover:shadow-[0_10px_30px_rgba(214,255,0,0.4)] transition-all"
              data-testid="testimonial-next"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 items-center" data-testid="testimonial-slide">
          <div className="col-span-12 lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-white/10">
              <img
                src={current.img}
                alt={current.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="font-display text-2xl text-white uppercase">
                    {current.name}
                  </div>
                  <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/60 mt-1">
                    {current.role}
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neon text-neon" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pl-12">
            <div className="font-display text-6xl text-neon leading-none">&ldquo;</div>
            <p className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-white uppercase tracking-tight">
              {current.quote}
            </p>
            <div className="mt-10 flex items-center gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-1 rounded-full transition-all ${
                    i === idx ? "w-12 bg-neon" : "w-6 bg-white/20"
                  }`}
                  data-testid={`testimonial-dot-${i}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
              <span className="ml-4 font-mono-ui text-xs tracking-[0.3em] uppercase text-white/40">
                {String(idx + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
