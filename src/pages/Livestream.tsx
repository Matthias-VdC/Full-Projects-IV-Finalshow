import BackArrow from "../components/BackArrow";
import LiveYoutubeChat from "../components/LiveYoutubeChat";
import Share from "../components/Share";
import Subscribe from "../components/Subscribe";
import VideoPlayer from "../components/VideoPlayer";



function Livestream() {
    


    return (<>
    <BackArrow></BackArrow>
    <div className="streaming">
    <VideoPlayer></VideoPlayer>
    <LiveYoutubeChat></LiveYoutubeChat>
    </div>
    <div className="streamingBottom">
        <h1>EhB Final show 2022</h1>
        <div className="actionsYoutube">
            <Share></Share>
        </div>
    </div>

    </>);
}

export default Livestream;