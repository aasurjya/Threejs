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
        fov: 50,
        near: 0.1,
        far: 1000
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        {children}
      </Suspense>
      <OrbitControls 
        enableRotate={true}
        enablePan={false}
        enableZoom={true}
        rotateSpeed={0.5}
        minDistance={3}
        maxDistance={10}
      />
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;