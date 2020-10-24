import React  from "react";
import LobbyRow from "./LobbyRow";
import { LobbyListProps } from "../../type";



const LobbyList = (props : LobbyListProps) => {
    const {lobbylist} = props
    return (
        <>
        <div style={{ display: "inline-block" }}>
            <div
            className="overflow-auto  bg-light"
            style={{ textAlign: "center", maxWidth: "800px", maxHeight: "250px" }}
            >
            </div>
            {lobbylist.map((lobby,index) => {
                return <LobbyRow roomType={lobby.roomType} _id={lobby._id} dormName={lobby.dormName}  key={index} />
            })}
        </div>
        </>
    );
};
export default LobbyList
