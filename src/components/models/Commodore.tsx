/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SeanNicolas (https://sketchfab.com/SeanNicolas)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/commodore-pet-53ed8fb628ac44589fa49e812ed87695
title: Commodore PET
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube001_0: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    PET_texture_floor_0: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    PET_texture_floor: THREE.MeshStandardMaterial;
  };
};

export default function Commodore({
  ...props
}: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    "/commodore_pet/scene.gltf"
  ) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <group position={[4.08, 1.96, 3.8]} rotation={[-0.62, 0.29, 2.66]} />
          <group
            position={[1.51, -5.95, 1.17]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <group position={[1.49, -0.41, -1.88]} rotation={[-Math.PI, 0, 0]} />
          <group position={[1.49, -0.41, 1.31]}>
            <mesh
              geometry={nodes.Cube001_0.geometry}
              material={materials.Material}
            />
            <mesh
              geometry={nodes.Cube001_1.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[2.38, -0.91, 0.01]} scale={15.06}>
            <mesh
              geometry={nodes.PET_texture_floor_0.geometry}
              material={materials.PET_texture_floor}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/commodore_pet/scene.gltf");
