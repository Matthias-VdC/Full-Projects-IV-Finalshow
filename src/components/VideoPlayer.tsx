import "../layouts/videoplayer.scss"


function VideoPlayer() {

    return  (
        <div className="video-container">
        <iframe width="950" height="534" src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>      
            </div>
    )
}

export default VideoPlayer;