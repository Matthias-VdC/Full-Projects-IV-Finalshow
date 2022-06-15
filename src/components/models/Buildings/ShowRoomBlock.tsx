import React, { useRef } from "react";

type Props = {};

export const ShowRoomBlock = ({ ...props }: JSX.IntrinsicElements["group"]) => {
    const ref = useRef<THREE.Group>(null);
    return (
        <group ref={ref} {...props}>
            <mesh position={[0, 250, 0]}>
                <boxBufferGeometry attach={"geometry"} args={[200, 500, 200]} />
                <meshLambertMaterial color={"pink"} attach={"material"} />
            </mesh>
        </group>
    );
};
