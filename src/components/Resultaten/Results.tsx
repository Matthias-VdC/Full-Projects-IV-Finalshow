import "../../styles/showroom/_home.scss";
import "../../styles/showroom/_resultsNav.scss";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Winnaar from "./Winnaar";
import Genomineerd from "./Genomineerd";
import BackgroundStripesShowcase from "../Standard/BackgroundStripesShowcase";

function Results() {
  const [selection, setSelection] = useState(String);
  const [styleWin, setStyleWin] = useState("cont");
  const [styleGenom, setStyleGenom] = useState("cont");

  let params = useParams();

  useEffect(() => {
    setSelection("genomineerd");
    setStyleWin("not-active");
    setStyleGenom("activeSelection");
  }, [params.Id]);

  const setToWin = () => {
    setSelection("winnaars");
    setStyleWin("activeSelection");
    setStyleGenom("not-active");
  };

  const setToGenom = () => {
    setSelection("genomineerd");
    setStyleWin("not-active");
    setStyleGenom("activeSelection");
  };

  return (
    <main id="winGenomContainer">
      <BackgroundStripesShowcase/>
      <div id="selectionGenomOrWins">
        <p className={styleGenom} onClick={setToGenom}>
          Genomineerden
        </p>
        <p className={styleWin} onClick={setToWin}>
          Winnaars
        </p>
      </div>
      <div id="mainContent">
        {selection === "genomineerd" ? <Genomineerd /> : <Winnaar />}
      </div>
    </main>
  );
}
export default Results;
