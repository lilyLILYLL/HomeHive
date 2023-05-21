import React, { useState, useEffect } from "react";
import { InputForm } from "./InputForm";
import { Button } from "./Button";
import axios from "axios";
export const ProfessionalSignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [skills, setSkills] = useState("");
    const handleProfessorSignUp = () => {
        if (
            email !== "" &&
            address !== "" &&
            name !== "" &&
            phoneNumber !== "" &&
            skills !== ""
        ) {
            axios
                .post("http://localhost:8080/addProfessor", {
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
                label={"Email"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputForm
                label={"Address"}
                type="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <InputForm
                label={"Skills"}
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
            />

            <InputForm label={"Your Resume"} type="file" />

            <div className="book-button">
                <Button
                    buttonText={"Sign Up"}
                    onClick={handleProfessorSignUp}
                />
            </div>
        </div>
    );
};
