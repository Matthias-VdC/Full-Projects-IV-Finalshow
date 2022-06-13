import BackgroundStripes from "../components/BackgroundStripes";
import imgFrame from "../assets/tv.png";

export default function Info() {
  return (
    <div id="info-container">
      <BackgroundStripes></BackgroundStripes>
      <h1>Info</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laborum
        fugiat dolore dolores consequuntur accusantium sed cum ipsum ratione
        delectus non culpa repellat odit porro natus esse voluptatem illum
        assumenda!
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
      <img src={imgFrame} alt="campus" />
      <h2>subtitle</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        doloremque repellendus inventore, alias quas nisi nemo veniam quo
        debitis reprehenderit velit, fuga non! Ea minima blanditiis, cumque
        aliquam quod aspernatur.
      </p>
      <img src={imgFrame} alt="campus" />
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
