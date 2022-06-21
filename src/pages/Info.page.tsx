import BackgroundStripes from "../components/BackgroundStripes";
import imgFrame from "../assets/tv.png";
import capgemini from "../assets/img/sponsors/capgemini.png"
import ausy from "../assets/img/sponsors/ausy.png"
import studiowasabi from "../assets/img/sponsors/studiowasabi.svg"
import nesFrame from "../assets/nes.webp";
import campusImg from "../assets/campus.webp";
import divider from "../assets/img/divider.svg";
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <div id="infoSection">
      <div id="info-container">
        <div id="infoTop" className="anchor"></div>
        <h1 className="title">Multimedia & Creatieve Technologie</h1>
        <BackgroundStripes></BackgroundStripes>
        <p>
          Gepassioneerd door die steeds veranderende geconnecteerde wereld? Ben
          jij een digitale maker van de toekomst? Of ben je gewoon benieuwd naar wat onze studenten Multimedia & Creatieve Technologie verwezenlijkt hebben dit jaar? Dan ben je hier

          op het juiste adres!
        </p>
        <p>
          Een live show, een tentoonstelling, en zelfs een infodag: dit staat er
          jou te wachten op vrijdag 24 en zaterdag 25 juni!
        </p>
        <div id="info-img1-container">
          <img id="info-img1" src={imgFrame} alt="campus" />
        </div>
        <div id="livestreamTitle" className="anchor"></div>
        <h2 className="info-subtitle">
          Livestream
        </h2>
        <p>
          Op vrijdag 24 juni worden de beste werken van onze studenten gepresenteerd tijdens onze jaarlijkse Final Show: een show
          boordevol talent, interviews, en nog veel meer! Tijdens deze
          livestream worden ook de winnaars aangekondigd voor elke categorie,
          dit wil je dus zeker niet missen!
        </p>
        <div className="practicalInfo">
          <p className="bold">WANNEER?</p>
          <p> 24 juni om 19u.</p>
        </div>

        <Link to="/live" className="multicolor-btn">
          LIVE SHOW
        </Link>


        <img src={divider} alt="" className="divider"/>
        <div id="infoDagSection" className="anchor"></div>

        <h2 className="info-subtitle">
          Infodag
        </h2>
        <p>
          Zin om langs te komen op onze campus? Het kan! Op zaterdag 25 juni
          gooien wij onze deuren open tot 15u, en jij bent uitgenodigd! Kom
          eens proeven van het leven als een student Multimedia & Creatieve
          Technologie... en wie weet begin jij in september aan onze opleiding!
        </p>

        <div className="practicalInfo">
          <p className="bold">WANNEER?</p>
          <p>Zaterdag 25 juni van 10u tot 15u.</p>
        </div>
        <div className="practicalInfo">
          <p className="bold">WAAR?</p>
          <p>Campus Kaai, Nijverheidskaai 170, 1070 Anderlecht.</p>
        </div>

        <img src={divider} alt="" className="divider" />

        <div id="expoSection" className="anchor"></div>
        <h2 className="info-subtitle">
          Expo
        </h2>
        <p>
          Welkom bij de Final Show expositie! Hier vind je verschillende
          projecten van afstuderende studenten in alle vier categorieën: Web & App, Smart Technology,
          Motion en Extended Reality.
          Volg de wegwijzers richting de parking van campus Kaai.
        </p>
        <p>
          Geraak je niet op de campus, maar wil je toch de eindwerken bekijken?
          Dan hebben we goed nieuws, want alle eindwerken zijn ook online te
          bekijken in onze showroom!
        </p>
        <div className="practicalInfo">
          <p className="bold">WANNEER?</p>
          <p>Vrijdag 24 juni.</p>
          <p>Zaterdag 25 juni van 10u tot 13u.</p>
        </div>
        <div className="practicalInfo">
          <p className="bold">WAAR?</p>
          <p>
            Campus Kaai naast het Medialab, Nijverheidskaai 170, 1070 Anderlecht.
          </p>
        </div>
        <Link to="admin/showcase" className="disabled-btn">
          SHOWCASE
        </Link>
        <img src={divider} alt="" className="divider" />
        <h2 className="info-subtitle">
            Met dank aan onze sponsors
          </h2>
      
          <div className="sponsorlogocontainer">
            <a href="https://www.capgemini.com/be-en/" target="_blank" rel="noreferrer"><img src={capgemini} alt="Capgemini"/></a>
            <a href="https://www.ausy.be/en/" target="_blank" rel="noreferrer"><img src={ausy} alt="Ausy" /></a>
            <a href="https://www.studiowasabi.be/" target="_blank" rel="noreferrer"><img src={studiowasabi} alt="Studio Wasabi"/></a>
          </div>
  
      </div>
    </div>
  );
}
