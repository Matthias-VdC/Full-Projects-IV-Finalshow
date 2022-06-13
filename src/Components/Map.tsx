import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Scene } from ".";

export const Map = () => {
    return (
        <div style={{ position: "fixed", height: "100vh", width: "100vw" }}>
            <Canvas
                className="canvas"
                camera={{ position: [0, 100, 0], far: 5000 }}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
};
