import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Mesh, MeshLambertMaterial } from "three";

export const Parcel = ({ ...props }: JSX.IntrinsicElements["group"]) => {
  const ref = useRef<THREE.Group>(null);

  const [hovered, setHovered] = useState(false);

  return (
    <group ref={ref} {...props}>
      {/* onPointerOver={() => setHovered(true)} */}
      {/* onPointerOut={() => setHovered(false)} */}
      <mesh position={[0, 25, 0]}>
        <boxBufferGeometry attach={"geometry"} args={[100, 50, 100]} />
        <meshLambertMaterial
          attach={"material"}
          //   color={hovered ? "hotpink" : "white"}
        />
      </mesh>
    </group>
  );
};
