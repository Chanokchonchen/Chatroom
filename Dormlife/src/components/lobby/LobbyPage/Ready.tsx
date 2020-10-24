import React  from "react";
import { ReadyProps } from "../../type";

const Ready = (props : ReadyProps) => {
    const {handleReady,text} = props
    return (
        <button onClick={handleReady}>{text}</button>
    )
}

export default Ready;