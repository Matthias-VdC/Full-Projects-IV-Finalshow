import React, { useRef } from "react";

type Props = {};

export const TimeTableBlock = ({
    ...props
}: JSX.IntrinsicElements["group"]) => {
    const ref = useRef<THREE.Group>(null);
    return (
        <group {...props} ref={ref}>
            <mesh position={[0, 75, 0]}>
                <boxBufferGeometry attach={"geometry"} args={[30, 150, 30]} />
                <meshLambertMaterial color={"yellow"} attach={"material"} />
            </mesh>
        </group>
    );
};
