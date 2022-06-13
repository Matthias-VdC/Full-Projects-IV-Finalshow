import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Plane = () => {
    return (
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach={"geometry"} args={[100, 100]} />
            <meshLambertMaterial attach={"material"} color={"white"} />
        </mesh>
    );
};

export const Scene = () => {
    // const gltf = useLoader(GLTFLoader, "scene.gltf");

    return (
        <>
            <directionalLight intensity={0.4} />
            <hemisphereLight intensity={0.4} />
            <Plane />
            <gridHelper args={[100, 100, "blue", "blue"]} />
            {/* <primitive object={gltf.scene} /> */}
        </>
    );
};
