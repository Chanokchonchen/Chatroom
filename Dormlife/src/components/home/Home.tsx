import React, { useEffect, useState } from "react"
import DormCarousel from "./DormCarousel"
import DormSuggest from "./DormSuggest"
import Navbar from "./Navbar"
import Navbar2 from "./Navbar2"
import SearchBar from "./SearchBar"
import { propsDorm } from "./type"

function Home() {
    const test : propsDorm[] = [{id:"0",src:"https://cf.bstatic.com/images/hotel/max1024x768/221/221905924.jpg"},{id:"1",src:"https://udo.oop.cmu.ac.th/network%20dorm/pic_dorm/pnd.jpg"}]
    const [dorm,setDorm] = useState<propsDorm[]>(test)
    useEffect(()=> {
        document.body.style.backgroundColor="white"
        setDorm(test)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div style={{textAlign:"center"}}>
            <Navbar />
            <Navbar2 />
            <SearchBar />
            <DormCarousel dorms={dorm}/>
            <DormSuggest />
        </div>
    )
}
export default Home;