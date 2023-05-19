import React from "react";
import "../scss/ProfessionalCard.scss";
import { RatingIcon } from "./RatingIcon";
import { useNavigate } from "react-router-dom";
import images from "../assets/images";
export const ProfessionalCard = ({ professional }) => {
    const navigate = useNavigate();

    const goToReviewPage = () => {
        navigate(`${professional.id}`, {
            state: professional,
        });
    };

    return (
        <div className="professional-card" onClick={goToReviewPage}>
            <img src={images.professional_avatar} alt="Dummy" />
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
