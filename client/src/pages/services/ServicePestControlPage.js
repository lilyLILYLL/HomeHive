import React from "react";
import "../../scss/ServicePestControlPage.scss";
import images from "../../assets/images";

export const ServicePestControlPage = () => {
    return (
        <div className="pest-control-page">
            <h1 style={{ fontSize: "60px", marginBottom: "40px" }} autoFocus>
                Pest Control
            </h1>
            <p className="pest-control-description">
                Book a professional with Homehive. Choose the pests which has to
                be removed from your home by simply clicking on the images
                provided below or their names and then proceed to book.
            </p>
            <div className="pest-control-description-box">
                Cost: 35.90$ per hour for a single professional and the amount
                of pest control used, rates vary according to the pest chosen.
            </div>
            <div className="pest-control-images">
                <div>
                    <img src={images.pest_pic1} alt="cockroach" />
                    <h3>Cockroach</h3>
                </div>
                <div>
                    <img src={images.pest_pic2} alt="spider" />
                    <h3>Spider</h3>
                </div>
                <div>
                    <img src={images.pest_pic3} alt="mouse_rate" />
                    <h3>Rats and Mices</h3>
                </div>
                <div>
                    <img src={images.pest_pic4} alt="opossum" />
                    <h3>Possum</h3>
                </div>
                <div>
                    <img src={images.pest_pic5} alt="termite" />
                    <h3>Termite</h3>
                </div>
            </div>
            <div className="book-now-button">
                <div>Book Now</div>
            </div>
        </div>
    );
};
