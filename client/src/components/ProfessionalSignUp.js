import React from "react";
import { InputForm } from "./InputForm";
import { Button } from "./Button";

export const ProfessionalSignUp = () => {
    return (
        <div className="book-form">
            <InputForm label={"Name"} type="text" />
            <InputForm label={"Phone Number"} type="phone-number" />
            <InputForm label={"Password"} type="Password" />
            <InputForm label={"Address"} type="address" />
            <InputForm label={"Your Resume"} type="file" />
            <div className="input-section">
                <label className="label">Experience</label>
                <textarea
                    className="textarea"
                    placeholder="Tell me about yourself"
                ></textarea>
            </div>

            <div className="book-button">
                <Button buttonText={"Sign Up"} />
            </div>
        </div>
    );
};
