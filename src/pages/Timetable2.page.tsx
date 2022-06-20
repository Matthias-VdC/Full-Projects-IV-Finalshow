import React, { useEffect } from "react";
import { Teletext } from "@techandsoftware/teletext";
import imgFrame from "../assets/tv.png";

export default function Timetable2() {
  const teletext = Teletext();
  useEffect(() => {
    teletext.addTo("#teletext");
    teletext.showTestPage();
  }, []);

  return (
    <div id="teletext-container">
      <img src={imgFrame} alt="" />
      <div id="teletext"></div>
    </div>
  );
}
