import React from "react";
import { ChatRoomProps } from "../../type";


const ChatRoom = (props : ChatRoomProps) => {
    const {handleGoChatPage} = props
    return (
        <button onClick={handleGoChatPage}>Chat Room</button>
    )
}

export default ChatRoom