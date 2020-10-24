import React, { useState }  from "react";
import { JoinCodeProps } from "../../type";
import JoinCodeModal from "./JoinCodeModal";



const JoinCode =  (props : JoinCodeProps) => {
    const {handleRouting} = props
    const [show,setShow] = useState<boolean>(false)
    const handleClose = () => {
        setShow(false)
    }
    return (
        <div>
            <button onClick={()=> {
                setShow(true)
            }}>Join By Code</button>
            <JoinCodeModal show={show} handleRouting={handleRouting}  handleClose={handleClose}  />
        </div>
    )
}
export default JoinCode