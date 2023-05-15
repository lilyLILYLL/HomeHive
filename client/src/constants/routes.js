import { AboutUsPage } from "../pages/AboutUsPage";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";

import { ServicesPage } from "../pages/services/ServicesPage";
import { ProfessionalsPage } from "../pages/ProfessionalsPage";

export const routes = [
    {
        path: "/",
        element: <HomePage />,
        label: "Home",
    },
    {
        path: "services",
        element: <ServicesPage />,
        label: "Services",
    },
    {
        path: "aboutUs",
        element: <AboutUsPage />,
        label: "About Us",
    },

    {
        path: "contact",
        element: <ContactPage />,
        label: "Contact",
    },
    {
        path: "professionals",
        element: <ProfessionalsPage />,
        label: "Professionals",
    },
];
