import React  from "react";
import { term } from "./constant";
import { Modal, Button } from "react-bootstrap";
import { termService } from "./typeForm";
function Termservice(props : termService) {
  const {show,handleClose} = props 
  return (
    <Modal size="xl" show={show} >
      <Modal.Header>
        <Modal.Title>Term service and Policy</Modal.Title>
      </Modal.Header>

      <Modal.Body>{term}</Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Termservice;
