import React from "react";
import { Button } from "./Button";
import { InputForm } from "./InputForm";
export const CustomerSignUp = () => {
    return (
        <div className="book-form">
            <InputForm label={"Name"} type="text" />
            <InputForm label={"Phone Number"} type="phone-number" />
            <InputForm label={"Password"} type="Password" />
            <InputForm label={"Address"} type="address" />

            <div className="book-button">
                <Button buttonText={"Sign Up"} />
            </div>
        </div>
    );
};
