import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { InputForm } from "./InputForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const CustomerSignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [success, setSuscess] = useState(false);

    const navigate = useNavigate();

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
                    id: Math.floor(Math.random() * 10000 + 1),
                    email: email,
                    password: password,
                    fullname: name,
                    phone: phoneNumber,
                    address: address,
                })
                .then((res) => {
                    if (res.status === 200) {
                        setSuscess(true);
                    }
                });
        } else {
            alert("Please Enter Your Information!");
        }
    };

    const goToLoginPage = () => {
        navigate("/login");
    };
    return (
        <>
            {success ? (
                <>
                    <div className="app-name">Home Hive</div>
                    <div className="thankyou-section">
                        You've been signed up successfully. Do you want to{" "}
                        <span className="login-link" onClick={goToLoginPage}>
                            {" "}
                            Login
                        </span>{" "}
                        ?
                    </div>
                </>
            ) : (
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
                        <Button
                            buttonText={"Sign Up"}
                            onClick={handleCustomerSignUp}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
