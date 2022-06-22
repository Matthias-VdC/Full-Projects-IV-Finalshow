import { Loader } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { Scene } from "../components";

export const Map = ({ ...props }) => {
  console.log(props);
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
        camera={{ position: [900, 400, 900], far: 5000, fov: 45, zoom: zoom }}
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