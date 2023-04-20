import "../scss/ServicesPage.scss";
import React, { useState, useEffect } from "react";
import services from "../data/services";
import { Button } from "../components/Button";

export const ServicesPage = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateSize = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        };
        const unsubcribe = window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return (
        <div className="service-page">
            {services &&
                services.map((service, index) => {
                    // return (
                    //     <div>
                    //         <div>height: {height}</div>
                    //         <div>width: {width}</div>
                    //     </div>
                    // );
                    return (
                        <div key={index}>
                            <div
                                className={
                                    index % 2 === 0
                                        ? "service"
                                        : "service reverse"
                                }
                            >
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
