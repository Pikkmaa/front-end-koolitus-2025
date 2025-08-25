import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthContextProvider({children}) {
    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <AuthContext.Provider value={{loggedIn, setLoggedIn}} >
            {children}
        </AuthContext.Provider>
    )
}