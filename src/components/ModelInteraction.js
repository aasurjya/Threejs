"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyAvatar from "./MyAvatar"; // Update the path to your MyAvatar.jsx file

export default function AvatarScene() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        {/* Ensure the model loads smoothly */}
        <Suspense fallback={null}>
          <MyAvatar />
        </Suspense>
        {/* Add ambient and directional lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* Enhanced OrbitControls configuration */}
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={10}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}