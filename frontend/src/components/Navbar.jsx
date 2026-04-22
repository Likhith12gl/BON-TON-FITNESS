import React from "react";

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
      data-testid="main-navbar"
    >
      <div className="flex items-center gap-3">
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
      </div>

      <nav className="hidden md:flex items-center gap-8 font-mono-ui text-xs tracking-[0.25em] uppercase text-white/70">
        <a href="#hero" className="hover:text-neon transition-colors" data-testid="nav-home">
          Home
        </a>
        <a href="#about" className="hover:text-neon transition-colors" data-testid="nav-about">
          About
        </a>
        <a href="#plans" className="hover:text-neon transition-colors" data-testid="nav-plans">
          Plans
        </a>
        <a href="#branches" className="hover:text-neon transition-colors" data-testid="nav-branches">
          Branches
        </a>
        <a href="#transform" className="hover:text-neon transition-colors" data-testid="nav-transform">
          Transform
        </a>
      </nav>

      <a
        href="#transform"
        className="btn-neon !py-2 !px-5 !text-sm"
        data-testid="nav-join-now"
      >
        Join Now
      </a>
    </header>
  );
}
