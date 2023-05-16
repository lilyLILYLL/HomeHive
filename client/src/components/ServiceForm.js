import "../scss/ServicesForm.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ServiceForm = ({ service, index }) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        if (service.link) {
            navigate(`/services/${service.link}`);
        } else {
            navigate("/services/book-service");
        }
    };
    return (
        <div>
            <div className={index % 2 === 0 ? "service" : "service reverse"}>
                <div className="service-image">
                    <img src={service.image} alt={service.serviceField} />
                </div>

                <div className="service-content">
                    <div className="service-name">{service.serviceField}</div>
                    <div className="service-description">
                        {service.description}
                    </div>
                    {service.fee && (
                        <div style={{ fontSize: "25px" }}>
                            COST : ${service.fee} / hour
                        </div>
                    )}
                    <div className="service-button" onClick={handleOnClick}>
                        {service.fee ? "Book Now" : "More Details"}
                    </div>
                </div>
            </div>
            <div className="seperator-line"></div>
        </div>
    );
};
