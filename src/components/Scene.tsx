import {
    OrbitControls,
    PresentationControls,
    useDepthBuffer,
} from "@react-three/drei";
import gsap, { Power3, Power4 } from "gsap/all";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ThreeEvent, useThree } from "react-three-fiber";
import * as THREE from "three";
import { MathUtils, MeshLambertMaterial, Vector3 } from "three";
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
            {/* <OrbitControls
                // minDistance={minDistance}
                enabled={enableOrbit}
                enableZoom={true}
                target={[0, 0, 0]}
                // minPolarAngle={-Math.PI / 3}
                // maxPolarAngle={Math.PI / 2}
                // minAzimuthAngle={-Math.PI / 3}
                // maxAzimuthAngle={Math.PI / 3}
            /> */}
            <PresentationControls
                polar={[0, 0]}
                global={true}
                azimuth={[MathUtils.degToRad(-90), MathUtils.degToRad(90)]}>
                <Room802
                    castShadow
                    receiveShadow
                    onClick={(e) => {
                        const position = new Vector3();
                        e.object.getWorldPosition(position);
                        console.log(e.object, position);
                    }}
                    rotation={[0, MathUtils.degToRad(54), 0]}
                    position={[0, -40, 0]}
                />
                <Lights />
            </PresentationControls>
            <MovingSpot
                depthBuffer={depthBuffer}
                position={[900, 400, 900]}
                color={"white"}
            />
        </>
    );
};
