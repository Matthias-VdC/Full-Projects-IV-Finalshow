/**
 * It returns a div with an iframe inside it
 * @returns A div with an iframe inside.
 */
function LiveYoutubeChat() {
    return (
        <div className="chat-container">
            <iframe title="videoPlayer" src="https://youtube.com/live_chat?v=ZwIB1XPI64w&amp;embed_domain=finalshow.be"></iframe>
        </div>
    )
}

export default LiveYoutubeChat;