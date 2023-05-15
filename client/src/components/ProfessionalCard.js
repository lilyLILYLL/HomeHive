import React from "react";
import "../scss/ProfessionalCard.scss";
import dummy_user from "../assets/dummy.jpeg";
import { RatingIcon } from "./RatingIcon";

export const ProfessionalCard = ({ professional }) => {
    return (
        <div className="professional-card">
            <img src={dummy_user} alt="Dummy" />
            <div className="professional-info">
                <p>Name : {professional.name}</p>
                <div className="professional-rating">
                    <p>Rating :</p>
                    <RatingIcon star={professional.rating} />
                </div>

                <p>Service : {professional.service}</p>
            </div>
        </div>
    );
};
