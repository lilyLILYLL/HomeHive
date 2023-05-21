import React, { useState, useEffect } from "react";
import { InputForm } from "../components/InputForm";
import { PageTitlte } from "../components/PageTitlte";
import { Button } from "../components/Button";
import { serviceOptions } from "../data/services";

export const PaymentPage = () => {
    const [name, setName] = useState("");
    const [professionalName, setProfessionalName] = useState("");
    const [serviceName, setServiceName] = useState("Lawn Maintenace");
    const [noHours, setNoHours] = useState(0);
    const [cost, setCost] = useState(0);
    const [fee, setFee] = useState(0);
    const [nameOnCard, setNameOnCard] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expirydate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [success, setSucess] = useState(false);

    useEffect(() => {
        setCost((fee * noHours).toFixed(0));
    }, [serviceName, fee, noHours]);

    const handleCheckout = () => {
        //calling api here
        setSucess(true);
    };
    return (
        <>
            {success ? (
                <div>
                    <div className="app-name">Home Hive</div>
                    <div className="thankyou-section">
                        Thank you for choosing Homehive. Hope you have a great
                        day.
                    </div>
                </div>
            ) : (
                <div className="book-form">
                    <PageTitlte title="Payment" />
                    <InputForm
                        label={"Name"}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <InputForm
                        label={"Professional Name"}
                        type="text"
                        value={professionalName}
                        onChange={(e) => setProfessionalName(e.target.value)}
                    />
                    <div className="book-section">
                        <label className="label"> Service</label>
                        <select onChange={(e) => setFee(e.target.value)}>
                            {serviceOptions &&
                                serviceOptions.map((option, index) => {
                                    return (
                                        <option value={option.fee} key={index}>
                                            {option.main}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>

                    <InputForm
                        label={"Number of hours worked"}
                        type="number"
                        value={noHours}
                        onChange={(e) => setNoHours(e.target.value)}
                    />
                    <h1>Checkout</h1>
                    <h3>Cost: ${cost}</h3>
                    <InputForm
                        label="Name on Card"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                    />
                    <InputForm
                        label="Card No"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <InputForm
                        label="Expiry Date"
                        value={expirydate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                    <InputForm
                        label="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                    />
                    <div className="book-button">
                        <Button
                            buttonText={"Check Out"}
                            onClick={handleCheckout}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
