import "../../scss/Header.scss";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import colors from "../../constants/colors";
import { routes } from "../../constants/routes";
import images from "../../assets/images";
import { AuthContext } from "../../context/AuthContext";

export const HeadBar = () => {
    const { isLogedin } = useContext(AuthContext);
    console.log(isLogedin);
    return (
        <>
            <div className="headbar">
                <NavLink to="/">
                    <img
                        alt="Logo"
                        src={images.logo}
                        className="headbar-logo"
                    />
                </NavLink>

                {routes &&
                    routes.map((route, index) => {
                        return (
                            <NavLink
                                to={route.path}
                                key={index}
                                className="headbar-link"
                                style={({ isActive }) => {
                                    return {
                                        color: isActive
                                            ? colors.darkBlue
                                            : colors.white,
                                        backgroundColor: isActive
                                            ? colors.backgroundColor
                                            : colors.darkBlue,
                                    };
                                }}
                            >
                                <div>{route.label}</div>
                            </NavLink>
                        );
                    })}

                {!isLogedin ? null : (
                    <img
                        src={images.dummy_avatar}
                        alt="Dummy_avatar"
                        className="dummy_avatar"
                    />
                )}
            </div>
        </>
    );
};
