import { Loader } from "@react-three/drei";
import React, { Suspense, useState } from "react";
import { Route } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { Scene } from "../components";
import { Preview } from "../components/Preview";

export const Map = () => {
    return (
        <div className="map">
            <Canvas
                className="map__canvas"
                shadows
                camera={{ position: [600, 300, 600], far: 5000 }}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
            <Loader />
        </div>
    );
};
