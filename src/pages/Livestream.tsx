import LiveYoutubeChat from "../components/LiveYoutubeChat";
import VideoPlayer from "../components/VideoPlayer";
import "../styles/pages/_livestream.scss"
import { useNavigate } from 'react-router-dom';


function Livestream() {
    
    const navigate = useNavigate();

    return (<>
     <button onClick={() => navigate(-1)}>back</button>
    <div className="streaming">
    <VideoPlayer></VideoPlayer>
    <LiveYoutubeChat></LiveYoutubeChat>
    </div>
    <div className="streamingBottom">
        <h1>EhB Final show 2022</h1>
        <div className="actionsYoutube">
            <a className="sub">
                Subscribe
            </a>
            <a>
                Share
            </a>
        </div>
    </div>

    </>);
}

export default Livestream;