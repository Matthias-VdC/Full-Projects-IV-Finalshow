import React, { useRef } from "react";
import * as THREE from "three";

export const Parcel = ({ ...props }: JSX.IntrinsicElements["group"]) => {
    const ref = useRef<THREE.Group>(null);
    console.log(props);
    return (
        <group ref={ref} {...props}>
            <mesh position={[0, 25, 0]}>
                <boxBufferGeometry attach={"geometry"} args={[100, 50, 100]} />
                <meshLambertMaterial attach={"material"} color="lightgray" />
            </mesh>
        </group>
    );
};
