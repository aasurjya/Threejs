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
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Suspense fallback={null}>{children}</Suspense>
      <OrbitControls 
        enableRotate={true}
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;