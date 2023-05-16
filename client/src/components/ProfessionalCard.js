import React from "react";
import "../scss/ProfessionalCard.scss";
import dummy_user from "../assets/dummy.png";
import { RatingIcon } from "./RatingIcon";
import { useNavigate } from "react-router-dom";

export const ProfessionalCard = ({ professional }) => {
    const navigate = useNavigate();

    const goToReviewPage = () => {
        navigate(`${professional.id}`, {
            state: professional,
        });
    };

    return (
        <div className="professional-card" onClick={goToReviewPage}>
            <img src={dummy_user} alt="Dummy" />
            <div className="professional-info">
                <div>Name : {professional.name}</div>
                <div className="professional-rating">
                    <p>Rating :</p>
                    <RatingIcon star={professional.rating} />
                </div>

                <div>Service : {professional.service}</div>
            </div>
        </div>
    );
};
