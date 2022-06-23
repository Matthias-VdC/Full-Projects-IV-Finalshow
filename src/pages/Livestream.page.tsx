import LiveYoutubeChat from "../components/LiveYoutubeChat";
import Share from "../components/Share";
import VideoPlayer from "../components/VideoPlayer";

/**
 * The function returns a div with a back arrow, a video player, a title, a share button, and a live
 * chat
 * @returns The return is the JSX code that is being rendered on the page.
 */

function Livestream() {
  return (
    <>
          <div className="livebody">
        <div className="streaming">
          <VideoPlayer></VideoPlayer>
          <div className="streamingBottom">
            <h1>Behind the scenes - Final Show 2022</h1>
            <div className="actionsYoutube">
              <Share></Share>
            </div>
          </div>
          <LiveYoutubeChat></LiveYoutubeChat>
        </div>
      </div>
    </>
  );
}

export default Livestream;
