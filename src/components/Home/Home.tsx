import "../../styles/showroom/_home.scss";
import BackgroundStripesShowcase from "../Standard/BackgroundStripesShowcase";
import Body from "./Body";

function Home() {
  return (
    <div className="homeContainer">
      <BackgroundStripesShowcase/>
      <Body/>
    </div>
  );
}

export default Home;
