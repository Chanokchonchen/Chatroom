/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from "react";
import { useHistory } from "react-router-dom";
import lobbyService from "../../../services/lobby.service";
import { useSocket } from "../../../contexts/socket.context";
import { LobbyRowProps } from "../../type"
import { token2 } from "../../test"

const LobbyRow = (props : LobbyRowProps) => {
    const socket = useSocket()
    const {dormName,roomType,_id} = props
    const history = useHistory()
    return (
        <div style={{width : "300px" , height : "50px" , border:"10px solid #555"}}>
            <a onClick={async ()=> {
                const param = {
                    id : _id,
                    token : token2 
                }
                await lobbyService.joinLobby(param)
                socket.emit("join")
                history.push(`/lobby/${_id}`)
            }}><p>{dormName}, {roomType}</p></a>
        </div>
    )
}
export default LobbyRow;