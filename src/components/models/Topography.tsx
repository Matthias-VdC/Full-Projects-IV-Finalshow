import React, { useRef } from "react";
import { Parcel } from ".";
import { Ground } from "./Ground";

export const Topography = ({ ...props }: JSX.IntrinsicElements["group"]) => {
    const ref = useRef<THREE.Group>(null);
    return (
        //[400, 20, 900]
        <group ref={ref} {...props}>
            <Parcel position={[50, 0, 50]} /> {/** 1 */}
            <Parcel position={[200, 0, 50]} /> {/** 2 */}
            <Parcel position={[350, 0, 50]} /> {/** 3 */}
            <Parcel position={[50, 0, 200]} /> {/** 4 */}
            <Parcel position={[275, 0, 200]} scale={[2.5, 2, 1]} /> {/** 5 */}
            <Parcel position={[50, 0, 350]} /> {/** 7 */}
            <Parcel position={[350, 0, 425]} scale={[1, 2, 2.5]} /> {/** 9 */}
            <Parcel position={[50, 0, 500]} /> {/** 10 */}
            <Parcel position={[200, 0, 500]} scale={[1, 0.5, 4]} />
            <Parcel position={[350, 0, 500]} /> {/** 10 */}
            {/** 11 */}
            <Parcel position={[125, 0, 800]} scale={[2.5, 2, 1]} /> {/** 14 */}
            <Parcel position={[50, 0, 725]} scale={[1, 2, 2.5]} /> {/** 14 */}
            <Parcel position={[350, 0, 725]} scale={[1, 2, 2.5]} /> {/** 16 */}
            <Ground />
        </group>
    );
};
