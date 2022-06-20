import Loader from "./Loader";
import {useState} from 'react';

/* This is a React component that is using the useState hook to set the state of the loader to true.
When the iframe is loaded, the state of the loader is set to false. */

function VideoPlayer() {
    const [loader, setLoader] = useState(true);

    const isLoaded =  () => {
        setLoader(false);
    }
    return  (
        <>
    <div className="video-container">
        {loader ? (<Loader />) : null}
                <iframe width="950" height="534" loading='lazy' onLoad={isLoaded} src="https://www.youtube.com/embed/ZwIB1XPI64w" title="Behind the scenes" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            </div>
            </>
    )
}

export default VideoPlayer;