import "../../scss/Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import colors from "../../constants/colors";
import { routes } from "../../constants/routes";
export const HeadBar = () => {
    return (
        <div className="headbar">
            <NavLink to="/">
                <img alt="Logo" src={logo} className="headbar-logo" />
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
        </div>
    );
};
