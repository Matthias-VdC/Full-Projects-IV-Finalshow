import React from "react";
import vhsYellow from "../assets/img/yellow-vhs.png";
import vhsRed from "../assets/img/red-vhs.png";
import vhsBlue from "../assets/img/blue-vhs.png";
import vhsOrange from "../assets/img/orange-vhs.png";
import "../styles/components/_vhs.scss";

interface IProps {
  color: string;
  subtitle?: string;
  title: string;
  startTime: string;
  endTime: string;
}

export default function VHS(props: IProps) {
  let bgImg: string = vhsYellow;
  let css: string = `
  .vhs-container {
    transform: rotate(${Math.floor(Math.random() * (2 - -2) + -2)}deg);
  }
  .title-container h1 {
    transform: rotate(${Math.floor(Math.random() * (2 - -2) + -2)}deg);
    transform: translate(${Math.floor(
      Math.random() * (10 - -10) + -10
    )}px, ${Math.floor(Math.random() * (10 - -10) + -10)}px);
  }
  .title-container h2 {
    transform: rotate(${Math.floor(Math.random() * (2 - -2) + -2)}deg);
    transform: translate(${Math.floor(
      Math.random() * (10 - -10) + -10
    )}px, ${Math.floor(Math.random() * (10 - -10) + -10)}px);
  }
  `;

  switch (props.color) {
    case "yellow":
      bgImg = vhsYellow;
      break;
    case "red":
      bgImg = vhsRed;
      break;
    case "blue":
      bgImg = vhsBlue;
      break;
    case "orange":
      bgImg = vhsOrange;
      break;
    default:
      bgImg = vhsYellow;
      break;
  }
  return (
    <div className="vhs-container">
      <div className="timing-container">
        <p className="start-time">{props.startTime}</p>
        <p className="end-time">{props.endTime}</p>
      </div>
      <div className="title-container">
        <h2>{props.subtitle || ""}</h2>
        <h1>{props.title}</h1>
      </div>
      <img src={bgImg} alt="" className="vhs-bg-image" width="10" height="1" />
      <style>{css}</style>
    </div>
  );
}
