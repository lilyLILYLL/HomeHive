import "../../scss/Layout.scss";
import React from "react";
import { HeadBar } from "./HeadBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../../constants/routes";
export const Layout = () => {
    return (
        // <BrowserRouter>
        <div className="layout">
            <div className="layout-header">
                <HeadBar />
            </div>
            <div className="layout-content">
                <Routes>
                    {routes &&
                        routes.map((route, index) => {
                            return (
                                <Route
                                    path={route.path}
                                    element={route.element}
                                />
                            );
                        })}
                </Routes>
            </div>
        </div>
        //</BrowserRouter>
    );
};
