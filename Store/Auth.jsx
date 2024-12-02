import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [token , settoken] = useState(localStorage.getItem("token"));
    const [user, setuser] = useState("")
    const storetokenInLs = (serverToken) =>{
        settoken(serverToken)
         return  localStorage.setItem("token", serverToken);
    };

    let islogedIn = !!token ;
    const LogoutUser = () =>{
        settoken("");
        return localStorage.removeItem("token")
    }

    const userAuthentication = async() =>{
      try {
          const response = await fetch("http://localhost:5000/api/v1/user/user",{
            method:"GET",
            headers:{
                Authorization:`${token}`,
            }
          })

        if(response.ok){
            const data = await response.json();
            console.log(data.userData);
            
            setuser(data.userData);
        }
      } catch (error) {
        
      }
    
    }
    useEffect(() =>{
        userAuthentication();
    },[]);
    return(
        <AuthContext.Provider value = {{islogedIn,storetokenInLs, LogoutUser,user}}>
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