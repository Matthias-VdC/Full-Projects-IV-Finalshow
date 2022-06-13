import { OrbitControls } from "@react-three/drei";
import gsap, { Power4 } from "gsap/all";
import React, { useEffect, useState } from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";
import { City } from "./Models";
import { Cinema } from "./Models/Cinema";

const Box = () => {
    return (
        <mesh position={[0, 0, -400]}>
            <boxBufferGeometry attach={"geometry"} args={[50, 50, 50]} />
            <meshLambertMaterial attach={"material"} color={"white"} />
        </mesh>
    );
};

export const Scene = () => {
    const { camera } = useThree();
    const [enableOrbit, setEnableOrbit] = useState(true);
    const [currentTarget, setCurrentTarget] = useState<
        [x: number, y: number, z: number]
    >([0, 0, 0]);
    const [minDistance, setMinDistance] = useState(700);
    const animateToCinema = (event: any) => {
        console.log(event);
        event.stopPropagation();
        setEnableOrbit(false);

        if (currentTarget !== [20, -48, -550]) {
            setCurrentTarget([20, -48, -550]);

            setMinDistance(300);

            gsap.to(camera.position, {
                x: -75,
                y: 50,
                z: -400,
                duration: 1.5,
                ease: Power4.easeInOut,
            });
        } else {
            setMinDistance(700);
            setCurrentTarget([0, 0, 0]);
            gsap.to(camera.position, {
                x: 0,
                y: 100,
                z: 0,
                duration: 1.5,
                ease: Power4.easeInOut,
            });
        }
        setEnableOrbit(true);
    };

    return (
        <>
            <OrbitControls
                minDistance={minDistance}
                maxDistance={1000}
                enabled={enableOrbit}
                target={currentTarget}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-(Math.PI / 3)}
                maxAzimuthAngle={Math.PI}
            />
            <directionalLight intensity={0.4} />
            <hemisphereLight intensity={0.4} />
            <gridHelper args={[100, 100, "blue", "blue"]} />
            <City
                scale={0.4}
                position={[265, 0, 0]}
                rotation={[0, Math.PI / 4, 0]}
            />
            <Cinema
                scale={30}
                position={[-390, -48, -390]}
                rotation={[0, Math.PI / 4, 0]}
                onClick={animateToCinema}
            />
            <Box />
            {/* <CityTest /> */}
        </>
    );
};
