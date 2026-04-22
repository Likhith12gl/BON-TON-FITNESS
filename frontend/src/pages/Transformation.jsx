import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import { Upload, Trash2, Plus, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import BeforeAfter from "../components/BeforeAfter";

const STORAGE_KEY = "bonton_transformations_v1";

const SEED = [
  {
    id: "seed-1",
    name: "Rajesh K.",
    caption: "9 months · -18 kg",
    before:
      "https://images.pexels.com/photos/4944968/pexels-photo-4944968.jpeg?auto=compress&cs=tinysrgb&w=900",
    after:
      "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "seed-2",
    name: "Priya S.",
    caption: "12 weeks · Body recomp",
    before:
      "https://images.pexels.com/photos/6456298/pexels-photo-6456298.jpeg?auto=compress&cs=tinysrgb&w=900",
    after:
      "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "seed-3",
    name: "Mohan V.",
    caption: "6 months · +8 kg lean mass",
    before:
      "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=900",
    after:
      "https://images.unsplash.com/photo-1754475412029-3a4896a930c7?w=900",
  },
];

export default function Transformation() {
  const scrollProgressRef = useRef(0);
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", caption: "", before: "", after: "" });

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    const raf = (t) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    lenis.on("scroll", ({ scroll, limit }) => {
      scrollProgressRef.current = limit > 0 ? scroll / limit : 0;
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      setItems([...saved, ...SEED]);
    } catch {
      setItems(SEED);
    }
  }, []);

  const readFile = (file) =>
    new Promise((resolve) => {
      const r = new FileReader();
      r.onload = (e) => resolve(e.target.result);
      r.readAsDataURL(file);
    });

  const onPick = async (key, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const data = await readFile(file);
    setForm((f) => ({ ...f, [key]: data }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.before || !form.after || !form.name) return;
    const entry = { id: `u-${Date.now()}`, ...form };
    const user = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const next = [entry, ...user];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setItems([entry, ...items.filter((i) => !i.id.startsWith("seed")), ...SEED]);
    setForm({ name: "", caption: "", before: "", after: "" });
  };

  const removeUserEntry = (id) => {
    const user = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]").filter(
      (i) => i.id !== id
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="relative bg-[#0a0a0a] text-white min-h-screen" data-testid="page-transformation">
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
              / Transformations
            </span>
            <h1 className="mt-5 font-display text-6xl sm:text-7xl lg:text-[132px] leading-[0.85] uppercase">
              Before. <span className="text-neon glow-text-neon">After.</span>
              <br />
              Proof.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-white/60 text-base leading-relaxed">
              Real Bon Ton Fitness members. Real results. Drag the slider to
              reveal. Upload your own transformation — stays private to your
              browser until shared.
            </p>
          </div>
        </div>

        {/* Upload form */}
        <form
          onSubmit={onSubmit}
          className="glass rounded-3xl p-8 md:p-10 mb-16 grid grid-cols-12 gap-6"
          data-testid="upload-form"
        >
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-neon mb-3">
              /new entry
            </div>
            <h3 className="font-display text-4xl uppercase leading-tight">
              Share your <span className="text-neon">transformation</span>
            </h3>
            <p className="mt-3 text-sm text-white/60 max-w-sm">
              Upload two photos — before &amp; after. Adjust the slider,
              add a caption. Saves to your browser.
            </p>

            <div className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-neon"
                data-testid="input-name"
                required
              />
              <input
                type="text"
                placeholder="Caption (e.g. 12 weeks · -8 kg)"
                value={form.caption}
                onChange={(e) => setForm({ ...form, caption: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-neon"
                data-testid="input-caption"
              />

              <div className="grid grid-cols-2 gap-3">
                <label className="relative cursor-pointer" data-testid="pick-before">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => onPick("before", e)}
                  />
                  <div
                    className={`px-3 py-4 rounded-xl border border-dashed text-center font-mono-ui text-[10px] tracking-[0.25em] uppercase ${
                      form.before
                        ? "border-neon text-neon bg-neon/5"
                        : "border-white/20 text-white/60 hover:border-white/40"
                    }`}
                  >
                    <Upload className="w-4 h-4 mx-auto mb-1" />
                    {form.before ? "Before ✓" : "Upload Before"}
                  </div>
                </label>
                <label className="relative cursor-pointer" data-testid="pick-after">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => onPick("after", e)}
                  />
                  <div
                    className={`px-3 py-4 rounded-xl border border-dashed text-center font-mono-ui text-[10px] tracking-[0.25em] uppercase ${
                      form.after
                        ? "border-neon text-neon bg-neon/5"
                        : "border-white/20 text-white/60 hover:border-white/40"
                    }`}
                  >
                    <Upload className="w-4 h-4 mx-auto mb-1" />
                    {form.after ? "After ✓" : "Upload After"}
                  </div>
                </label>
              </div>

              <button
                type="submit"
                disabled={!form.name || !form.before || !form.after}
                className="btn-neon w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                data-testid="submit-transformation"
              >
                <Plus className="w-4 h-4" /> Add my transformation
              </button>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="font-mono-ui text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3">
              Live preview — drag the handle
            </div>
            <BeforeAfter
              before={form.before}
              after={form.after}
              caption={form.caption ? `${form.name || "You"} · ${form.caption}` : form.name}
            />
          </div>
        </form>

        {/* Grid of transformations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="transformations-grid">
          {items.map((t) => (
            <div key={t.id} className="relative group" data-testid={`transformation-${t.id}`}>
              <BeforeAfter before={t.before} after={t.after} />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="font-display text-xl uppercase">{t.name}</div>
                  <div className="font-mono-ui text-[10px] tracking-[0.25em] uppercase text-white/50 mt-0.5">
                    {t.caption}
                  </div>
                </div>
                {!t.id.startsWith("seed") && (
                  <button
                    onClick={() => removeUserEntry(t.id)}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-red-400 hover:border-red-400/50"
                    data-testid={`delete-${t.id}`}
                    aria-label="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
