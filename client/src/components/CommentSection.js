import React from "react";
import { RatingIcon } from "../components/RatingIcon";
import images from "../assets/images";

export const CommentSection = ({ item }) => {
    return (
        <div className="comment-section">
            <img src={images.dummy_avatar} alt="Dummy Avatar" />
            <div>
                <div className="comment-username">{item.username}</div>
                <div className="comment-star-date-time">
                    <RatingIcon star={item.rating} />
                    <div>{item.date}</div>
                    <div>{item.time}</div>
                </div>
                <div className="comment-content">{item.comment}</div>

                <div></div>
            </div>
        </div>
    );
};
