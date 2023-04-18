import { AboutUsPage } from "../pages/AboutUsPage";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { PartnershipPage } from "../pages/PartnershipPage";
import { ServicesPage } from "../pages/ServicesPage";

export default [
    {
        path: "/",
        element: <HomePage />,
        label: "Home",
    },
    {
        path: "/aboutUs",
        element: <AboutUsPage />,
        label: "About Us",
    },
    {
        path: "/services",
        element: <ServicesPage />,
        label: "Services",
    },
    {
        path: "/contact",
        element: <ContactPage />,
        label: "Contact",
    },
    {
        path: "/partnership",
        element: <PartnershipPage />,
        label: "Partnership",
    },
];
