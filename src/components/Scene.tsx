import {
    Billboard,
    Html,
    PresentationControls,
    useDepthBuffer,
} from "@react-three/drei";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { MathUtils, Vector3 } from "three";
import { history } from "./models/History";
import { Lights, MovingSpot } from "./models/Lights";
import { Room802 } from "./models/Room802";

const Box = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <boxBufferGeometry attach={"geometry"} args={[5, 5, 5]} />
            <meshLambertMaterial attach={"material"} color={"white"} />
        </mesh>
    );
};

export const Scene = () => {
    const { camera } = useThree();
    const depthBuffer = useDepthBuffer({ size: 256, frames: 1 });

    return (
        <>
            <Room802
                castShadow
                receiveShadow
                onClick={(e) => {
                    const position = new Vector3();
                    e.object.getWorldPosition(position);
                }}
                rotation={[0, MathUtils.degToRad(54), 0]}
                position={[0, -40, 0]}
            />
            <Lights />
            <Billboard follow={true} position={[152, 40, 10]}>
                <Html>
                    <button onClick={() => history.push("/info")}>
                        Go to Info
                    </button>
                </Html>
            </Billboard>

            <MovingSpot
                depthBuffer={depthBuffer}
                position={[900, 400, 900]}
                color={"white"}
                intensity={0.4}
            />
        </>
    );
};
