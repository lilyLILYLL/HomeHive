import React from "react";
import { InputForm } from "../../components/InputForm";
import { Button } from "../../components/Button";
import { PageTitlte } from "../../components/PageTitlte";

export const LoginPage = () => {
    return (
        <div>
            <PageTitlte title="Log In" />
            <div className="book-form">
                <InputForm label={"Email"} type="email" />
                <InputForm label={"Password"} type="Password" />

                <div className="book-button">
                    <Button buttonText={"Login"} />
                </div>
            </div>
        </div>
    );
};
