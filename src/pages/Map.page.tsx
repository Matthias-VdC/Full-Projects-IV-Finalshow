import { Loader } from "@react-three/drei";
import {
    EffectComposer,
    Selection,
    SelectiveBloom,
} from "@react-three/postprocessing";
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
                camera={{ position: [900, 400, 900], far: 5000, fov: 45 }}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
            <Loader />
        </div>
    );
};
