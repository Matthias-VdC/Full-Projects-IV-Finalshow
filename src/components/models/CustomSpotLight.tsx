import { useHelper } from "@react-three/drei";
import React, { useRef, useEffect, useMemo } from "react";
import { extend, useThree, Vector3 } from "react-three-fiber";
import { Object3D, SpotLight, SpotLightHelper, MathUtils } from "three";

extend({ Object3D });

type Props = {
    lightPosition: Vector3 | undefined;
    targetPosition: Vector3 | undefined;
    distance?: number;
    intensity?: number;
    angle?: number;
    penumbra?: number;
    decay?: number;
};

export const CustomSpotLight = React.forwardRef(
    (
        {
            intensity = 1,
            distance = 300,
            angle = MathUtils.degToRad(30),
            penumbra = 0,
            decay = 1,
            ...props
        }: Props,
        ref
    ) => {
        const light = useMemo(
            () =>
                new SpotLight(
                    0xffffff,
                    intensity,
                    distance,
                    angle,
                    penumbra,
                    decay
                ),
            []
        );

        return (
            <>
                <primitive
                    ref={ref}
                    object={light}
                    position={props.lightPosition}
                />
                <primitive
                    object={light.target}
                    position={props.targetPosition}
                />
            </>
        );
    }
);
