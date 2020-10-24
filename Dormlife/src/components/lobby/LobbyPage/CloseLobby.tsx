import React, { useState } from "react";
import { CloseLobbyProps } from "../../type";
import ModalCheckup from "./ModalCheckup";

const CloseLobby = (props : CloseLobbyProps) => {
    const {handleCloseLobby,disable} = props
    const [show,setShow] = useState<boolean>(false)
    const handleCancel = () => {
        setShow(false)
    }
    const handleAction = () => {
        handleCloseLobby()
    }
    return (
        <>
            <button disabled={disable}  onClick={()=> {
                setShow(true)
            }} >Close Lobby</button>
            <ModalCheckup handleCancel={handleCancel} handleAction={handleAction} show={show} action="Close"  />
        </>
    )
}

export default CloseLobby;