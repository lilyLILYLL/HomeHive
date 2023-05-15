import React from "react";
import "../scss/ReviewBoard.scss";
import { AiFillStar } from "react-icons/ai";
import { PercentageBar } from "./PercentageBar";
import { comments } from "../data/comments";
import { CommentSection } from "./CommentSection";

export const ReviewsBoard = ({ rating }) => {
    const array = [1, 1, 0, 0, 0];
    return (
        <div className="review-board">
            <div>Reviews</div>
            <div className="review-star-section">
                <div className="review-rating">{rating.toFixed(1)}</div>
                <AiFillStar className="review-star-icon" />
                <PercentageBar array={array} />
            </div>
            <div className="review-board-separator"></div>
            <div className="review-comments">
                <div className="review-comments-title">
                    All Reviews ({array.length})
                </div>
                <div className="add-review-button"> + Add Reivew</div>
            </div>
            <div>
                {comments &&
                    comments.map((item, index) => {
                        return <CommentSection key={index} item={item} />;
                    })}
            </div>
        </div>
    );
};
