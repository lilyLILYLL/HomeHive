import React from "react";
import "../scss/pages/SuccessPage.scss";
import images from "../assets/images";
import { RatingIcon } from "../components/RatingIcon";
import { useLocation } from "react-router-dom";
export const SuccessPage = () => {
    const location = useLocation();
    return (
        <div className="success-page">
            <div className="app-name">Home Hive</div>
            <div className="thankyou-section">
                You’ve been appointed with a professional whose details have
                been provided below. Thank you for choosing Homehive. Hope you
                have a great day.
            </div>
            <div className="information">
                <img src={images.professional_avatar} alt="Dummy" />
                <div>
                    <div className="name">Name: {location.state}</div>
                    <div className="rating">
                        <div> Rating:</div>
                        <RatingIcon star={4} />
                    </div>
                </div>
            </div>
        </div>
    );
};
