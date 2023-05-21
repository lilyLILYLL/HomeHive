import React, { useState } from "react";
import { PageTitlte } from "../components/PageTitlte";
import { InputForm } from "../components/InputForm";
import { Button } from "../components/Button";
export const ContactPage = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [meassage, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
        if (
            name !== "" &&
            phoneNumber !== "" &&
            email !== "" &&
            meassage !== ""
        ) {
            //calling an api here
            setSuccess(true);
        } else {
            alert("Please Enter Your Information!");
        }
    };

    return (
        <>
            {success ? (
                <div className="success-page">
                    <div className="app-name">Home Hive</div>
                    <div className="thankyou-section">
                        Thank you for sending your message to Homehive. We'll
                        reach you as soon as possible. Hope you have a great
                        day.
                    </div>
                </div>
            ) : (
                <div className="book-form">
                    <PageTitlte title="Contact Us" />
                    <InputForm
                        type={"text"}
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <InputForm
                        type={"phone-number"}
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <InputForm
                        type={"email"}
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="input-section">
                        <label className="label">Message</label>
                        <textarea
                            className="textarea"
                            placeholder="Enter your meassage here"
                            value={meassage}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="book-button">
                        <Button buttonText="Submit" onClick={handleSubmit} />
                    </div>
                </div>
            )}
        </>
    );
};
