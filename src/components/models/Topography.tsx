import React, { MutableRefObject, useRef } from "react";
import { Parcel } from ".";
import Commodore from "./Commodore";
import { Ground } from "./Ground";
import { Roads } from "./Roads";
import { Park } from "./Park";
import { ThreeEvent, useThree } from "react-three-fiber";
import gsap, { Power4 } from "gsap/all";
import { Mesh, Object3D, Quaternion, Vector3 } from "three";

export const Topography = ({ ...props }: JSX.IntrinsicElements["group"]) => {
    const ref = useRef<THREE.Group>(null);
    const cinemaRef = useRef<THREE.Group>(null);
    const { camera, controls } = useThree();

    const animate = (event: ThreeEvent<MouseEvent>) => {
        console.log("Controls", controls);

        const position = new Vector3();
        event.object.getWorldPosition(position);

        console.log(position);

        const tl = gsap.timeline();
        tl.to(camera.position, {
            x: 100,
            y: 20,
            z: 300,
            duration: 3.5,
            ease: Power4.easeInOut,
            onUpdate() {
                camera.lookAt(100, 20, 300);
            },
        }).to(camera.position, {
            x: 50,
            y: 200,
            z: -400,
            duration: 3.5,
            onUpdate() {
                camera.lookAt(position);
            },
            ease: Power4.easeInOut,
        });
    };

    return (
        //[400, 20, 900]
        <group ref={ref} {...props}>
            <Commodore scale={20} position={[75, 50, 0]} />
            <Parcel position={[50, 0, 50]} /> {/** 1 */}
            <Roads></Roads>
            <Parcel position={[200, 0, 50]} /> {/** 2 */}
            <Parcel position={[350, 0, 50]} /> {/** 3 */}
            <Parcel position={[50, 0, 200]} /> {/** 4 */}
            {/* <Parcel position={[275, 0, 200]} scale={[2.5, 2, 1]} /> * 5 */}
            <Parcel position={[50, 0, 350]} /> {/** 7 */}
            <Parcel position={[350, 0, 425]} scale={[1, 2, 2.5]} /> {/** 9 */}
            <Parcel position={[50, 0, 500]} /> {/** 10 */}
            {/* PARK */}
            {/* <Parcel position={[200, 100, 500]} scale={[1, 0.5, 4]} /> */}
            <Park></Park>
            <Parcel position={[350, 0, 500]} /> {/** 10 */}
            {/** 11 */}
            <Parcel position={[125, 0, 800]} scale={[2.5, 2, 1]} /> {/** 14 */}
            <Parcel position={[50, 0, 725]} scale={[1, 2, 2.5]} /> {/** 14 */}
            <Parcel
                position={[350, 0, 725]}
                scale={[1, 2, 2.5]}
                onClick={animate}
            />{" "}
            {/** 16 */}
            {/* <Ground /> */}
        </group>
    );
};
