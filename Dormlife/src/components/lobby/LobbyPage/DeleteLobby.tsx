import React, { useState } from "react";
import { DeleteLobbyProps } from "../../type";
import ModalCheckup from "./ModalCheckup";

const DeleteLobby = (props : DeleteLobbyProps) => {
    const {handleDelete} = props
    const [show,setShow] = useState<boolean>(false)
    const handleCancel = () => {
        setShow(false)
    }
    const handleAction = () => {
        //post request delete Lobby
        handleDelete()
    }
    return (
        <div>
            <button onClick={()=> {
                setShow(true)
            }}>Delete Lobby</button>
            <ModalCheckup handleCancel={handleCancel} handleAction={handleAction} show={show} action="Delete"  />
        </div>
    )
}

export default DeleteLobby;