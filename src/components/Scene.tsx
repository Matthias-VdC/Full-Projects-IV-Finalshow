import { OrbitControls, PresentationControls } from "@react-three/drei";
import gsap, { Power3, Power4 } from "gsap/all";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ThreeEvent, useThree, Vector3 } from "react-three-fiber";
import * as THREE from "three";
import { MeshLambertMaterial } from "three";

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
        target={[0, 0, 0]}
        // minPolarAngle={-Math.PI / 3}
        // maxPolarAngle={Math.PI / 2}
        // minAzimuthAngle={-Math.PI / 3}
        // maxAzimuthAngle={Math.PI / 3}
      />
      <spotLight intensity={0.4} color="white" position={[20, 20, 0]} />
      <ambientLight intensity={0.4} />
    </>
  );
};
