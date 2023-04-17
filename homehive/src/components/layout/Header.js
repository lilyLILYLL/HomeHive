import "../../css/Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../constants/routes";
import logo from "../../assets/logo.svg";
import colors from "../../constants/colors";
export const Header = () => {
    return (
        <div className="header">
            <img alt="Logo" src={logo} className="header-logo" />

            {routes &&
                routes.map((route, index) => {
                    return (
                        <NavLink
                            to={route.path}
                            key={index}
                            className="header-link"
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
