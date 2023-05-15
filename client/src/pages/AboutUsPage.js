import React from "react";
import "../scss/pages/AboutUsPage.scss";
import aboutUs from "../assets/aboutUsPage/aboutUs.png";
import house_painting from "../assets/aboutUsPage/house_painting.png";
import { PageTitlte } from "../components/PageTitlte";
export const AboutUsPage = () => {
    return (
        <div>
            <PageTitlte title="About Us" />
            <div className="aboutUs-page">
                <div className="aboutUs-row-section">
                    <p>
                        Welcome to Homehive - your one-stop solution for all
                        home maintenance needs. From lawn mowing and landscaping
                        to painting and essential repairs, our dedicated team of
                        professionals is committed to enhancing the beauty and
                        functionality of your home. Trust us for reliable,
                        high-quality services tailored to your unique needs.
                    </p>
                    <img src={aboutUs} alt="ABoutUs" />
                </div>
                <div className="aboutUs-row-section">
                    <img src={house_painting} alt="house_painting" />
                    <div className="aboutUs-benefits">
                        <p>1. Great Services</p>
                        <p>2. Professional Team</p>
                        <p>3. Customer Satisfaction</p>
                        <p>4. Affordable Price</p>
                        <p>5. Easy to Contact</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
