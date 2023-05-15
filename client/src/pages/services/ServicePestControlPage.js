import React from "react";
import "../../scss/ServicePestControlPage.scss";
import cockroach from "../../assets/pest_control/cockroach.png";
import mouse_rat from "../../assets/pest_control/mouse-rat.png";
import opossum from "../../assets/pest_control/opossum.png";
import spider from "../../assets/pest_control/spider.png";
import termite from "../../assets/pest_control/termite.png";

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
                    <img src={cockroach} alt="cockroach" />
                    <h3>Cockroach</h3>
                </div>
                <div>
                    <img src={spider} alt="spider" />
                    <h3>Spider</h3>
                </div>
                <div>
                    <img src={mouse_rat} alt="mouse_rate" />
                    <h3>Rats and Mices</h3>
                </div>
                <div>
                    <img src={opossum} alt="opossum" />
                    <h3>Possum</h3>
                </div>
                <div>
                    <img src={termite} alt="termite" />
                    <h3>Termite</h3>
                </div>
            </div>
            <div className="book-now-button">
                <div>Book Now</div>
            </div>
        </div>
    );
};
