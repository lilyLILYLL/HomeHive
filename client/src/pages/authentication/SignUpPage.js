import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { PageTitlte } from "../../components/PageTitlte";
import "../../scss/pages/SignupPage.scss";
import { CustomerSignUp } from "../../components/CustomerSignUp";
import { ProfessionalSignUp } from "../../components/ProfessionalSignUp";

export const SignUpPage = () => {
    const [customer, setCustomer] = useState(true);
    const [professional, setProfessional] = useState(false);

    const chooseCustomer = () => {
        setCustomer(true);
        setProfessional(false);
    };

    const chooseProfessional = () => {
        setCustomer(false);
        setProfessional(true);
    };
    const customeStyle = {
        color: "red",
        textDecoration: "underline",
    };

    return (
        <div className="sign-up-page">
            <PageTitlte title={"Sign Up"} />
            <div className="sign-up-option">
                <div
                    className="sign-up-title"
                    onClick={chooseCustomer}
                    style={customer ? customeStyle : null}
                >
                    Customers
                </div>
                <div
                    className="sign-up-title"
                    onClick={chooseProfessional}
                    style={professional ? customeStyle : null}
                >
                    Professionals
                </div>
            </div>
            {customer && <CustomerSignUp />}
            {professional && <ProfessionalSignUp />}
        </div>
    );
};
