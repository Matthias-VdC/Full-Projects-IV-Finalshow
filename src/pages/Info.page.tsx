import BackgroundStripes from "../components/BackgroundStripes";
import imgFrame from "../assets/tv.png";
import nesFrame from "../assets/nes.webp";
import campusImg from "../assets/campus.webp";

export default function Info() {
  return (
    <div id="info-container">
      <BackgroundStripes></BackgroundStripes>
      <h1>Info</h1>
      <p>
        
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam dolore
        asperiores, perspiciatis velit maiores excepturi voluptatem officia
        ipsum quis rem? Totam ullam commodi dolore repellendus quod nam tempore
        possimus temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Est fuga sapiente exercitationem doloremque debitis obcaecati
        corporis perferendis placeat quaerat? Fugit incidunt perferendis
        assumenda earum praesentium consequuntur iusto magnam iste tempora.
      </p>
      <img id="info-img1" src={imgFrame} alt="campus" />
      <h2>subtitle</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        doloremque repellendus inventore, alias quas nisi nemo veniam quo
        debitis reprehenderit velit, fuga non! Ea minima blanditiis, cumque
        aliquam quod aspernatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore impedit
        culpa pariatur ut nulla veniam sed, unde eaque architecto tenetur
        accusamus debitis voluptatibus atque corrupti commodi aliquid
        reprehenderit voluptatum maiores? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Odit facere, at alias nihil ducimus natus
        dolorem consequatur, deserunt esse qui eligendi earum dolore blanditiis.
        Odit inventore facilis optio ducimus libero! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quod culpa, labore eos eveniet rem
        necessitatibus. Animi velit laborum incidunt corrupti, magni at
        architecto saepe dolorum perspiciatis quam odio ratione reprehenderit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, unde
        expedita sunt nihil alias facilis assumenda fuga, saepe aspernatur
        nesciunt aut sint quaerat architecto, at necessitatibus impedit ex
        voluptates odio.
      </p>
      <div id="info-img2-container">
        <img id="nes-img" src={nesFrame} alt="" />
        <img id="campus-img" src={campusImg} alt="campus" />
      </div>
      <h2 className="info-subtitle">subtitle</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio
        reprehenderit delectus? Assumenda incidunt aspernatur laboriosam,
        asperiores, iure, nihil eos voluptate ullam qui corporis repellendus
        ipsam! Inventore nisi ullam autem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        praesentium qui veritatis, incidunt eaque perspiciatis, dolorem sit aut
        quasi vel voluptates consectetur officia similique nobis voluptas natus
        ut laborum eius?
      </p>
    </div>
  );
}
