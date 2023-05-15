import React, { useRef, useState, useEffect } from "react";
import "../scss/pages/ProfessionalsPage.scss";
import { PageTitlte } from "../components/PageTitlte";
import user_search from "../assets/user_search.png";
import { ProfessionalCard } from "../components/ProfessionalCard";
import { professionals } from "../data/professionals";

export const ProfessionalsPage = () => {
    const [professionalName, setProfessionalName] = useState("");
    const [professionalList, setProfessionalList] = useState(professionals);
    const handleOnChangeText = (event) => {
        setProfessionalName(event.target.value);
    };

    const filterByProfessionalName = () => {
        return professionals.filter(
            (item) =>
                item.name
                    .toLowerCase()
                    .includes(professionalName.toLowerCase()) ||
                item.service
                    .toLowerCase()
                    .includes(professionalName.toLowerCase())
        );
    };
    useEffect(() => {
        setProfessionalList(filterByProfessionalName());
    }, [professionalName]);

    const inputRef = useRef(null);
    const handleOnClick = () => {
        inputRef?.current?.focus();
    };
    return (
        <div>
            <PageTitlte title={"Professionals"} />
            <div className="professionals-page">
                <div className="professionals-page-description">
                    Here are our professionals who provides the best services.
                    Please click on the box to see and add the review of each
                    professionals.
                </div>
                <div
                    className="professional-name-input"
                    onClick={handleOnClick}
                >
                    <input
                        type="text"
                        placeholder="Enter Professional Name"
                        ref={inputRef}
                        value={professionalName}
                        onChange={handleOnChangeText}
                    />

                    <img src={user_search} alt="Seacrh" />
                </div>

                <div className="professional-list">
                    {professionalList &&
                        professionalList.map((professional, index) => {
                            return (
                                <ProfessionalCard
                                    professional={professional}
                                    key={index}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
