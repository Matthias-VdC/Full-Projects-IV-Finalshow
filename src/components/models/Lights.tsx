import { SpotLight, useDepthBuffer, useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { CustomSpotLight } from "./CustomSpotLight";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { useFrame, useThree, Vector3 } from "react-three-fiber";
import { SpotLightHelper } from "three";

type Props = {
  position: Vector3;
};

export function MovingSpot({
  vec = new THREE.Vector3(),
  intensity = 5,
  ...props
}) {
  const light = useRef<THREE.SpotLight>(null);
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current?.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current?.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={2000}
      angle={0.35}
      attenuation={5}
      intensity={intensity}
      {...props}
    />
  );
}
export const Lights = (props: Props) => {
  const spot = useRef(null);
  const point = useRef(null);
  const tvRect = useRef(null);
  const tvSpot = useRef(null);
  const arcade = useRef(null);

  // useHelper(spot, THREE.SpotLightHelper, "cyan");
  // useHelper(tvSpot, THREE.SpotLightHelper, "violet");
  // useHelper(point, THREE.PointLightHelper, 50, "red");
  useHelper(tvRect, RectAreaLightHelper, "pink");
  // useHelper(arcade, RectAreaLightHelper, "blue");

  return (
    <group position={props.position}>
      {/* <CustomSpotLight
                lightPosition={[300, 1000, 300]}
                targetPosition={[0, 40, 0]}
                distance={1500}
                angle={THREE.MathUtils.degToRad(15)}
                penumbra={1}
                ref={spot}
            />
            <pointLight
                ref={point}
                intensity={0.1}
                color={"lightyellow"}
                position={[-120, 185, -419]}
            />
            {/* <rectAreaLight
                width={100}
                height={100}
                ref={arcade}
                intensity={5}
                rotation={[0, -Math.PI / 2, 0]}
            /> */}
      <rectAreaLight
        width={72}
        height={50}
        ref={tvRect}
        intensity={10}
        position={[152, 92, 3]}
      />
      <CustomSpotLight
        lightPosition={[152, 92, 3]}
        targetPosition={[152, 40, -300]}
        distance={1500}
        angle={THREE.MathUtils.degToRad(55)}
        penumbra={0.3}
        ref={tvSpot}
        intensity={0.5}
      />
    </group>
  );
};
