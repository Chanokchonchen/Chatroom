import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {backButtonProps } from "../../type"

const BackButton = (props : backButtonProps) => {
    const {handleGoBack} = props
    return (
        <>
        <button onClick={()=> {
            handleGoBack();
        }}>
            <ArrowBackIosIcon htmlColor="" fontSize="large" />
        </button>
        </>
    );
};

export default BackButton;