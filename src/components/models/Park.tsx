import { useRef } from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import PalmTree1 from "./PalmTree1";
import PalmTree2 from "./PalmTree2";
import img from "../../assets/img/gras.jpg";

export const Park = ({ ...props }: JSX.IntrinsicElements["group"]) => {
  const ref = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <group ref={ref} {...props}>
      <group scale={[1, 0.5, 1]} position={[200, 0, 450]}>
        <mesh position={[0, -0.5, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[100, 1, 100]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
      </group>
      <group scale={[1, 0.5, 1]} position={[200, 0, 350]}>
        <mesh position={[0, -0.5, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[100, 1, 100]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
      </group>
      <group scale={[1, 0.5, 1]} position={[200, 0, 550]}>
        <mesh position={[0, -0.5, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[100, 1, 100]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
      </group>
      <group scale={[1, 0.5, 1]} position={[200, 0, 650]}>
        <mesh position={[0, -0.5, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[100, 1, 100]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
      </group>
      <PalmTree1 position={[225, 0, 325]} scale={0.02} />
      <PalmTree2 position={[225, 0, 325]} scale={0.02} />
    </group>
  );
};
