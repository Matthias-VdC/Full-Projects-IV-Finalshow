import React from "react";
import vhsYellow from "../assets/img/vhs-yellow.jpg";
import "../styles/components/_vhs.scss";

export default function VHS() {
  return (
    <div className="vhs-container">
      <div className="timing-container">
        <p className="start-time">18:00:00</p>
        <p className="end-time">18:30:00</p>
      </div>
      <div className="title-container">
        <h2>Uitreiking</h2>
        <h1>WEB & APP</h1>
      </div>
      <img
        src={vhsYellow}
        alt=""
        className="vhs-bg-image"
        width="10"
        height="1"
      />
    </div>
  );
}
