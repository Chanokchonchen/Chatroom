/* eslint-disable jsx-a11y/anchor-is-valid */
import  {Button}  from "react-bootstrap";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Signup() {
    const history = useHistory();
    useEffect(()=>{
        document.body.style.backgroundColor="#F55E61"
    },[])
    return (
        <div style={{padding:"2% 4%"}}>
            <Row style={{textAlign:"left"}}>
                <Col>
                    <Button onClick={()=> history.goBack()} variant="" ><ArrowBackIosIcon htmlColor="white" fontSize="large" /></Button>
                </Col>
            </Row>
            <Row style={{color:"white",margin:"15% 0"}} noGutters={true}>
                <Col>
                <h1 style={{fontSize:"4rem",fontWeight:"bold"}}>Dorm Finder</h1>
                <Button className="mt-5 btn-lg" onClick={()=> {
                    console.log(history)
                    history.push("/signup/dormfinder")
                }} variant="outline-light">Signup</Button>
                </Col>
                <Col>
                <h1 style={{fontSize:"4rem",fontWeight:"bold"}}>Dorm Owner</h1>
                <Button className="mt-5 btn-lg" onClick={()=> {
                    history.push("/signup/dormowner")
                }} variant="outline-light">Signup</Button>
                </Col>
            </Row>
            <Row style={{color:"white"}}>
                <Col>
                    <h1 style={{fontSize:"2.5rem",fontWeight:"bold"}}>Already have an account?</h1>
                    <a onClick={()=> {
                        history.push("/signin")
                    }} style={{fontSize:"1.5rem",textDecoration:"underline"}}  role="button">Sign in</a>
                </Col>
            </Row>
            
        </div>
    )
}
export default Signup;