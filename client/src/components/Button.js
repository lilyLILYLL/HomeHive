import React from "react";
import "../scss/Button.scss";
export const Button = ({ buttonText, onClick }) => {
    return (
        <div className="button" onClick={onClick}>
            {buttonText}
        </div>
    );
};
