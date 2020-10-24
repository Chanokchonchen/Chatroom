import React  from "react";
import {CreateLobbyProps }  from "../../type"

const CreateLobby =  (props : CreateLobbyProps) => {
    const {handleRouting} = props
    return (
        <div>
            <button onClick={()=> {
                handleRouting("/lobby/create")
            }}>Create Lobby</button>
        </div>
    )
}
export default CreateLobby