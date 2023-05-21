import React, { useState, useEffect } from "react";
import "../scss/pages/BookServicePage.scss";
import { PageTitlte } from "../components/PageTitlte";
import { Button } from "../components/Button";
import { serviceOptions } from "../data/services";
import { professionals } from "../data/professionals";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../components/InputForm";
export const BookServicePage = () => {
    const [serviceOption, setServiceOption] = useState("");
    const [professionalList, setProfessionalList] = useState(professionals);
    const [professional, setProfessional] = useState("Lawnson David");

    const navigate = useNavigate();

    const handleChooseService = (e) => {
        setServiceOption(e.target.value);
    };
    useEffect(() => {
        setProfessionalList(
            professionals.filter((item) =>
                item.service.toLowerCase().includes(serviceOption.toLowerCase())
            )
        );
    }, [serviceOption]);

    const handleBookFunction = () => {
        navigate("/services/book-service/success", {
            state: professional,
        });
    };
    const handleOption = (e) => {
        setProfessional(e.target.value);
    };
    console.log(professional);

    return (
        <div className="book-service-page">
            <PageTitlte title={"Book A Service"} />
            <div className="book-form">
                <InputForm label={"Name"} type="text" />
                <InputForm label={"Phone Number"} type="phone-number" />
                <InputForm label={"Adress"} type="adrress" />

                <div className="book-section">
                    <div className="label">Service</div>
                    <select
                        onChange={handleChooseService}
                        defaultValue={"DEFAULT"}
                    >
                        <option value="DEFAULT" disabled hidden>
                            Choose a service
                        </option>
                        {serviceOptions &&
                            serviceOptions.map((option, index) => {
                                if (option.children.length === 0) {
                                    return (
                                        <option key={index} value={option.main}>
                                            {option.main}
                                        </option>
                                    );
                                } else {
                                    return (
                                        <optgroup
                                            label={option.main}
                                            key={index}
                                            style={{ fontSize: "30px" }}
                                        >
                                            {option.children &&
                                                option.children.map(
                                                    (item, index) => {
                                                        return (
                                                            <option
                                                                value={
                                                                    option.main
                                                                }
                                                                key={index}
                                                            >
                                                                {item}
                                                            </option>
                                                        );
                                                    }
                                                )}
                                        </optgroup>
                                    );
                                }
                            })}
                    </select>
                </div>
                <div className="book-section">
                    <div className="label">Professional Name</div>
                    <select name="" id="" onChange={handleOption}>
                        {professionalList &&
                            professionalList.map((item, index) => {
                                return (
                                    <option value={item.name} key={index}>
                                        {item.name}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                <div className="book-section">
                    <div className="label"> Specification </div>
                    <textarea
                        className="textarea"
                        placeholder="Please add some notes here!"
                    ></textarea>
                </div>
                <InputForm type="date" label="Date" />
                <InputForm type="time" label="time" />
                <div className="book-button" onClick={handleBookFunction}>
                    <Button buttonText={"Book"} />
                </div>
            </div>
        </div>
    );
};
