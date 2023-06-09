import "../../src/scss/Home.scss";
import React from "react";
import images from "../assets/images";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div className="home">
            <div className="home-content">
                <div className="home-header">Homehive</div>

                <div className="home-title-large">
                    Connect with local tradie's for hassle-free home services
                </div>
                <div className="home-title-small">
                    Say goodbye to unrelible tradespeople and hello to
                    hassle-free home services with Homehive
                </div>
                <div className="home-button">
                    <Link to="sign-up" className="link">
                        <Button buttonText={"Sign Up"} />
                    </Link>

                    <Link to="login" className="link">
                        <Button buttonText={"Login"} />
                    </Link>
                </div>
            </div>
            <img alt="home-logo" src={images.home_logo} className="home-logo" />
        </div>
    );
};
