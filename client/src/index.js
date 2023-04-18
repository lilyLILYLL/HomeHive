import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/scss/index.scss";

import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import routes from "./constants/routes";
export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: routes,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
