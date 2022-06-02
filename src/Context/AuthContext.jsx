import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
 const [isAuth,setIsAuth] = useState(false);

 let toggle=()=>{
     setIsAuth(!isAuth)
 }

 

    return (
        <AuthContext.Provider value={{isAuth,toggle}}>{children}</AuthContext.Provider>
    )
}
