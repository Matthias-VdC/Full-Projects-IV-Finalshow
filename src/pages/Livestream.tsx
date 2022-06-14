import BackArrow from "../components/BackArrow";
import LiveYoutubeChat from "../components/LiveYoutubeChat";
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
            <Subscribe></Subscribe>
            <a>
                Share
            </a>
        </div>
    </div>

    </>);
}

export default Livestream;