import logo from "./logo.svg";
import "./App.css";
import { Canvas, useThree } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import gsap, { Power4 } from "gsap";

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
            <meshLambertMaterial attach={"material"} color="grey" />
        </mesh>
    );
}

function Scene() {
    const { camera } = useThree();
    const [animation, setAnimation] = useState(false);
    const [lastObject, setLastObject] = useState(null);

    const animateCamera = (e) => {
        console.log(e);
        const startRotation = new THREE.Euler().copy(camera.rotation);
        camera.lookAt(e.object.position);
        const endRotation = camera.rotation;
        camera.rotation.copy(startRotation);
        const startOrientation = camera.quaternion.clone().normalize();
        const targetOrientation = e.object.quaternion.clone().normalize();

        const tl = gsap.timeline({ paused: true });
        if (lastObject) {
            if (lastObject.position !== e.object.position) {
                camera.quaternion.rotateTowards(endRotation, 50);
                tl.to(
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
            });
        tl.play();
        setLastObject(e.object);
        setAnimation(!animation);
    };

    return (
        <>
            <hemisphereLight intensity={0.5} />
            <directionalLight intensity={0.3} />
            <Box onClick={animateCamera} />
            <Box onClick={animateCamera} position={[0, 0, 10]} color="blue" />
        </>
    );
}

function Camera() {}

function App() {
    return (
        <Canvas className="canvas" camera={{ position: [1, 2, 2] }}>
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    );
}

export default App;
