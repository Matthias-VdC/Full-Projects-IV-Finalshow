import { Billboard, Html } from "@react-three/drei";
import React from "react";
import { Vector3 } from "react-three-fiber";

type Props = {
  onClickItem: () => void;
  label: string;
  text: string;
  onClickPointer: () => void;
  isClicked: boolean;
  onClickMiss: () => void;
  position?: Vector3;

  /* PHONE (TIMETABLE PAGE) */
};
export const NavBillboard = ({ position = [0, 10, -50], ...props }: Props) => {
  return (
    <Billboard
      onPointerMissed={() => props.onClickMiss()}
      follow={true}
      position={position}
    >
      <Html>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="map_globalButton"
            onClick={(e) => {
              props.onClickPointer();
            }}
          />
          <p
            style={{
              display: props.isClicked ? "none" : "inherit",
              margin: "auto",
              userSelect: "none",
              textAlign: "center",
              fontWeight: "800",
              color: "#fff",
            }}
          >
            {props.label}
          </p>
        </div>
        <div
          className="map_globalLink"
          style={{
            display: props.isClicked ? "inherit" : "none",
          }}
          onClick={(e) => props.onClickItem()}
        >
          <p className="map_subText">{props.text}</p>
        </div>
      </Html>
    </Billboard>
  );
};
