import { LiveChat } from "youtube-chat"


function LiveYoutubeChat() {

    const liveChat = new LiveChat({liveId: "https://youtu.be/5qap5aO4i9A"})

    const ok = liveChat.start()
    if (!ok) {
      console.log("Failed to start, check emitted error")
      }  

    return (<h1>Hello</h1>)
}

export default LiveYoutubeChat;