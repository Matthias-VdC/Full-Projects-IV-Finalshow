import { OrbitControls, PresentationControls } from "@react-three/drei";
import gsap, { Power3, Power4 } from "gsap/all";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ThreeEvent, useThree, Vector3 } from "react-three-fiber";
import * as THREE from "three";
import { City } from "./models";
import { Cinema } from "./models/Cinema";
import { RaceToyota } from "./models/RaceToyota";
import Toyota from "./models/Toyota";

const Box = () => {
    return (
        <mesh position={[0, 0, -400]}>
            <boxBufferGeometry attach={"geometry"} args={[50, 50, 50]} />
            <meshLambertMaterial attach={"material"} color={"white"} />
        </mesh>
    );
};

type SceneProps = {
    setPreview: Dispatch<SetStateAction<React.ReactNode>>;
    setShowPreview: Dispatch<SetStateAction<boolean>>;
};

export const Scene = ({ setPreview, setShowPreview }: SceneProps) => {
    const { camera } = useThree();
    const [enableOrbit, setEnableOrbit] = useState(true);
    const [currentTarget, setCurrentTarget] = useState<Vector3>([0, 0, 0]);
    const [minDistance, setMinDistance] = useState(700);
    const [hasAnimated, setHasAnimated] = useState(false);

    const animateToCinema = (event: ThreeEvent<MouseEvent>) => {
        console.log(hasAnimated);
        if (hasAnimated) return;
        event.stopPropagation();
        setHasAnimated(true);
        setEnableOrbit(false);

        const worldPosition = new THREE.Vector3();
        event.object.getWorldPosition(worldPosition);

        if (currentTarget !== worldPosition) {
            setCurrentTarget(worldPosition);

            setMinDistance(300);

            gsap.to(camera.position, {
                x: worldPosition.x + 40,
                y: 35,
                z: worldPosition.z - 50,
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
                onComplete() {},
            });
        }
        setEnableOrbit(true);
    };

    const animateBack = (e: MouseEvent) => {
        console.log(camera.position);
        if (!hasAnimated) return;
        setEnableOrbit(false);

        const rotationMatrix = new THREE.Matrix4();
        rotationMatrix.lookAt(
            camera.position,
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 100, 0)
        );

        const targetOrientation = new THREE.Quaternion().setFromRotationMatrix(
            rotationMatrix
        );

        const tl = gsap.timeline({
            paused: true,
            onComplete() {
                setEnableOrbit(true);
                setHasAnimated(false);
            },
        });
        tl.to(
            {},
            {
                duration: 1,
                onUpdate() {
                    camera.quaternion.slerp(targetOrientation, this.progress());
                },
                onComplete() {
                    setCurrentTarget([0, 0, 0]);
                    setMinDistance(700);
                },
            }
        )
            .to(camera.position, {
                x: 400,
                y: 700,
                z: 0,
                duration: 2,
                ease: Power3.easeIn,
                onUpdate() {
                    camera.lookAt(new THREE.Vector3(0, 0, 0));
                },
            })
            .to(camera.position, {
                x: 1,
                y: 700,
                z: 0,
                duration: 2,
                ease: Power3.easeOut,
                onUpdate() {
                    camera.lookAt(new THREE.Vector3(0, 0, 0));
                },
            });
        tl.play();
    };
    return (
        <>
            {/* <OrbitControls
                minDistance={minDistance}
                maxDistance={1000}
                enabled={enableOrbit}
                target={currentTarget}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={Math.PI / 4}
                maxAzimuthAngle={-Math.PI / 4}
            /> */}
            <directionalLight intensity={0.4} />
            <hemisphereLight intensity={1} />
            <gridHelper
                args={[100, 100, "blue", "blue"]}
                onClick={(e) => console.log(e)}
            />
            <PresentationControls
                global={true}
                polar={[-Math.PI / 12, Math.PI / 12]}>
                <group rotation={[0, Math.PI, 0]} onPointerMissed={animateBack}>
                    {/* <City scale={0.4} position={[185, 0, 185]} /> */}
                    <Cinema
                        scale={30}
                        // position={[0, -48, -550]}
                        onClick={animateToCinema}
                    />
                    <RaceToyota scale={10} />
                    <Box />
                </group>
            </PresentationControls>
        </>
    );
};
