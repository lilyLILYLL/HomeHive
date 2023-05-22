import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isLogedin, setIsLogedin] = useState(false);
    const contextValue = { isLogedin, setIsLogedin };
    console.log(isLogedin);
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
