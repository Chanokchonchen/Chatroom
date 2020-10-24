import React from "react";
import { Col , Row } from "react-bootstrap"
import { propsSuggestItem } from "./type";
function SuggestItem(props : propsSuggestItem) {
    const {src , link} = props
    return (
    <Row  noGutters={true} className="mb-3">
        <Col >
            <a href={link}>
            <img
                src={src}
                alt="..."
                style={{width:"800px",height:"500px"}}
            />
            </a>
        </Col>
    </Row>
    )
}
export default SuggestItem