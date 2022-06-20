import { OrbitControls, PresentationControls } from "@react-three/drei";
import gsap, { Power3, Power4 } from "gsap/all";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ThreeEvent, useThree, Vector3 } from "react-three-fiber";
import * as THREE from "three";
import { MeshLambertMaterial } from "three";
import Room from "./models/Room";
import Room2 from "./models/Room2";
import Room80 from "./models/Room80";
import Room802 from "./models/Room802";
import V4export from "./models/V4export";

const Box = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <boxBufferGeometry attach={"geometry"} args={[5, 5, 5]} />
      <meshLambertMaterial attach={"material"} color={"white"} />
    </mesh>
  );
};

type SceneProps = {
  setPreview: Dispatch<SetStateAction<React.ReactNode>>;
  setShowPreview: Dispatch<SetStateAction<boolean>>;
};

export const Scene = ({ setPreview, setShowPreview }: SceneProps) => {
  const { camera } = useThree();
  const [enableOrbit, setEnableOrbit] = useState(true);
  const [currentTarget, setCurrentTarget] = useState<Vector3>([0, 0, 0]);
  const [minDistance, setMinDistance] = useState(700);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <>
      <OrbitControls
        // minDistance={minDistance}
        enabled={enableOrbit}
        enableZoom={true}
        enablePan={true}
        target={[550, 300, 0]}
        minDistance={100}
        maxDistance={10000}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 1.7}
        minAzimuthAngle={-Math.PI / 7}
        maxAzimuthAngle={Math.PI / 10}
      />
      {/* <Room80 position={[500, -500, 4000]} scale={100} /> */}
      <Room802 position={[200, 0, -200]} />
      <spotLight intensity={0.4} color="white" position={[20, 20, 0]} />
      <ambientLight intensity={0.4} />
    </>
  );
};
