import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { withStyles, createStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Style } from "../../type";

const styles = createStyles({
    navCenter: {
      position: "absolute",
      width: "100%",
      textAlign: "center",
      overflow: "visible",
      height: "0",
      left: "0%",
      color: "white",
    },
    nav : {
        backgroundColor : "#F55E61"
    }
});


const Header = (props : Style) => {
    const history = useHistory()
    const {classes} = props
    return <>
        <Navbar fixed="top" style={{ padding: "1%" }} className={classes.nav}>
            <Nav className="text-center">
            <Button variant="" onClick={() => history.goBack()}>
                <ArrowBackIosIcon htmlColor="white" fontSize="large" />
            </Button>
            <h1 className={classes.navCenter}>Chat</h1>
            </Nav>
        </Navbar>
    </>
}
export default withStyles(styles)(Header);