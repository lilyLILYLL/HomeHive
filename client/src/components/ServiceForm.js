import "../scss/ServicesForm.scss";
import React from "react";
import { Link } from "react-router-dom";
import colors from "../constants/colors";

export const ServiceForm = ({ service, index }) => {
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
                    <div className="service-button">
                        <Link
                            to={service.link}
                            style={{
                                textDecoration: "none",
                                color: colors.white,
                            }}
                        >
                            More Details
                        </Link>
                    </div>
                </div>
            </div>
            <div className="seperator-line"></div>
        </div>
    );
};
