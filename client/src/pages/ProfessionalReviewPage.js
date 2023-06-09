import React from "react";
import { useParams, useLocation } from "react-router-dom";
import images from "../assets/images";
import "../scss/pages/ProfessionalReviewPage.scss";
import { ReviewsBoard } from "../components/ReviewsBoard";

export const ProfessionalReviewPage = () => {
    const state = useLocation().state; // retrieve state
    console.log(state);
    return (
        <div className="professional-review-page">
            <div className="professional-review-info">
                <img src={images.professional_avatar} alt="Dummy Avatar" />
                <div className="professional-info-content">
                    <p>{state.name}</p>
                    <p>{state.service}</p>
                </div>
            </div>
            <ReviewsBoard rating={state.rating} />
        </div>
    );
};
