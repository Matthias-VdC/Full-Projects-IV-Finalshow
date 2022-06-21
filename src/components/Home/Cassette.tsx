import { useEffect, useState } from "react";
import "../../styles/showroom/_cassette.scss";
import "../../styles/showroom/_detailSide.scss";
import side_1 from "../../assets/showroom/side_1.png";
import side_2 from "../../assets/showroom/side_2.png";
import side_3 from "../../assets/showroom/side_3.png";
import side_4 from "../../assets/showroom/side_4.png";
import side_5 from "../../assets/showroom/side_5.png";

import DetailSide from "./details/detailSide";
import { Link } from "react-router-dom";

export default function Cassette(props: any) {
  const [cassette, setCassette] = useState(String);
  const [cassetteNumber, setCassetteNumber] = useState(Number);
  //const [styling, setStyle] = useState(String);
  const [classStyle, setClassStyle] = useState(String);
  const [cluster, setCluster] = useState(String);
  const [showSide, setShowSide] = useState(Boolean);

  useEffect(() => {
    setShowSide(false);

    var number = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    if (number === 1) {
      setCassette(side_1);
      setCassetteNumber(1);
      setClassStyle("cassetteName white");
    } else if (number === 2) {
      setCassette(side_2);
      setCassetteNumber(2);
      setClassStyle("cassetteName black");
    } else if (number === 3) {
      setCassette(side_3);
      setCassetteNumber(3);
      setClassStyle("cassetteName white");
    } else if (number === 4) {
      setCassette(side_4);
      setCassetteNumber(4);
      setClassStyle("cassetteName white");
    } else if (number === 5) {
      setCassette(side_5);
      setCassetteNumber(5);
      setClassStyle("cassetteName white");
    }

    if (props.data.cluster === "webApp") {
      setCluster("Web");
    } else if (props.data.cluster === "motion") {
      setCluster("Motion");
    } else if (props.data.cluster === "smartTechnologies") {
      setCluster("Smart");
    } else if (props.data.cluster === "extendedReality") {
      setCluster("Reality");
    }
  }, [props.data.cluster]);

  const changeShowSide = () => {
    if (showSide === false) {
      setShowSide(true);
    } else {
      setShowSide(false);
    }
  };

  return (
    <div className="cassetteComplete">
      <Link to="/admin/showroom/detail" state={props.data}>
        <div className="fullCassetteMob">
          <div className="cassette">
            <div className="cassetteNameDiv">
              <h1 className={classStyle}>
                {props.data.title}
              </h1>
            </div>
            <img src={cassette} alt="cassette" className="imgCassette" />
            <div className="clusterColors">
              <div className={cluster}></div>
              <div className={cluster}></div>
            </div>
          </div>
        </div>
      </Link>

      <div className="fullCassetteWeb">
        <div
          className={
            showSide
              ? "cassette cassetteOpenAnimation"
              : "cassette cassetteClosedAnimation"
          }
          onClick={changeShowSide}
        >
          <div className="cassetteNameDiv" key={props.keyCassette+1}>
            <h1 className={classStyle}>
              {props.data.title}
            </h1>
          </div>
          <img src={cassette} alt="cassette" className="imgCassette" />
          <div className="clusterColors" key={props.keyCassette}>
            <div className={cluster}></div>
            <div className={cluster}></div>
          </div>
        </div>
        {showSide ? (
          <DetailSide
            keyCassette={props.keyCassette}
            data={props.data}
            cassette={{ cassetteNumber }}
          ></DetailSide>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
