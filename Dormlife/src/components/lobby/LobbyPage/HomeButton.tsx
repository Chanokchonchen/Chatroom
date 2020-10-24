import React from "react";
import { HomeButtonProps } from "../../type";

const HomeButton = (props: HomeButtonProps) => {
    const { handleGoHome } = props;
    return (
        <div>
        <button
            onClick={() => {
            handleGoHome();
            }}
        >
            Home
        </button>
        </div>
    );
};

export default HomeButton;
