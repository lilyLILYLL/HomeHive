import React from "react";

export const PageTitlte = ({ title }) => {
    return (
        <h1
            style={{
                fontSize: "60px",
                marginBottom: "40px",
                textAlign: "center",
            }}
        >
            {title}
        </h1>
    );
};
