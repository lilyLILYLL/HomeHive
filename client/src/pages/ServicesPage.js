import "../scss/ServicesPage.scss";
import React from "react";
import services from "../data/services";
import { Button } from "../components/Button";
export const ServicesPage = () => {
    return (
        <div className="service-page">
            {services &&
                services.map((service, index) => {
                    return (
                        <div>
                            <div className="service">
                                <img
                                    className="service-image"
                                    src={service.image}
                                    alt={service.name}
                                />
                                <div className="service-content">
                                    <div className="service-name">
                                        {service.serviceField}
                                    </div>
                                    <div className="service-description">
                                        {service.description}
                                    </div>
                                    <div className="service-button">
                                        More Details
                                    </div>
                                </div>
                            </div>
                            <div className="seperator-line"></div>
                        </div>
                    );
                })}
        </div>
    );
};
