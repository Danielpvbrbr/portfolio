import { createContext, useState } from "react"

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [route, setRoute] = useState("Home");
    const isMobile = screen.width >= 900;

    return (
        <AuthContext.Provider value={{
            route: route,
            setRoute: setRoute,
            isMobile: isMobile,
        }}>
            {children}
        </AuthContext.Provider>
    )

}