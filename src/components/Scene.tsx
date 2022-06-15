import { OrbitControls, PresentationControls } from "@react-three/drei";
import gsap, { Power3, Power4 } from "gsap/all";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ThreeEvent, useThree, Vector3 } from "react-three-fiber";
import * as THREE from "three";
import {
  Ground,
  InfoBlock,
  LiveStreamBlock,
  ShowRoomBlock,
  TimeTableBlock,
  Topography,
} from "./models";
import { Isopotamia } from "./models/Buildings/Isopotamia";
import Commodore from "./models/Commodore";
import { StreetLight } from "./models/Objects";

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
        target={currentTarget}
        minPolarAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      />
      <directionalLight intensity={0.4} />
      <hemisphereLight intensity={1} />
      {/* <gridHelper
        args={[100, 100, "blue", "blue"]}
        onClick={(e) => console.log(e)}
      /> */}
      {/* // <Isopotamia scale={20} /> */}
      {/* <StreetLight scale={20} /> */}
      <Topography rotation={[0, Math.PI, 0]} position={[200, 0, 300]} />
    </>
  );
};
