import { createContext, useState, useContext, useEffect } from "react";

const AuthContext= createContext();

export const AuthProvider=({children})=>{
    const[token, setToken]= useState('');


    useEffect(() => {
        // Check if a token is already stored (e.g., in local storage)
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
        }
      }, []);


    return(
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth=()=> useContext(AuthContext);
