import "../../src/css/Home.css";
import React from "react";
import homeLogo from "../assets/homeLogo.png";
export const HomePage = () => {
    return (
        <div className="home">
            <div className="home-content">
                <div className="home-header">Homehive</div>

                <div className="home-title-large">
                    Connect with local tradie's for hassle-free home services
                </div>
                <div className="home-title-small">
                    Say goodbye to unrelible tradepeople and hello to
                    hassle-free home services with Homehive
                </div>
            </div>
            <img alt="home-logo" src={homeLogo} className="home-logo" />
        </div>
    );
};
