import React, { useState }  from "react";
import { Modal } from "react-bootstrap";
import { ModalMainPageProps } from "../../type";



const JoinCodeModal =  (props : ModalMainPageProps) => {
    const {show , handleClose , handleRouting} = props
    const [lobbyID,setLobbyID] = useState<string>("")
    const handleChange =  (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setLobbyID(value)
    }
    return (
        <Modal onHide={handleClose} show={show} size="xl">
            <form onSubmit={(e : React.ChangeEvent<HTMLFormElement>)=> {
                e.preventDefault()
                if (lobbyID !== "") {   
                    //service 
                    handleRouting("/")
                    handleClose()
                }
                
            }}>
                <Modal.Body>
                    <h1>Enter Lobby Code</h1>
                    <input value={lobbyID} onChange={handleChange} placeholder="Enter your lobby code" />
                    <button type="submit">Join</button>
                </Modal.Body>
            </form>
        </Modal>
    )
}

export default JoinCodeModal