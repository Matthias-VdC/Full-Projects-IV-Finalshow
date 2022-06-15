import React, { useRef } from "react";

export const InfoBlock = ({ ...props }: JSX.IntrinsicElements["group"]) => {
    const ref = useRef<THREE.Group>(null);
    return (
        <group ref={ref} {...props}>
            <mesh position={[0, 250, 0]}>
                <boxBufferGeometry attach={"geometry"} args={[100, 500, 100]} />
                <meshLambertMaterial attach={"material"} color="red" />
            </mesh>
        </group>
    );
};
