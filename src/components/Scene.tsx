import { OrbitControls, PresentationControls } from "@react-three/drei";
import gsap, { Power3, Power4 } from "gsap/all";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ThreeEvent, useThree } from "react-three-fiber";
import * as THREE from "three";
import { MathUtils, MeshLambertMaterial, Vector3 } from "three";
import { Lights } from "./models/Lights";
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
    const [enableOrbit, setEnableOrbit] = useState(true);
    const [minDistance, setMinDistance] = useState(700);
    const [hasAnimated, setHasAnimated] = useState(false);

    return (
        <>
            <OrbitControls
                // minDistance={minDistance}
                enabled={enableOrbit}
                enableZoom={true}
                target={[0, 0, 0]}
                // minPolarAngle={-Math.PI / 3}
                // maxPolarAngle={Math.PI / 2}
                // minAzimuthAngle={-Math.PI / 3}
                // maxAzimuthAngle={Math.PI / 3}
            />
            <Room802
                castShadow
                receiveShadow
                onClick={(e) => {
                    const position = new Vector3();
                    e.object.getWorldPosition(position);
                    console.log(e.object, position);
                }}
                rotation={[0, MathUtils.degToRad(54), 0]}
            />
            <Lights />
        </>
    );
};
