import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/scss/index.scss";

import {
    BrowserRouter,
    createBrowserRouter,
    createHashRouter,
    RouterProvider,
} from "react-router-dom";

import routes from "./constants/routes";

const isProduction = process.env.NODE_ENV === "production";

export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: routes,
    },
    {
        basename: isProduction ? "/HomeHive" : "/",
    },
]);

console.log(isProduction);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
