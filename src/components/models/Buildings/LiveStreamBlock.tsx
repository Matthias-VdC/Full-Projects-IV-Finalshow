import React, { useRef } from "react";

export const LiveStreamBlock = ({
    ...props
}: JSX.IntrinsicElements["group"]) => {
    const ref = useRef<THREE.Group>(null);
    return (
        <group ref={ref} {...props}>
            <mesh position={[0, 150, 0]}>
                <boxBufferGeometry attach={"geometry"} args={[100, 300, 50]} />
                <meshLambertMaterial color={"green"} attach={"material"} />
            </mesh>
            <mesh position={[0, 75, 0]}>
                <boxBufferGeometry attach={"geometry"} args={[300, 150, 200]} />
                <meshLambertMaterial color={"green"} attach={"material"} />
            </mesh>
            <mesh position={[-200, 25, -75]}>
                <boxBufferGeometry attach={"geometry"} args={[100, 50, 50]} />
                <meshLambertMaterial color={"green"} attach={"material"} />
            </mesh>
        </group>
    );
};
