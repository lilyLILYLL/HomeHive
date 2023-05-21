import React, { useState } from "react";
import { InputForm } from "../../components/InputForm";
import { Button } from "../../components/Button";
import { PageTitlte } from "../../components/PageTitlte";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = () => {
        //calling an api here
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
