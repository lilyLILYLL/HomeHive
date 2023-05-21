import "../../scss/Layout.scss";
import React from "react";
import { HeadBar } from "./HeadBar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { ServicesPage } from "../../pages/services/ServicesPage";
import { AboutUsPage } from "../../pages/AboutUsPage";
import { ContactPage } from "../../pages/ContactPage";
import { ProfessionalsPage } from "../../pages/ProfessionalsPage";
import { ServiceAVHCPage } from "../../pages/services/ServiceAVHCPage";
import { ServiceFenceInstallationPage } from "../../pages/services/ServiceFenceInstallationPage";
import { ServiceHandyManPage } from "../../pages/services/ServiceHandyManPage";
import { ServicePantingPage } from "../../pages/services/ServicePantingPage";
import { ServicePestControlPage } from "../../pages/services/ServicePestControlPage";
import { ServiceLawnMaintenancePage } from "../../pages/services/ServiceLawnMaintenancePage";
import { LoginPage } from "../../pages/authentication/LoginPage";
import { SignUpPage } from "../../pages/authentication/SignUpPage";
import { ProfessionalReviewPage } from "../../pages/ProfessionalReviewPage";
import { BookServicePage } from "../../pages/BookServicePage";
import { SuccessPage } from "../../pages/SuccessPage";
import { PaymentPage } from "../../pages/PaymentPage";
export const Layout = () => {
    return (
        // <BrowserRouter>
        <div className="layout">
            <div className="layout-header">
                <HeadBar />
            </div>
            <div className="layout-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="sign-up" element={<SignUpPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="services">
                        <Route index element={<ServicesPage />} />
                        <Route
                            path="lawn-maintenance"
                            element={<ServiceLawnMaintenancePage />}
                        />
                        <Route path="ACHS" element={<ServiceAVHCPage />} />
                        <Route
                            path="fence-installation"
                            element={<ServiceFenceInstallationPage />}
                        />
                        <Route
                            path="handyman"
                            element={<ServiceHandyManPage />}
                        />
                        <Route
                            path="painting"
                            element={<ServicePantingPage />}
                        />
                        <Route
                            path="pest-control"
                            element={<ServicePestControlPage />}
                        />
                        <Route path="book-service">
                            <Route index element={<BookServicePage />} />
                            <Route path="success" element={<SuccessPage />} />
                        </Route>
                    </Route>
                    <Route path="aboutUs" element={<AboutUsPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="professionals">
                        <Route index element={<ProfessionalsPage />} />
                        <Route
                            path=":id"
                            element={<ProfessionalReviewPage />}
                        />
                    </Route>
                    <Route path="payment" element={<PaymentPage />} />
                </Routes>
            </div>
        </div>
        //</BrowserRouter>
    );
};
