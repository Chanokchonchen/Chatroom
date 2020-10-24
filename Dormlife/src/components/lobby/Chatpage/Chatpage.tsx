import React, { useState  , useEffect , useRef} from "react";
import Chatbox from "./Chatbox";
import Header from "./Header"
import {Container,Spinner} from "react-bootstrap";
import "./chat.css"
import Sender from "./Sender";
import Receiver from "./Receiver";
import ChatList from "./ChatList";
import { useSocket } from "../../../contexts/socket.context";
import lobbyService from "../../../services/lobby.service";
import { useParams } from "react-router-dom";
import { propsSendMessage  , chat} from "../../type";
import { token1 , token2 } from "../../test"

const Chatpage = () => {
    const socket = useSocket()
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const [loading,setLoading] = useState<boolean>(true)
    const {lobbyID,userID} : {lobbyID:string,userID:string} = useParams();
    const [chats,setChats] = useState<chat[]>([])
    var token = {
        userID : "",
        name : {
            firstName : "",
            lastName : ""
        },
        profilepic : 0
    }
    if (userID === "1") {
        token = token1
    } else  {
        token = token2 
    }

    const getAllChat = async () => {
        const allChat = await lobbyService.getAllMessage(lobbyID)
        setChats(allChat)
        setLoading(false)
        scrollToBottom()
    }
    const scrollToBottom = () => {
        if (null !== messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleSubmit = async (message : string) => {
        const form : propsSendMessage = {message : message,author : token.name.firstName,userID : token.userID , profilepic : token.profilepic}
        await lobbyService.sendMessage(lobbyID,form)
        socket.emit("message")

    }

    useEffect(() => {
        console.log("mount")
        getAllChat()
        socket.on("message",()=> {
            getAllChat()
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
    <Container style={{padding:"0"}} fluid>
    {loading && <Spinner className="Absolute-Center" animation="border" variant="danger" />}
    <Header />
    <ChatList>
        {chats.map((chat,index)=> {
            return <div key={index}>
                {chat.userID === token.userID ? <Sender key={index} author={chat.author} userID={chat.userID} profilepic={chat.profilepic} message={chat.message} /> : <Receiver key={index} author={chat.author} userID={chat.userID} profilepic={chat.profilepic} message={chat.message} /> }
            </div>
            
        })}
        <div ref={messagesEndRef} />
    </ChatList>
    <Chatbox handleSubmit={handleSubmit} />
    </Container>
    )
}
export default Chatpage;


