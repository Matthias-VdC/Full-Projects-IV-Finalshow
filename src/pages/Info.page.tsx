import BackgroundStripes from "../components/BackgroundStripes";
import imgFrame from "../assets/tv.png";
import nesFrame from "../assets/nes.webp";
import campusImg from "../assets/campus.webp";

export default function Info() {
  return (
    <div id="info-container">
      <h1>Multimedia & Creatieve Technologie</h1>
      <BackgroundStripes></BackgroundStripes>
      <p>
        Gepassioneerd door die steeds veranderende geconnecteerde wereld?
        Ben jij een digitale maker van de toekomst? Of ben je gewoon benieuwd naar
        wat onze laatstejaars verwezenlijkt hebben dit jaar? Dan ben je hier op het juiste adres!
      </p>
      <p>
        Een live show, een tentoonstelling, en zelfs een infodag: dit staat er jou te wachten op vrijdag 24
        en zaterdag 25 juni!
      </p>
      <div id="info-img1-container">
        <img id="info-img1" src={imgFrame} alt="campus" />
      </div>
      <h2 id="livestreamTitle">Livestream</h2>
      <p>
        Op vrijdag 24 juni worden de beste werken van onze laatstejaars studenten gepresenteerd
        tijdens onze jaarlijkse Final Show: een show boordevol talent, interviews, en nog veel meer!
        Tijdens deze livestream worden ook de winnaars aangekondigd voor elke categorie, dit wil je dus zeker niet missen!
      </p>
      <div className="practicalInfo">
        <p>
          WANNEER?
        </p>
        <p> 24 juni om 19u.</p>
      </div>
      
      <h2 className="info-subtitle">Infodag</h2>
      <p>
        Zin om langs te komen op onze campus? Het kan! Op zaterdag 25 juni gooien wij onze deuren
        open vanaf 10u, en jij bent uitgenodigd! Kom eens proeven van het leven als een student Multimedia &
        Creatieve Technologie... en wie weet begin jij in september aan onze opleiding!
      </p>
      <div className="practicalInfo">
        <p>WANNEER?</p> 
        <p>
          Zaterdag 25 juni van 10u tot 15u.
        </p>
      </div>
      <div className="practicalInfo">
        <p>WAAR?</p>
        <p>
            Campus Kaai, Nijverheidskaai 170, 1070 Anderlecht.
        </p>
      </div>
    </div>
  );
}
