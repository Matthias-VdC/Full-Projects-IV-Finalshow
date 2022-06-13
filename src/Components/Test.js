import logo from "./logo.svg";
import "./App.css";
import { Canvas, useThree } from "react-three-fiber";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import gsap, { Power4 } from "gsap";
import { OrbitControls } from "@react-three/drei";

function Box({ onClick, position = [0, 0, 0], color = "red" }) {
    return (
        <mesh onClick={onClick} position={position}>
            <boxBufferGeometry attach={"geometry"} />
            <meshLambertMaterial attach={"material"} color={color} />
        </mesh>
    );
}

function Plane() {
    return (
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach={"geometry"} args={[100, 100]} />
            <meshBasicMaterial wireframe attach={"material"} color="blue" />
        </mesh>
    );
}

// const CameraController = () => {
//     const { camera, gl } = useThree();
//     useEffect(() => {
//         const controls = new OrbitControls(camera, gl.domElement);
//         controls.minDistance = 3;
//         controls.maxDistance = 20;
//         return () => {
//             controls.dispose();
//         };
//     }, [camera, gl]);
//     return null;
// };

function Scene() {
    const { camera } = useThree();
    const [animation, setAnimation] = useState(false);
    const [lastObject, setLastObject] = useState(null);

    const [controlsEnabled, setControlsEnabled] = useState(true);

    const animateCamera = (e) => {
        console.log(e);

        const rotationMatrix = new THREE.Matrix4();

        rotationMatrix.lookAt(camera.position, e.object.position, e.object.up);
        const startOrientation = camera.quaternion.clone().normalize();
        const targetOrientation = new THREE.Quaternion().setFromRotationMatrix(
            rotationMatrix
        );

        setControlsEnabled(false);
        const tl = gsap.timeline({ paused: true });
        if (lastObject) {
            if (lastObject.position !== e.object.position) {
                tl.to(
                    {},
                    {
                        duration: 1,
                        onUpdate() {
                            camera.quaternion.slerp(
                                targetOrientation,
                                this.progress()
                            );
                        },
                        // onComplete() {
                        //     controls.enabled = true;
                        // },
                    }
                ).to(
                    camera.position,
                    {
                        x: 10,
                        y: 10,
                        z: 10,
                        duration: 1,
                        ease: Power4.easeInOut,
                        onUpdate: () => {
                            camera.lookAt(e.object.position);
                        },
                        // onComplete() {
                        //     controls.enabled = true;
                        // },
                    },
                    1
                );
            }
        }
        if (!animation)
            tl.to(camera.position, {
                x: 10,
                y: 10,
                z: 10,
                duration: 1,
                ease: Power4.easeInOut,
                onUpdate: () => {
                    camera.lookAt(e.object.position);
                },
                // onComplete() {
                //     controls.enabled = true;
                // },
            });
        else
            tl.to(camera.position, {
                x: 0,
                y: 5,
                z: 3,
                duration: 1,
                ease: Power4.easeInOut,
                onUpdate: () => {
                    camera.lookAt(e.object.position);
                },
                // onComplete() {
                //     controls.enabled = true;
                // },
            });
        tl.play();
        setLastObject(e.object);
        setAnimation(!animation);
    };

    return (
        <>
            <OrbitControls enableZoom={false} enabled={controlsEnabled} />
            <hemisphereLight intensity={0.5} />
            <directionalLight intensity={0.3} />
            <group>
                <Box onClick={animateCamera} />
                <Box
                    onClick={animateCamera}
                    position={[0, 0, 5]}
                    color="blue"
                />
                <Plane />
                <gridHelper args={[100, 100, "blue", "blue"]} />
            </group>
        </>
    );
}

function Camera() {}

function Test() {
    return (
        <Canvas className="canvas" camera={{ position: [1, 2, 2] }}>
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    );
}

export default Test;
