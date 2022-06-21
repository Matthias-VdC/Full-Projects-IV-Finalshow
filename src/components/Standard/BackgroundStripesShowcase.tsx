import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/showroom/Colors.scss";
import "../../styles/components/_backgroundstripes.scss"

export default function BackgroundStripesShowcase() {
  const location = useLocation();
  console.log("Backgroudn Stripes");
  
  return (
    <>
      
        <div id="stripes-container">
          <a href="#info-container" id="pink" className="stripe stripe-hover">
            <p>Resultaat</p>
          </a>
          <a id="yellow" className="stripe"></a>
          <a
            href="#livestreamTitle"
            id="orange"
            className="stripe stripe-hover"
          >
            <p>Indienen</p>
          </a>
          <a href="#infoDagSection" id="red" className="stripe stripe-hover">
            <p>Stemming</p>
          </a>
          <a href="#expoSection" id="blue" className="stripe stripe-hover"></a>
        </div>
      
      
    </>
  );
}
