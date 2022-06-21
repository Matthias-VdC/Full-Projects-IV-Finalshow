import { SpotLight, useDepthBuffer, useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { CustomSpotLight } from "./CustomSpotLight";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { useFrame, useThree } from "react-three-fiber";
import { SpotLightHelper } from "three";

type Props = {};

export function MovingSpot({ vec = new THREE.Vector3(), ...props }) {
    const light = useRef<THREE.SpotLight>(null);
    const viewport = useThree((state) => state.viewport);
    useHelper(light, SpotLightHelper, "Green");
    useFrame((state) => {
        light.current!.position.lerp(state.camera.position.clone(), 0.1);

        light.current?.target.position.lerp(
            vec.set(
                (state.mouse.x * viewport.width) / 2,
                (state.mouse.y * viewport.height) / 2,
                0
            ),
            0.1
        );
        light.current?.target.updateMatrixWorld();
    });
    return (
        <SpotLight
            castShadow
            ref={light}
            penumbra={1}
            distance={2000}
            angle={0.25}
            attenuation={5}
            intensity={0.4}
            {...props}
        />
    );
}
export const Lights = (props: Props) => {
    const spot = useRef(null);
    const point = useRef(null);
    const tvRect = useRef(null);
    const arcade = useRef(null);

    useHelper(spot, THREE.SpotLightHelper, "cyan");
    useHelper(arcade, RectAreaLightHelper, "blue");

    const depthBuffer = useDepthBuffer({ size: 256, frames: 1 });

    return (
        <group position={[0, -40, 0]}>
            <CustomSpotLight
                lightPosition={[152, 80, 10]}
                targetPosition={[152, 30, -174]}
                intensity={1}
                distance={400}
                angle={THREE.MathUtils.degToRad(40)}
                ref={spot}
            />
            <pointLight
                ref={point}
                intensity={0.1}
                color={"lightyellow"}
                position={[-120, 185, -419]}
            />
            {/* <rectAreaLight
                width={100}
                height={100}
                ref={arcade}
                intensity={5}
                rotation={[0, -Math.PI / 2, 0]}
            /> */}
            <rectAreaLight
                width={72}
                height={50}
                ref={tvRect}
                intensity={0.4}
                position={[152, 92, 3]}
            />
        </group>
    );
};
