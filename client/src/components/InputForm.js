import React from "react";
import "../scss/InputForm.scss";
export const InputForm = ({ type, label, value, onChange, editable }) => {
    return (
        <div className="input-section">
            <div className="label">{label}</div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required
                editable={editable}
            />
        </div>
    );
};
