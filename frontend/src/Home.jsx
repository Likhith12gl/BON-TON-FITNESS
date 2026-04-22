import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import SceneCanvas from "./components/SceneCanvas";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Membership from "./sections/Membership";
import Branches from "./sections/Branches";
import Testimonials from "./sections/Testimonials";
import FinalCTA from "./sections/FinalCTA";

export default function Home() {
  // Scroll progress ref, shared with the R3F canvas.
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    const onScroll = ({ scroll, limit }) => {
      scrollProgressRef.current = limit > 0 ? Math.min(1, Math.max(0, scroll / limit)) : 0;
    };
    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-x-hidden" data-testid="home-root">
      <Navbar />
      <SceneCanvas scrollProgressRef={scrollProgressRef} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Membership />
        <Branches />
        <Testimonials />
        <FinalCTA />
      </main>
    </div>
  );
}
