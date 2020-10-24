import React, { useEffect, useState } from "react";
import HomeButton from "./HomeButton";
import { useHistory ,useParams } from "react-router-dom";
import CloseLobby from "./CloseLobby";
import DeleteLobby from "./DeleteLobby";
import LeaveLobby from "./LeaveLobby";
import Ready from "./Ready"
import ImageList from "./ImageList";
import ChatRoom from "./ChatRoom";
import { Lobby } from "../../type";
import lobbyService from "../../../services/lobby.service";
import {useSocket} from "../../../contexts/socket.context"
import {token1 , token2} from "../../test"


const LobbyPage = () => {
    const socket = useSocket();
    const history = useHistory();
    const initialstate : Lobby = {
        owner : {
            userID : "",
            name : {
                firstName : "",
                lastName : ""
            },
            profilepic : 0,
            ready : false
        },
        member : [],
        dormName : "",
        maxMember : 0,
        roomType : "",
        chat : []
    }

    const [lobbyInfo,setLobbyInfo] =  useState<Lobby>(initialstate)
    const {lobbyID,userID} : {lobbyID:string,userID:string} = useParams(); 
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
    } else {
        token = token2     
    }
    const handleGoHome = () => {
        history.push("/")
    }
    const handleReady = async () => {
        await setLobbyReadyInfo()
        socket.emit("ready")
    }
    const getLobbyInfo = async () => {
        const lobby = await lobbyService.getSpecificLobby(lobbyID)
        console.log(lobby)
        setLobbyInfo(lobby)
    }
    const setLobbyReadyInfo = async () => {
        const lobby = await lobbyService.setReady(lobbyID,token.userID)
        setLobbyInfo(lobby)
    }
    const handleGoChatPage = () => {
        history.push(`/lobby/${lobbyID}/chat/${token.userID}`)
    }
    const handleKick = async (userID : string) => {
        await lobbyService.kickMember(lobbyID,userID)
        socket.emit("kick",userID)
    }
    const handleLeave = async () => {
        await lobbyService.leaveLobby(lobbyID,userID)
        history.push("/")
        socket.emit("leave")
    }
    const handleDelete = async () => {
        await lobbyService.deleteLobby(lobbyID)
        socket.emit("delete")
    }
    const handleCloseLobby = async () => {
        await lobbyService.closeLobby(lobbyID)
        socket.emit("close")
    }

    useEffect(() => {
        getLobbyInfo()
        socket.on("join",()=> {
            getLobbyInfo()
        })
        socket.on("ready",()=> {
            getLobbyInfo()
        })
        socket.on("leave",()=> {
            getLobbyInfo()
        })
        socket.on("close",()=> {
            history.push("/")
        })
        socket.on("delete",()=>{
            history.push("/")
        })
        socket.on("kick",(userID : string)=> {
            if (userID === token.userID) {
                history.push("/")
            } else {
                getLobbyInfo()
            }     
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <HomeButton handleGoHome={handleGoHome} />
            <h1>{lobbyInfo.dormName} {lobbyInfo.roomType}</h1>
            <p>Lobby ID {lobbyID}</p>

            {(lobbyInfo.owner.userID === token.userID) ? 
            <>
                <ImageList handleKick={handleKick} isOwner={true} maxMember={lobbyInfo.maxMember} member={lobbyInfo.member}  />
                <CloseLobby disable={lobbyInfo.member.some(mem => mem.ready === false)} handleCloseLobby={handleCloseLobby} />
                <DeleteLobby handleDelete={handleDelete} />
            </> 
            : 
            <>
                <ImageList handleKick={handleKick} isOwner={false} maxMember={lobbyInfo.maxMember} member={lobbyInfo.member}  />
                {lobbyInfo.member.find((mem => mem.userID === token.userID))?.ready ? <Ready text="Unready" handleReady={handleReady} /> : <Ready text="Ready" handleReady={handleReady} /> }
                <LeaveLobby handleLeave={handleLeave} />
            </> 
            }
            <ChatRoom  handleGoChatPage={handleGoChatPage}/>
        </>
    )
}

export default LobbyPage;