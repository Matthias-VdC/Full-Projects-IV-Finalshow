/* eslint-disable jsx-a11y/anchor-is-valid */
import { RWebShare } from "react-web-share";

/* A function that returns a div with a share button. */
function Share() {
  return (
    <div className="shareDiv">
      <RWebShare
        data={{
          text: "Kijk mee naar de Final Show van de Erasmus hogeschool Brussel!",
          url: "https://finalshow.be/live",
          title: "Deel nu de Final Show!"
        }}
        onClick={() => console.info("share successful!")}
      >
        <a className="sharebutton">Share</a>
      </RWebShare>
    </div>
  );
}

export default Share