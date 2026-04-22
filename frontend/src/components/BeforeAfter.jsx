import React, { useEffect, useRef, useState } from "react";

/**
 * Interactive before/after slider. Drag the handle to reveal.
 */
export default function BeforeAfter({ before, after, caption = "" }) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef(null);
  const dragging = useRef(false);

  useEffect(() => {
    const move = (clientX) => {
      if (!dragging.current || !wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
      setPos((x / rect.width) * 100);
    };
    const onMouseMove = (e) => move(e.clientX);
    const onTouchMove = (e) => e.touches[0] && move(e.touches[0].clientX);
    const onUp = () => (dragging.current = false);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 select-none cursor-ew-resize bg-black"
      onMouseDown={(e) => {
        dragging.current = true;
        const rect = wrapRef.current.getBoundingClientRect();
        setPos(((e.clientX - rect.left) / rect.width) * 100);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        if (e.touches[0]) {
          const rect = wrapRef.current.getBoundingClientRect();
          setPos(((e.touches[0].clientX - rect.left) / rect.width) * 100);
        }
      }}
      data-testid="before-after-slider"
    >
      {/* AFTER (base) */}
      {after ? (
        <img src={after} alt="after" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white/30 font-mono-ui text-xs tracking-[0.3em] uppercase">
          Upload AFTER
        </div>
      )}
      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {before ? (
          <img src={before} alt="before" className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white/30 font-mono-ui text-xs tracking-[0.3em] uppercase">
            Upload BEFORE
          </div>
        )}
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm font-mono-ui text-[9px] tracking-[0.3em] uppercase text-white">
        Before
      </div>
      <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-neon text-black font-mono-ui text-[9px] tracking-[0.3em] uppercase">
        After
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-neon shadow-[0_0_20px_rgba(214,255,0,0.6)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-display text-xs glow-neon">
          ◀▶
        </div>
      </div>

      {caption && (
        <div className="absolute bottom-3 left-3 right-3 text-center font-mono-ui text-[10px] tracking-[0.25em] uppercase text-white/70 bg-black/50 backdrop-blur-sm rounded-full py-1">
          {caption}
        </div>
      )}
    </div>
  );
}
