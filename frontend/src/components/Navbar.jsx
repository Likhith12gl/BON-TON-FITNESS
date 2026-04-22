import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/transformation", label: "Transform" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/65 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
      data-testid="main-navbar"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-neon text-black font-display text-lg">
            B
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-widest uppercase">
              Bon Ton
            </div>
            <div className="font-mono-ui text-[10px] text-white/50 tracking-[0.3em]">
              FITNESS · BLR
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-mono-ui text-xs tracking-[0.25em] uppercase">
          {LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative transition-colors ${
                  active ? "text-neon" : "text-white/70 hover:text-white"
                }`}
                data-testid={`nav-${l.label.toLowerCase()}`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-neon" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/transformation"
            className="btn-neon !py-2 !px-5 !text-sm"
            data-testid="nav-join-now"
          >
            Join Now
          </Link>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white"
          onClick={() => setOpen(!open)}
          data-testid="nav-menu-toggle"
          aria-label="Menu"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block font-display text-2xl uppercase hover:text-neon"
              data-testid={`mobile-nav-${l.label.toLowerCase()}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/transformation"
            onClick={() => setOpen(false)}
            className="btn-neon w-full justify-center"
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
}
