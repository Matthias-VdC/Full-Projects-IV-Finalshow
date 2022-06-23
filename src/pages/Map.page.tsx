import { Loader } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { Scene } from "../components";
import {
  EffectComposer,
  Bloom,
  Scanline,
  ChromaticAberration,
  Noise,
} from "@react-three/postprocessing";
import { Vector2 } from "three";
import { BlendFunction } from "postprocessing";

export const Map = ({ ...props }) => {
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    if (window.innerWidth < 1100 && window.innerWidth > 850) {
      setZoom(0.6);
    } else if (window.innerWidth <= 850 && window.innerWidth > 500) {
      setZoom(0.4);
    } else if (window.innerWidth <= 500) {
      setZoom(0.2);
    } else {
      setZoom(1);
    }
  }, []);
  return (
    <div className="map">
      <Canvas
        className="map__canvas"
        shadows
        camera={{
          position: [900, 400, 900],
          far: 5000,
          fov: 45,
          zoom: zoom,
          near: 1,
        }}
        //@ts-ignore
        mode="concurrent"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <Noise blendFunction={BlendFunction.MULTIPLY} opacity={0.8} />
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={400}
            opacity={1.5}
          />
          <Scanline density={2} opacity={0.4} />
          <ChromaticAberration offset={new Vector2(0.0005, 0.001)} />
        </EffectComposer>
      </Canvas>
      <Loader />
    </div>
  );
};
