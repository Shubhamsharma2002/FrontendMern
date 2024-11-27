import { useContext, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [token , settoken] = useState(localStorage.getItem("token"));
    const storetokenInLs = (serverToken) =>{
         return  localStorage.setItem("token", serverToken);
    };

    let islogedIn = !!token ;
    const LogoutUser = () =>{
        settoken("");
        return localStorage.removeItem("token")
    }
    return(
        <AuthContext.Provider value = {{islogedIn,storetokenInLs, LogoutUser}}>
        {children}
    </AuthContext.Provider>
    ) ;
}


export const useAuth = () =>{
    const authContextValue = useContext(AuthContext)

    if(!authContextValue){
        throw new Error("useAuth used outside the provider")
    }
    return authContextValue;
}