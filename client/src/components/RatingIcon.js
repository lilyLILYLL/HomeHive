import React from "react";
import "../scss/RatingIcon.scss";
import { AiFillStar } from "react-icons/ai";

export const RatingIcon = ({ star }) => {
    return (
        <div className="rating-icon">
            {Array(star)
                .fill(0)
                .map((item, index) => {
                    return <AiFillStar className="icon" key={index} />;
                })}
            {Array(5 - star)
                .fill(0)
                .map((item, index) => {
                    return (
                        <AiFillStar className="icon-outline" key={5 - index} />
                    );
                })}
        </div>
    );
};
