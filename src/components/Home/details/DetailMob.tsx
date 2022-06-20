import share from "../../../assets/showroom/share_logo.png";
import cross from "../../../assets/showroom/cross_logo.png";

import "../../../styles/showroom/_detailSide.scss";

import { useNavigate, useLocation } from "react-router-dom";
import phone from "../../../assets/showroom/phone.png";
import mail from "../../../assets/showroom/email.png";
import linkedin from "../../../assets/showroom/linkedin.png";
import instagram from "../../../assets/showroom/instagram.png";
import Slider from "./Slider";
import { useState, useEffect } from "react";

export default function DetailMob(props: any) {
  const navigate = useNavigate();

  const location = useLocation();
  const state: any = location.state;

  const [cluster, setCluster] = useState(String);
  const [clusterClass, setClusterClass] = useState(String);

  useEffect(() => {
    if (state.cluster === "web" || state.cluster === "webApp") {
      setCluster("Web en App");
      setClusterClass("clusterNameMob Web");
    } else if (
      state.cluster === "interactiveMotion" ||
      state.cluster === "motion"
    ) {
      setCluster("Motion");
      setClusterClass("clusterNameMob Motion");
    } else if (
      state.cluster === "digitalMaking" ||
      state.cluster === "smartTechnologies"
    ) {
      setCluster("Smart Technologies");
      setClusterClass("clusterNameMob Smart");
    } else if (
      state.cluster === "alternativeReality" ||
      state.cluster === "extendedReality"
    ) {
      setCluster("Extended Reality");
      setClusterClass("clusterNameMob Reality");
    }
  }, []);

  return (
    <div className="detailPageContainer">
      <div id="stripeClusterMob">
        <h3 className={clusterClass}>{cluster}</h3>
        <div onClick={() => navigate(-1)} className="routingLinks">
          <img src={cross} alt="closing-img" id="cross" />
        </div>
      </div>

      <h1 id="projectArtistMob">
        {state.user.map((users: any) => {
          return users.name;
        })}
      </h1>
      <div id="projectNameMob">
        <h5 className="projectPlaceHolderMob">PROJECT:</h5>
        <p className="nameProjectMob">{state.title}</p>
      </div>

      <Slider data={state} />

      <h3 className="beschrijvingPlaceholderMob">PROJECTBESCHRIJVING</h3>
      <p className="beschrijvingMob">{state.description}</p>

      <div id="personalInfoMob">
        <div id="contactInfoContainerMob">
          {state.socials.map((social: any) => {
            return (
              <div>
                <div className="infoFlexMob">
                  <img src={phone} alt="phone icon" className="socialIcon" />
                  <p className="invulTextMob">{social.tel}</p>
                </div>
                <div id="maiMobl" className="infoFlexMob">
                  <img src={mail} alt="mail icon" className="socialIcon" />
                  <p className="mailAdresMob invulTextMob">
                    {state.user.map((users: any) => {
                      return users.email;
                    })}
                  </p>
                </div>
                <div id="linkedInMob" className="infoFlexMob">
                  <img
                    src={linkedin}
                    alt="linkedin icon"
                    className="socialIcon"
                  />
                  <p className="invulTextMob">{social.linkedin}</p>
                </div>
                <div id="InstagramMob" className="infoFlexMob">
                  <img
                    src={instagram}
                    alt="instagram icon"
                    className="socialIcon"
                  />
                  <p className="invulTextMob">{social.instagram}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="shareContainerMob">
        <img src={share} alt="share-icon" id="shareIconMob" />
      </div>
    </div>
  );
}
