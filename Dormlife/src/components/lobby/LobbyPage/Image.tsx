import React from "react"
import dog from "../../pic/finder_silver_2.jpg"
import cat from "../../pic/finder_silver_1.jpg"
import catp from "../../pic/finder_silver_1p.jpg"
import dogp from "../../pic/finder_silver_2p.jpg"
import mon from "../../pic/finder_silver_3.jpg"
import monp from "../../pic/finder_silver_3p.jpg"
import { useParams } from "react-router-dom"
import { ImagesProps } from "../../type"

const Image = (props : ImagesProps) =>  {
    const {userID} : {userID:string} = useParams() // ใช้ token เวลาทำจริงๆ
    const AllImage = [dog,cat,mon,dogp,catp,monp]
    const {attr,index} = props
    return (
        <>
        {index === 0 ? 
            <>
                {(attr.userID === userID) ? (
                    <img alt="" style={{margin:"2%",border:"10px solid #8cd3ff",width:"200px" ,height:"200px"}} src={AllImage[attr.profilepic]} />)
                    : 
                    (<img alt="" style={{margin:"2%",border:"10px solid #555",width:"200px" ,height:"200px"}} src={AllImage[attr.profilepic] } /> )  
        }
            </> 
        : 
            <>
                {(attr.userID === userID) ? (
                    <img alt="" style={{margin:"2%",border:"10px solid #8cd3ff",width:"200px" ,height:"200px"}} src={attr.ready ? AllImage[attr.profilepic+3] : AllImage[attr.profilepic]} />)
                    : 
                    (<img alt="" style={{margin:"2%",border:"10px solid #555",width:"200px" ,height:"200px"}} src={attr.ready ? AllImage[attr.profilepic+3] : AllImage[attr.profilepic] } /> )  }
            </>
        }

        </>
    )
}
export default Image;
