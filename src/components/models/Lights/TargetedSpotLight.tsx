import { useHelper } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { SpotLight, SpotLightHelper, Vector3 } from "three";

export const TargetedSpotLight = ({
    ...props
}: JSX.IntrinsicElements["spotLight"]) => {
    const ref = useRef<SpotLight>(null);

    useHelper(ref, SpotLightHelper, "cyan");

    useEffect(() => {
        ref.current?.lookAt(new Vector3(20, 0, 20));
    }, []);

    return <spotLight ref={ref} {...props} />;
};
