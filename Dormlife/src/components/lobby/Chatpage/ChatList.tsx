import React from "react";
import { ChatListProps } from "../../type";



const ChatList = (props : ChatListProps) => {
    const {children} = props
    return (
        <div className="chats">
            {children}
        </div>
        
    )
}
export default ChatList