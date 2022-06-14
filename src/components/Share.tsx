import { RWebShare } from "react-web-share";

function Share() {

    return(
        <div>
        <RWebShare
          data={{
            text: "Deel nu de Final Show!",
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