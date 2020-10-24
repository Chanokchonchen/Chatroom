import React, { useEffect } from "react";
import {useParams } from "react-router-dom"
function Dorm() {
    const {id} : {id:string} = useParams()
    useEffect(()=> {
        console.log(`Fetch from database with ${id}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(id)
    return (
    <div>
        {id}
    </div>
    )
}
export default Dorm;