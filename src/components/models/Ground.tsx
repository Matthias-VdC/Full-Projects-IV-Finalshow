import React, { useRef } from "react";

export const Ground = ({ ...props }: JSX.IntrinsicElements["group"]) => {
    const ref = useRef<THREE.Group>(null);
    return (
        <group ref={ref} {...props}>
            <mesh position={[200, -10, 425]}>
                <boxBufferGeometry attach={"geometry"} args={[400, 20, 850]} />
                <meshBasicMaterial attach={"material"} color="black" />
            </mesh>
        </group>
    );
};
