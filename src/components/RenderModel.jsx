"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]}
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
    >
      <Suspense fallback={null}>{children}</Suspense>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={10}
        rotateSpeed={0.5}
        target={[0, 0, 0]}
      />
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;