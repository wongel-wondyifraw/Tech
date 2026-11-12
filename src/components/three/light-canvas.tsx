"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function EnterpriseCore({ isDark }: { isDark: boolean }) {
  const coreMeshRef = React.useRef<THREE.Mesh>(null);
  const rootGroupRef = React.useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const scrollNorm =
      typeof window !== "undefined"
        ? Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1.5)
        : 0;

    if (rootGroupRef.current) {
      rootGroupRef.current.position.y = THREE.MathUtils.lerp(
        rootGroupRef.current.position.y,
        0.1 + scrollNorm * 0.48,
        0.08
      );
      const targetScale = 1 + scrollNorm * 0.28;
      rootGroupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(rootGroupRef.current.scale.x, targetScale, 0.08)
      );
    }

    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y += delta * (0.2 + scrollNorm * 0.28);
      coreMeshRef.current.rotation.x =
        state.pointer.y * 0.24 + Math.sin(t * 0.35) * 0.16 + scrollNorm * 0.22;
      coreMeshRef.current.rotation.z = state.pointer.x * 0.16;
    }
  });

  return (
    <Float speed={1.25} rotationIntensity={0.2} floatIntensity={0.35}>
      <group ref={rootGroupRef} position={[0, 0.1, 0]}>
        <mesh ref={coreMeshRef}>
          <icosahedronGeometry args={[1.38, 2]} />
          <meshStandardMaterial
            color={isDark ? "#ffffff" : "#2f6fed"}
            emissive={isDark ? "#ffffff" : "#0284c7"}
            emissiveIntensity={isDark ? 0.65 : 0.38}
            wireframe
            transparent
            opacity={isDark ? 0.36 : 0.25}
          />
        </mesh>
      </group>
    </Float>
  );
}

export function LightCanvas() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div
      id="hero-three-canvas"
      className="hero-three-canvas pointer-events-none absolute inset-0 z-0 opacity-75 dark:opacity-90"
      style={{
        maskImage:
          "radial-gradient(circle at center, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.88) 46%, transparent 78%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.88) 46%, transparent 78%)",
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isDark ? 1.1 : 0.75} />
        <pointLight
          position={[3, 4, 4]}
          intensity={1.8}
          color={isDark ? "#ffffff" : "#38bdf8"}
        />
        <pointLight
          position={[-3, -2, 3]}
          intensity={0.95}
          color={isDark ? "#e2e8f0" : "#6366f1"}
        />
        <EnterpriseCore isDark={isDark} />
        <Sparkles
          count={44}
          scale={[9.5, 6.5, 4]}
          size={1.5}
          speed={0.22}
          opacity={isDark ? 0.38 : 0.32}
          color={isDark ? "#ffffff" : "#38bdf8"}
        />
      </Canvas>
    </div>
  );
}
