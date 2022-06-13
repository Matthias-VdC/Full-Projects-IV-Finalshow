import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Scene } from ".";

export const Map = () => {
    return (
        <Canvas className="canvas" camera={{ position: [1, 2, 2] }}>
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    );
};
