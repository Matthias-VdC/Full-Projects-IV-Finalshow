import Loader from "../components/Loader";
import { useState } from "react";
import ReactPlayer from "react-player";

/* This is a React component that is using the ReactPlayer component to play a video. */
function VideoPlayer() {
  const [loader, setLoader] = useState(true);
  const isLoaded = () => {
    setLoader(false);
  };
  return (
    <>
      <div className="video-container">
        {loader ? (
          <div className="loader">
            <Loader />
          </div>
        ) : null}
        <ReactPlayer
          url={"https://www.youtube.com/embed/83Lt8EaoHUI"}
          width="950"
          height="534"
          playing={true}
          onReady={isLoaded}
          pip={true}
          stopOnUnmount={false}
          muted={false}
          controls={true}
          className="reactPlayer"
        ></ReactPlayer>
      </div>
    </>
  );
}

export default VideoPlayer;
