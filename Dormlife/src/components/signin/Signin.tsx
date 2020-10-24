/* eslint-disable jsx-a11y/anchor-is-valid */
import  {Button}  from "react-bootstrap";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import logowhite from "../pic/Logo_White.png"

function Signin() {
    const history = useHistory();
    useEffect(()=>{
        document.body.style.backgroundColor="#F55E61"
    },[])
    return (
        <div style={{padding:"2% 4%"}}>
            <Row style={{textAlign:"left"}}>
                <Col>
                    <Button onClick={()=> history.push("/")} variant="" ><ArrowBackIosIcon htmlColor="white" fontSize="large" /></Button>
                </Col>
            </Row>
            <Row style={{color:"white"}} noGutters={true}>
                <Col lg={5} style={{padding:"1% 4%",textAlign:"left"}}>
                <br />
                <h1 style={{fontSize:"2.5rem",textAlign:"left"}}>Sign in</h1>
                <br />
                <h1 style={{fontSize:"1.5rem",textAlign:"left"}}>Email</h1>
                <br />
                <FormControl component="fieldset" style={{float:"left", backgroundColor:"white"}}>
                <TextField
                id="Email"
                placeholder="Enter your Email"
                style={{width:"450px"}}
                />
                </FormControl>
                <br /><br />
                <h1 style={{fontSize:"1.5rem",textAlign:"left"}}>Password</h1>
                <br />
                <FormControl component="fieldset" style={{float:"left", backgroundColor:"white"}}>
                <TextField
                id="Password"
                placeholder="Enter your Password"
                style={{width:"450px"}}
                />
                </FormControl>
                <br /><br /><br />
                <Button  className="btn-lg" onClick={()=> {
                    console.log(history)
                    history.push("/signin/dormfinder")
                }} variant="outline-light" >Sign in</Button>
                <br /><br /><br />
                <a onClick={()=> {
                history.push("/signin/forgetpassword")
                }} style={{fontSize:"1rem",textDecoration:"underline"}}  role="button">forgot your password?</a>
                </Col>
                <Col lg={2} style={{padding:"5px"}}>
                <div style={{display:"inline-block",backgroundColor:"white",width:"4px",height:"600px"}}>
                </div>
                </Col>
                <Col lg={5}>
                <br /><br />
                <h1 style={{fontSize:"3rem"}}>Don't have an account?</h1>
                <h1 style={{fontSize:"3rem"}}>Why don't you &nbsp;
                <a onClick={()=> {
                history.push("/signup")
                }} style={{fontSize:"3rem",textDecoration:"underline"}}  role="button">sign up</a>!</h1>
                <br /><br /><br />
                <img src={logowhite} style ={{width:"300px", height:"300px"}}/>
                </Col>
            </Row>
            
        </div>
    )
}
export default Signin;