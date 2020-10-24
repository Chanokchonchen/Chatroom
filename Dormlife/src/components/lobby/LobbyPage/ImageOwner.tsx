import React from "react"
import dog from "../../pic/finder_silver_2.jpg"
import cat from "../../pic/finder_silver_1.jpg"
import catp from "../../pic/finder_silver_1p.jpg"
import dogp from "../../pic/finder_silver_2p.jpg"
import mon from "../../pic/finder_silver_3.jpg"
import monp from "../../pic/finder_silver_3p.jpg"
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import "./image.css"
import { ImagesOwnerProps } from "../../type"


const ImageOwner = (props : ImagesOwnerProps) =>  {
    const {userID} : {userID:string} = useParams() // ใข้ token เวลาทำจริงๆ
    const AllImage = [dog,cat,mon,dogp,catp,monp]
    const {attr,handleKick,index} = props
    const handleClick = () => {
        handleKick(attr.userID)
    }
    return (
        <>
        {index === 0 ? 
            <>
                {(attr.userID === userID) ? (
                    <img alt="" style={{margin:"2%",border:"10px solid #8cd3ff",width:"200px" ,height:"200px"}} src={AllImage[attr.profilepic]} />)
                    : 
                    <div className="image">
                        <Button onClick={handleClick} className="delete-image-btn" variant=""><CancelPresentationIcon fontSize="large" htmlColor="red" /></Button>
                        <img alt="" style={{border:"10px solid #555",width:"200px" ,height:"200px"}} src={AllImage[attr.profilepic]} />
                    </div>
                }

            </> 
        : 
            <>
                {(attr.userID === userID) ? (
                    <img alt="" style={{margin:"2%",border:"10px solid #8cd3ff",width:"200px" ,height:"200px"}} src={attr.ready ? AllImage[attr.profilepic+3] : AllImage[attr.profilepic]} />)
                    : 
                    <div className="image">
                        <Button onClick={handleClick} className="delete-image-btn" variant=""><CancelPresentationIcon fontSize="large" htmlColor="red" /></Button>
                        <img alt="" style={{border:"10px solid #555",width:"200px" ,height:"200px"}} src={attr.ready ? AllImage[attr.profilepic+3] : AllImage[attr.profilepic]} />
                    </div>
                }
            </>
        }

        </>
    )
}
export default ImageOwner;

