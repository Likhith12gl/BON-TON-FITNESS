import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import Dumbbell from "./Dumbbell";

/**
 * Fixed full-screen canvas that hosts the cinematic dumbbell.
 * The dumbbell position/rotation/scale is driven by a shared scroll progress
 * passed via `scrollProgressRef` (0..1 across the whole page).
 */

function ScrollDrivenDumbbell({ scrollProgressRef }) {
  const group = useRef();
  const target = useRef({ x: 3.2, y: 0, z: 0, rx: 0.3, ry: -0.6, rz: 0.1, scale: 1.4 });

  // Keyframes spanning 8 sections (Hero, About, ClassesRail=heavier/longer, Membership, Branches, Testimonials, Gallery, FinalCTA)
  const keyframes = [
    { at: 0.0, x: 3.2, y: -0.2, z: 0, rx: 0.2, ry: -0.7, rz: 0.1, scale: 1.4 },
    { at: 0.12, x: -2.0, y: 0.4, z: -1, rx: 0.1, ry: 0.5, rz: 0.0, scale: 1.2 },
    { at: 0.25, x: 3.2, y: 1.0, z: -2, rx: 0.25, ry: 1.4, rz: -0.15, scale: 0.9 },
    { at: 0.38, x: -3.0, y: -1.2, z: -1.5, rx: -0.1, ry: 2.2, rz: 0.1, scale: 1.1 },
    { at: 0.52, x: 2.4, y: -0.8, z: -2, rx: -0.2, ry: 3.0, rz: -0.2, scale: 1.0 },
    { at: 0.66, x: -3.5, y: 1.8, z: -3, rx: 0.4, ry: 3.8, rz: 0.2, scale: 0.7 },
    { at: 0.8, x: 0, y: -0.2, z: -4, rx: 0.1, ry: 4.8, rz: 0.0, scale: 1.6 },
    { at: 0.92, x: 3.5, y: 1.2, z: -2, rx: 0.3, ry: 5.6, rz: -0.2, scale: 1.3 },
    { at: 1.0, x: -3.0, y: 0, z: 1.2, rx: 0.3, ry: 6.4, rz: -0.1, scale: 2.2 },
  ];

  const lerp = (a, b, t) => a + (b - a) * t;

  const interpolate = (p) => {
    for (let i = 0; i < keyframes.length - 1; i++) {
      const a = keyframes[i];
      const b = keyframes[i + 1];
      if (p >= a.at && p <= b.at) {
        const t = (p - a.at) / (b.at - a.at);
        const e = t * t * (3 - 2 * t); // smoothstep
        return {
          x: lerp(a.x, b.x, e),
          y: lerp(a.y, b.y, e),
          z: lerp(a.z, b.z, e),
          rx: lerp(a.rx, b.rx, e),
          ry: lerp(a.ry, b.ry, e),
          rz: lerp(a.rz, b.rz, e),
          scale: lerp(a.scale, b.scale, e),
        };
      }
    }
    return keyframes[keyframes.length - 1];
  };

  useFrame((_, delta) => {
    const p = scrollProgressRef.current ?? 0;
    const t = interpolate(p);
    // Smooth towards target
    const s = Math.min(1, delta * 4.5);
    target.current.x = lerp(target.current.x, t.x, s);
    target.current.y = lerp(target.current.y, t.y, s);
    target.current.z = lerp(target.current.z, t.z, s);
    target.current.rx = lerp(target.current.rx, t.rx, s);
    target.current.ry = lerp(target.current.ry, t.ry, s);
    target.current.rz = lerp(target.current.rz, t.rz, s);
    target.current.scale = lerp(target.current.scale, t.scale, s);
    if (group.current) {
      group.current.position.set(target.current.x, target.current.y, target.current.z);
      group.current.rotation.set(target.current.rx, target.current.ry, target.current.rz);
      group.current.scale.setScalar(target.current.scale);
    }
  });

  return (
    <group ref={group}>
      <Dumbbell autoSpin={false} />
    </group>
  );
}

export default function SceneCanvas({ scrollProgressRef }) {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
      data-testid="scene-canvas"
    >
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 7], fov: 38 }}
      >
        {/* transparent background so the page bg layers show through */}

        {/* Key lights */}
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[4, 5, 6]}
          intensity={2.2}
          color="#ffffff"
          castShadow
        />
        <pointLight position={[-4, 2, 2]} intensity={3.5} color="#d6ff00" distance={18} />
        <pointLight position={[5, -2, 3]} intensity={1.6} color="#7bf" distance={16} />
        <pointLight position={[0, 0, 6]} intensity={1.2} color="#ffffff" distance={10} />

        <Suspense fallback={null}>
          <Environment preset="city" />
          <ScrollDrivenDumbbell scrollProgressRef={scrollProgressRef} />
          <ContactShadows
            position={[0, -2.2, 0]}
            opacity={0.55}
            scale={12}
            blur={2.5}
            far={4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
