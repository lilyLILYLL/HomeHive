import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { InputForm } from "./InputForm";
import axios from "axios";
export const CustomerSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    const handleCustomerSignUp = () => {
        if (
            email !== "" &&
            password !== "" &&
            name !== "" &&
            phoneNumber !== "" &&
            address !== ""
        ) {
            axios
                .post("http://localhost:8080/addClient", {
                    email: email,
                })
                .then((res) => {
                    console.log(res);
                });
        } else {
            alert("Please Enter Your Information!");
        }
    };
    return (
        <div className="book-form">
            <InputForm
                label={"Email"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <InputForm
                label={"Password"}
                type="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputForm
                label={"Name"}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <InputForm
                label={"Phone Number"}
                type="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <InputForm
                label={"Address"}
                type="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />

            <div className="book-button">
                <Button buttonText={"Sign Up"} onClick={handleCustomerSignUp} />
            </div>
        </div>
    );
};
