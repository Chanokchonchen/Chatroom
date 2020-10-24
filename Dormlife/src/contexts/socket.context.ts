import  { createContext, useContext } from "react"
import io from "socket.io-client";
const SOCKET_IO_URL = "http://localhost:2000";
const socket = io(SOCKET_IO_URL);
export const socketContext = createContext<SocketIOClient.Socket>(socket)
export function useSocket() {
    return useContext(socketContext)
} 
