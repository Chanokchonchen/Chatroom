import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button  from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
function NavBar() {
  const history = useHistory()
  return (
    <Navbar bg="light">
      <Navbar.Brand style={{color:"red" , fontSize:"2rem" , fontWeight:"bold"}} >DormLife</Navbar.Brand>
      <Nav className="ml-auto">
        <Button onClick={()=> history.push("/signup")}  className="mt-1 ml-1 mb-1 mr-1"  variant="danger" >Sign up</Button>
        <Button onClick={()=> history.push("/signin")} className="mt-1 ml-1 mb-1 mr-1"   variant="danger" >Sign in</Button>
      </Nav>
    </Navbar>
  );
}
export default NavBar;
