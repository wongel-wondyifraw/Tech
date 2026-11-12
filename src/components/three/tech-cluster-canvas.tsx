"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Line,
  MeshDistortMaterial,
  OrbitControls,
  RoundedBox,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

const NODE_POSITIONS: [number, number, number][] = [
  [-2.35, 1.05, 0.45],
  [2.35, 0.95, -0.35],
  [-1.95, -1.05, -0.55],
  [2.1, -0.95, 0.55],
  [0, 1.75, -0.85],
  [0, -1.65, 0.85],
];

function ComputeNode({
  position,
  color,
  delayOffset,
}: {
  position: [number, number, number];
  color: string;
  delayOffset: number;
}) {
  const boxRef = React.useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime() + delayOffset;
    if (boxRef.current) {
      boxRef.current.rotation.x += delta * 0.35;
      boxRef.current.rotation.y += delta * 0.48;
      boxRef.current.position.y = position[1] + Math.sin(t * 1.4) * 0.14;
    }
  });

  return (
    <group>
      <Line
        points={[
          [0, 0, 0],
          position,
        ]}
        color="#38bdf8"
        lineWidth={1.1}
        transparent
        opacity={0.38}
      />
      <RoundedBox
        ref={boxRef}
        args={[0.48, 0.48, 0.48]}
        radius={0.08}
        smoothness={4}
        position={position}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.45}
          metalness={0.82}
          roughness={0.18}
        />
      </RoundedBox>
    </group>
  );
}

function NeuralCluster() {
  const clusterRef = React.useRef<THREE.Group>(null);
  const latticeRef = React.useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (clusterRef.current) {
      clusterRef.current.rotation.y += delta * 0.08;
      clusterRef.current.rotation.x = THREE.MathUtils.lerp(
        clusterRef.current.rotation.x,
        state.pointer.y * 0.18,
        0.05
      );
    }
    if (latticeRef.current) {
      latticeRef.current.rotation.y -= delta * 0.22;
      latticeRef.current.rotation.z += delta * 0.14;
    }
  });

  return (
    <group ref={clusterRef}>
      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.3}>
        <mesh>
          <sphereGeometry args={[0.72, 48, 48]} />
          <MeshDistortMaterial
            color="#0ea5e9"
            emissive="#1d4ed8"
            emissiveIntensity={0.65}
            metalness={0.75}
            roughness={0.15}
            distort={0.34}
            speed={2.4}
          />
        </mesh>

        <mesh ref={latticeRef}>
          <octahedronGeometry args={[1.18, 1]} />
          <meshStandardMaterial
            color="#7dd3fc"
            emissive="#38bdf8"
            emissiveIntensity={0.5}
            wireframe
            transparent
            opacity={0.42}
          />
        </mesh>
      </Float>

      <ComputeNode position={NODE_POSITIONS[0]} color="#38bdf8" delayOffset={0.2} />
      <ComputeNode position={NODE_POSITIONS[1]} color="#2563eb" delayOffset={1.1} />
      <ComputeNode position={NODE_POSITIONS[2]} color="#0ea5e9" delayOffset={2.0} />
      <ComputeNode position={NODE_POSITIONS[3]} color="#6366f1" delayOffset={2.8} />
      <ComputeNode position={NODE_POSITIONS[4]} color="#38bdf8" delayOffset={3.5} />
      <ComputeNode position={NODE_POSITIONS[5]} color="#3b82f6" delayOffset={4.2} />
    </group>
  );
}

export function TechClusterCanvas() {
  return (
    <div
      id="tech-cluster-canvas"
      className="tech-cluster-canvas relative h-[360px] w-full cursor-grab overflow-hidden rounded-3xl border-2 border-[var(--nb-ink)] bg-[#232d45] shadow-[8px_8px_0px_var(--nb-shadow)] active:cursor-grabbing sm:h-[420px]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(94, 163, 255, 0.35), transparent 65%)",
        }}
        aria-hidden="true"
      />

      <Canvas
        camera={{ position: [0, 0.3, 5.4], fov: 44 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.75} />
        <pointLight position={[4, 4, 4]} intensity={2.2} color="#38bdf8" />
        <pointLight position={[-4, -3, 3]} intensity={1.4} color="#6366f1" />
        <NeuralCluster />
        <Sparkles
          count={72}
          scale={[7, 5, 4]}
          size={1.6}
          speed={0.32}
          opacity={0.55}
          color="#7dd3fc"
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.85}
        />
      </Canvas>

      <div className="tech-cluster-hud pointer-events-none absolute right-5 bottom-4 left-5 z-10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.14em] text-[#2d3748]">
        <span className="rounded-full border-2 border-[#475569] bg-white/95 px-3.5 py-1 shadow-[3px_3px_0px_#a9bad3]">
          Interactive 3D Mesh · Drag to Orbit
        </span>
        <span className="rounded-full border-2 border-[#475569] bg-[#e9eef7] px-3.5 py-1 shadow-[3px_3px_0px_#a9bad3]">
          6 Distributed ERP Nodes · Live Sync
        </span>
      </div>
    </div>
  );
}

