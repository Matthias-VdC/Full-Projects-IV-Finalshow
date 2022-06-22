import { Loader } from "@react-three/drei";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { Scene } from "../components";

export const Map = ({ ...props }) => {
  console.log(props);
  return (
    <div className="map">
      <Canvas
        className="map__canvas"
        shadows
        camera={{ position: [900, 400, 900], far: 5000, fov: 45 }}
        //@ts-ignore
        mode="concurrent"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Link to="/showroom">Go To Showroom</Link>

      <Loader />
    </div>
  );
};
