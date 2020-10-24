import axios from "axios";
import { ObjectID } from "mongodb"
import { Token } from "../components/type"
const API_URL = "http://localhost:2000/lobbies/"


interface propsCreateLobby {
    maxMember : number
    dormName : string,
    roomType : string
    token : Token
    //ควรเป็น dormName เพราะรับมาเป็น dormName
}

interface propsJoinLobby {
    token : Token,
    id? : ObjectID
}

interface propsSendMessage {
    author : string,
    userID : string,
    message : string,
    profilepic : number
}

async function getLobbys() {
    const result = await axios.get(`${API_URL}`)
    return result.data
}
async function createLobby(form : propsCreateLobby) {
    const result = await axios.post(`${API_URL}`,form)
    return result.data
}

async function joinLobby(form : propsJoinLobby) {
    const {token , id} = form
    const result = await axios.post(`${API_URL}${id}/join`,token)
    return result

}

async function getSpecificLobby(lobbyID : string) {
    const result = await axios.get(`${API_URL}${lobbyID}`)
    return result.data
}
async function setReady(lobbyID : string,userID : string) {
    const result = await axios.post(`${API_URL}${lobbyID}/ready`,{userID : userID})
    return result.data
}
async function sendMessage(lobbyID : string,form : propsSendMessage) {
    const result = await axios.post(`${API_URL}${lobbyID}/chat`,form)
    return result.data   
}
async function getAllMessage(lobbyID : string) {
    const result = await axios.get(`${API_URL}${lobbyID}/chat`)
    return result.data   
}
async function kickMember(lobbyID : string,userID : string) {
    const result = await axios.post(`${API_URL}${lobbyID}/kick`,{userID : userID})
    return result.data
}
async function leaveLobby(lobbyID : string,userID : string) {
    const result = await axios.post(`${API_URL}${lobbyID}/leave`,{userID : userID})
    return result.data
}
async function deleteLobby(lobbyID : string) {
    const result = await axios.post(`${API_URL}${lobbyID}/delete`)
    return result.status
}
async function closeLobby(lobbyID : string) {
    const result = await axios.post(`${API_URL}${lobbyID}/close`)
    return result.status
}

export default {
    getLobbys,
    createLobby,
    joinLobby,
    getSpecificLobby,
    setReady,
    sendMessage,
    getAllMessage,
    kickMember,
    leaveLobby,
    deleteLobby,
    closeLobby
}