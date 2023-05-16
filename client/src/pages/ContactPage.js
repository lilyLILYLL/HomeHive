import React from "react";
import { PageTitlte } from "../components/PageTitlte";
import { InputForm } from "../components/InputForm";
import { Button } from "../components/Button";
export const ContactPage = () => {
    return (
        <div className="book-form">
            <PageTitlte title="Contact Us" />
            <InputForm type={"text"} label="Name" />
            <InputForm type={"phone-number"} label="Phone Number" />
            <InputForm type={"email"} label="Email" />
            <div className="input-section">
                <label className="label">Message</label>
                <textarea
                    className="textarea"
                    placeholder="Enter your meassage here"
                ></textarea>
            </div>
            <div className="book-button">
                <Button buttonText="Submit" />
            </div>
        </div>
    );
};
