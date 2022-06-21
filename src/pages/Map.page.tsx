import { Loader } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Scene } from "../components";

export const Map = () => {
  return (
    <div className="map">
      <Canvas
        className="map__canvas"
        shadows
        camera={{ position: [900, 400, 900], far: 5000, fov: 45 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};
