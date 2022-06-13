import LiveYoutubeChat from "../components/LiveYoutubeChat";
import VideoPlayer from "../components/VideoPlayer";


function Livestream() {
    
    console.log("Called");

    return (<><VideoPlayer></VideoPlayer>
    <LiveYoutubeChat></LiveYoutubeChat>
    </>);
}

export default Livestream;