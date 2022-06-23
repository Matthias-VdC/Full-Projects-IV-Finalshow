import {
  Billboard,
  Html,
  PresentationControls,
  SpotLight,
  useDepthBuffer,
  useHelper,
} from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { MathUtils, Object3D, Vector3 } from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { Lights, MovingSpot } from "./models/Lights";
import { Room802 } from "./models/Room802";

const Box = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <boxBufferGeometry attach={"geometry"} args={[5, 5, 5]} />
      <meshLambertMaterial attach={"material"} color={"white"} />
    </mesh>
  );
};

export const Scene = () => {
  const { camera } = useThree();
  const depthBuffer = useDepthBuffer({ size: 256, frames: 1 });
  const dir1 = new Object3D();

  return (
    <>
      {/* <OrbitControls
                // minDistance={minDistance}
                enabled={enableOrbit}
                enableZoom={true}
                target={[0, 0, 0]}
                // minPolarAngle={-Math.PI / 3}
                // maxPolarAngle={Math.PI / 2}
                // minAzimuthAngle={-Math.PI / 3}
                // maxAzimuthAngle={Math.PI / 3}
            /> */}

      <rectAreaLight
        rotation={[0, Math.PI / 2, 0]}
        width={100}
        height={100}
        intensity={5}
        position={[-100, 250, 330]}
      />
      <Room802
        castShadow
        receiveShadow
        onClick={(e) => {
          const position = new Vector3();
          e.object.getWorldPosition(position);
        }}
        rotation={[0, MathUtils.degToRad(54), 0]}
        position={[0, -40, 0]}
      />
      <Lights position={[0, -40, 0]} />
      <SpotLight
        position={[900, 800, 0]}
        target={dir1}
        castShadow
        penumbra={1}
        distance={2000}
        angle={0.5}
        attenuation={5}
        intensity={5}
        color={"#ffc294"}
      />
      <primitive object={dir1} position={[0, 200, 0]} />
      <SpotLight
        position={[0, 400, 900]}
        castShadow
        penumbra={1}
        distance={2000}
        angle={0.5}
        attenuation={5}
        intensity={8}
        color={"#0000ff"}
      />
      {/* <MovingSpot
        depthBuffer={depthBuffer}
        position={[900, 400, 900]}
        color={"white"}
      /> */}
    </>
  );
};
