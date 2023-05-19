import React from "react";
import "../scss/pages/SuccessPage.scss";
import images from "../assets/images";
import { RatingIcon } from "../components/RatingIcon";
export const SuccessPage = () => {
    return (
        <div className="success-page">
            <div className="app-name">Home Hive</div>
            <div className="thankyou-section">
                You’ve been appointed with a professional whose details have
                been provided below. Thank you for choosing Homehive. Hope you
                have a great day.
            </div>
            <div className="information">
                <img src={images.dummy_avatar} alt="Dummy" />
                <div>
                    <div className="name">Name:</div>
                    <div className="rating">
                        <div> Rating:</div>
                        <RatingIcon star={4} />
                    </div>
                </div>
            </div>
        </div>
    );
};
