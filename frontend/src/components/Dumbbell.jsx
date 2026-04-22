import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Procedural high-quality metallic dumbbell built from primitives.
 * Uses child material JSX (idiomatic R3F) to avoid shared material pitfalls.
 */
export default function Dumbbell({ autoSpin = true, ...props }) {
  const group = useRef();

  useFrame((_, delta) => {
    if (autoSpin && group.current) {
      group.current.rotation.y += delta * 0.25;
    }
  });

  const Chrome = () => (
    <meshStandardMaterial color="#cfd3da" metalness={1} roughness={0.22} />
  );
  const Dark = () => (
    <meshStandardMaterial color="#0b0b0b" metalness={0.85} roughness={0.35} />
  );
  const Accent = () => (
    <meshStandardMaterial
      color="#d6ff00"
      metalness={0.6}
      roughness={0.4}
      emissive="#d6ff00"
      emissiveIntensity={0.35}
    />
  );

  // Knurling
  const knurlCount = 16;
  const knurls = [];
  for (let i = 0; i < knurlCount; i++) {
    const t = i / knurlCount;
    knurls.push(
      <mesh key={i} position={[0, -0.6 + t * 1.2, 0]}>
        <torusGeometry args={[0.16, 0.012, 8, 32]} />
        <Dark />
      </mesh>
    );
  }

  return (
    <group ref={group} {...props} rotation={[0.25, 0.6, 0.1]}>
      {/* Handle */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 2.6, 48]} />
        <Chrome />
      </mesh>

      {/* Knurling wrapper */}
      <group rotation={[0, 0, Math.PI / 2]}>{knurls}</group>

      {/* Left plates */}
      <group position={[-1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <mesh>
          <cylinderGeometry args={[0.85, 0.85, 0.35, 6]} />
          <Dark />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.86, 0.86, 0.06, 6]} />
          <Chrome />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.86, 0.86, 0.06, 6]} />
          <Chrome />
        </mesh>
        <mesh>
          <torusGeometry args={[0.5, 0.035, 16, 48]} />
          <Accent />
        </mesh>
      </group>

      {/* Right plates */}
      <group position={[1.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <mesh>
          <cylinderGeometry args={[0.85, 0.85, 0.35, 6]} />
          <Dark />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.86, 0.86, 0.06, 6]} />
          <Chrome />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.86, 0.86, 0.06, 6]} />
          <Chrome />
        </mesh>
        <mesh>
          <torusGeometry args={[0.5, 0.035, 16, 48]} />
          <Accent />
        </mesh>
      </group>

      {/* End caps */}
      <mesh position={[-1.85, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.1, 32]} />
        <Chrome />
      </mesh>
      <mesh position={[1.85, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 0.1, 32]} />
        <Chrome />
      </mesh>
    </group>
  );
}
