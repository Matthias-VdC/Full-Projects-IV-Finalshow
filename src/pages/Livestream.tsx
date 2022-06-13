import LiveYoutubeChat from "../components/LiveYoutubeChat";
import VideoPlayer from "../components/VideoPlayer";
import "../layouts/streaming.scss"


function Livestream() {
    
    console.log("Called");

    return (<>
    <div className="streaming">
    <VideoPlayer></VideoPlayer>
    <LiveYoutubeChat></LiveYoutubeChat>
    </div>
    </>);
}

export default Livestream;