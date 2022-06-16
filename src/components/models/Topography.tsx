import React, { MutableRefObject, useRef } from "react";
import { Parcel } from ".";
import Commodore from "./Commodore";
import { Ground } from "./Ground";
import { Roads } from "./Roads";
import { Park } from "./Park";
import BuildingDiner from "./Buildings/Building_diner";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import grassImg from "../../assets/img/gras.jpg";
import Stationshop from "./Buildings/Stationshop";
import GeneralStore from "./Buildings/Building_general_store";
import BuildingFlat from "./Buildings/Building_flat";
import Door from "./Buildings/Door";
import ScifiBuilding from "./Buildings/ScifiBuilding";
import Arcade from "./Buildings/Arcade";
import ArcadeSpaceInvaders from "./Buildings/ArcadeSpaceInvaders";
import Burger from "./Buildings/Burger";
import MonacoBuilding from "./Buildings/MonacoBuilding";

export const Topography = ({ ...props }: JSX.IntrinsicElements["group"]) => {
  const ref = useRef<THREE.Group>(null);
  const grass = useLoader(THREE.TextureLoader, grassImg);
  return (
    //[400, 20, 900]
    <group ref={ref} {...props}>
      <Commodore scale={15} position={[362, 162.5, 310]} />
      <BuildingFlat position={[346, 0, 439]} scale={250} />
      <Door
        rotation={[0, Math.PI / 2, 0]}
        position={[300, 0, 355]}
        scale={0.003}
      />
      <Roads></Roads>
      <group scale={[1, 0.5, 1]} position={[200, 0.25, 50]}>
        <mesh position={[0, -0.5, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[100, 1, 100]} />
          <meshBasicMaterial attach="material" map={grass} />
        </mesh>
      </group>
      <BuildingDiner scale={3000} position={[203.5, 0, 85]} />
      {/* <Parcel position={[350, -50, 50]} /> * 3 */}
      <group scale={[1, 0.5, 1]} position={[350, 0, 50]}>
        <mesh position={[0, -0.5, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[100, 1, 100]} />
          <meshBasicMaterial attach="material" map={grass} />
        </mesh>
      </group>
      <Stationshop
        rotation={[0, 0, 0]}
        scale={2000}
        position={[360, -20, 75]}
      />
      <group scale={[1, 1, 1]} position={[350, 1, 50]}>
        <mesh position={[22, -1.05, 44.4]} rotation={[Math.PI / 35, 0, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[10, 1, 11]} />
          <meshLambertMaterial attach="material" color="lightgray" />
        </mesh>
      </group>
      <GeneralStore
        rotation={[0, -Math.PI / 2, 0]}
        scale={2600}
        position={[146, 0, 226]}
      />
      <ScifiBuilding
        rotation={[0, Math.PI, 0]}
        scale={10}
        position={[350, -20, 650]}
      />
      {/* <Arcade
        position={[330, 0, 500]}
        scale={0.4}
        rotation={[0, -Math.PI / 2, 0]}
      /> */}
      <ArcadeSpaceInvaders
        rotation={[0, -Math.PI / 2, 0]}
        position={[50, 0, 520]}
        scale={110}
      />
      <Burger position={[360, 50, 56]} scale={0.3} />
      <group scale={[1, 1, 1]} position={[350, 0, 450]}>
        <mesh position={[0, 0, 0]}>
          <boxBufferGeometry attach={"geometry"} args={[100, 1, 200]} />
          <meshLambertMaterial attach="material" color="lightgray" />
        </mesh>
      </group>
      <MonacoBuilding
        rotation={[0, -Math.PI / 2, 0]}
        scale={4}
        position={[178, 0, 781]}
      />
      {/* PARK */}
      <Park />
    </group>
  );
};
