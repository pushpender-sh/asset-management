import { createContext, useState, useContext, useEffect } from "react";

const AuthContext= createContext();

export const AuthProvider=({children})=>{
    const[token, setToken]= useState('');
    const[assetvalue, setAssetvalue]=useState();


    useEffect(() => {
        // Check if a token is already stored (e.g., in local storage)
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
        }
      }, []);


      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://devassetapi.remotestate.com/asset-management/user/dashboard', {
              method: 'GET',
              headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
              },
            });
    
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
    
            const data = await response.json();
            setAssetvalue(data);
            // console.log(data.totalAssets);
            // console.log(assetvalue );
            
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, [token]);


    return(
        <AuthContext.Provider value={{token, setToken, assetvalue, setAssetvalue}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth=()=> useContext(AuthContext);
