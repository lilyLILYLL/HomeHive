import React, { useState, useContext } from "react";
import { InputForm } from "../../components/InputForm";
import { Button } from "../../components/Button";
import { PageTitlte } from "../../components/PageTitlte";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setIsLogedin } = useContext(AuthContext);

    const handleLogIn = () => {
        if (email !== "" && password !== "") {
            //calling an api here
            setIsLogedin(true);
            navigate("/services");
        } else {
            alert("Please enter your email and password!");
        }
    };
    return (
        <div>
            <PageTitlte title="Log In" />
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

                <div className="book-button">
                    <Button buttonText={"Login"} onClick={handleLogIn} />
                </div>
            </div>
        </div>
    );
};
