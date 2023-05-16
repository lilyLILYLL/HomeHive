import React from "react";
import "../scss/InputForm.scss";
export const InputForm = ({ type, label }) => {
    return (
        <div className="input-section">
            <div className="label">{label}</div>
            <input type={type} />
        </div>
    );
};
