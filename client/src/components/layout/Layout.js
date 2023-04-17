import "../../css/Layout.css";
import React from "react";
import { Header } from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../../constants/routes";
export const Layout = () => {
    return (
        <BrowserRouter>
            <div className="layout">
                <div className="layout-header">
                    <Header />
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
        </BrowserRouter>
    );
};
