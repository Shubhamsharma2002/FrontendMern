import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const storetokenInLs = (serverToken) =>{
         return  localStorage.setItem("token", serverToken);
    };
    return(
        <AuthContext.Provider value = {{storetokenInLs}}>
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