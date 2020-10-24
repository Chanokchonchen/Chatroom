import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
function Navbar2() {
  const history = useHistory()
  return (
    <Row noGutters={true}>
      <Col>
        <Button size="lg" variant="light" block>Review</Button>
      </Col>
      <Col>
        <Button onClick={()=>{
          history.push("/lobby")
        }} size="lg" variant="light" block>Find Roommate</Button>
      </Col>
    </Row>
  );
}
export default Navbar2;
