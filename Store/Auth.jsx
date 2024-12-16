import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [token , settoken] = useState(localStorage.getItem("token"));
    const [user, setuser] = useState("")
    // this state is use to protect the admin routes 
    const [loading, setloading] = useState(true);
    const authorizationToken = `${token}`;
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
           setloading(true);
          const response = await fetch("http://localhost:5000/api/v1/user/user",{
            method:"GET",
            headers:{
                Authorization:authorizationToken,
            }
          })

        if(response.ok){
            const data = await response.json();
            console.log(data.userData);
            
            setuser(data.userData);
            setloading(false);
        }else{
            setloading(false);
        }
      } catch (error) {
        
      }
    
    }
    useEffect(() =>{
        userAuthentication();
    },[]);
    return(
        <AuthContext.Provider value = {{islogedIn,storetokenInLs, LogoutUser,user,authorizationToken,loading}}>
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