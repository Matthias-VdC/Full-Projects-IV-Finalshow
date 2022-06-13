import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { Scene } from ".";
import { Preview } from "./Preview";

export const Map = () => {
    return (
        <div
            style={{
                position: "fixed",
                height: "100vh",
                width: "100vw",
            }}>
            <Canvas
                className="canvas"
                camera={{ position: [0, 100, 0], far: 5000 }}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
            <Preview>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Obcaecati, ducimus vero ipsa dicta excepturi quas sit qui
                    magni saepe explicabo ab dignissimos ut atque, commodi
                    labore, iste similique exercitationem eius.
                </p>
            </Preview>
        </div>
    );
};
