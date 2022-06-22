
/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * It returns a div with 5 child a elements
 * @returns A div with 5 a tags inside.
 */

import React from "react";
export default function BackgroundStripes() {


  return (
    <div id="stripes-container">
      <a href="#infoTop" id="pink" className="stripe stripe-hover">
        <p>Multimedia &</p>
        <p>Creatieve Technologie</p>
      </a>
      <a id="yellow" className="stripe">

      </a>
      <a href="#livestreamTitle" id="orange" className="stripe stripe-hover">
        <p>Livestream</p>
        <p>24/06 19u</p>
      </a>
      <a href="#infoDagSection" id="red" className="stripe stripe-hover">
        <p>Infodag</p>
        <p>25/06 10u</p>
      </a>
      <a href="#expoSection" id="blue" className="stripe stripe-hover">
        <p>Expo</p>
        <p>24/06 & 25/06</p>
      </a>
    </div>
  );
}
