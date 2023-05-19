import React from "react";
import "../scss/pages/AboutUsPage.scss";
import images from "../assets/images";
import { PageTitlte } from "../components/PageTitlte";
export const AboutUsPage = () => {
    return (
        <div className="aboutUs-page">
            <PageTitlte title="About Us" />
            <div className="aboutUs-welcome-section">
                Welcome to Homehive - your one-stop solution for all home
                maintenance needs. From lawn mowing and landscaping to painting
                and essential repairs, our dedicated team of professionals is
                committed to enhancing the beauty and functionality of your
                home. Trust us for reliable, high-quality services tailored to
                your unique needs.
            </div>
            <div className="aboutUs-mission-section">
                <div className="aboutUs-title">Our mission</div>
                <div className="aboutUs-description">
                    By developing this platform, we hope to improve professional
                    work opportunities for many professionals. The possibility
                    for people to collaborate with us develops as our business
                    expands. The professionals might register with us on the
                    sign up page for the professionals provided, which is how
                    our system operates. After submitting their professional
                    qualification credentials. Following a thorough background
                    investigation, our staff will inform you if the expert has
                    been employed or not.
                </div>

                <div className="aboutUs-description">
                    We take a 5% fee from what the customer has paid and the
                    rest is directly debited to the professionals account. We
                    provide the work fee to the professional within 5-10 minutes
                    time.`
                </div>
            </div>

            <div className="aboutUs-question-section">
                <img src={images.aboutUs_pic1} />
                <div className="aboutUs-question">
                    <div className="question">
                        How is a customer provided with a professional?
                    </div>
                    <div>
                        If the customer has prior knowledge of the professional,
                        they may book them. If not, an automated selection of a
                        random professional will be made.
                    </div>
                </div>
            </div>
            <div className="aboutUs-question-section">
                <div className="aboutUs-question">
                    <div className="question">
                        When the work is done by the professional?
                    </div>
                    <div>
                        The number of hours the professional worked will be
                        entered by the client. The payment can then be made when
                        the amount has been computed and displayed on the
                        payment page.
                    </div>
                    <div>
                        On the professionals portal, the customer may also
                        provide reviews of the experts' work.
                    </div>
                </div>
                <img src={images.aboutUs_pic2} />
            </div>
        </div>
    );
};
