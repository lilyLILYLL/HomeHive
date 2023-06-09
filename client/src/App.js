import { Layout } from "../src/components/layout/Layout";
import { MobileNotSupportedPage } from "../src/pages/MobileNotSupportedPage";
import React, { useState, useEffect } from "react";
import { AuthContextProvider } from "../src/context/AuthContext";
function App() {
    // const [width, setWidth] = useState(window.innerWidth);
    // useEffect(() => {
    //     const updateWidth = () => {
    //         setWidth(window.innerWidth);
    //     };
    //     const unsubcribe = window.addEventListener("resize", updateWidth);
    //     return () => window.removeEventListener("resize", updateWidth);
    // }, []);

    // return width < 550 ? <MobileNotSupportedPage /> : <Layout />;
    return (
        <AuthContextProvider>
            <Layout />
        </AuthContextProvider>
    );
}

export default App;
