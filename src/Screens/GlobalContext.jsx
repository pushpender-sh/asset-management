import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'


const AuthContext= createContext();

export const AuthProvider=({children})=>{
    const[token, setToken]= useState('');
    const[assetvalue, setAssetvalue]=useState();
    const[assetDetails, setAssetDetails]=useState();
    const [input, setInput]= useState('')
    const [checked, setChecked]= useState(false)
    const [isbuttonopen, setIsbuttonopen] = useState(false)
    const[selectedValue, setSelectedValue]= useState('')


    const navigate = useNavigate('')



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


      useEffect(() => {
        const fetchData = async () => {
          try {
            const params={
              name: input,
              available:checked,
              limit:10
            }
            const response = await fetch(`https://devassetapi.remotestate.com/asset-management/user/asset?${new URLSearchParams(params).toString()}`, {
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
            setAssetDetails(data.GetAsset);
            // console.log(data.totalAssets);
            // console.log(assetvalue );
            
          } catch (error) {
            console.error(error);
          }
        };
        const timer = setTimeout(async () => {
          fetchData()
        }, 300);
  
        return () => {
          clearTimeout(timer);
        };
    
        // fetchData();
      }, [token, input, checked ]);




    return(
        <AuthContext.Provider value={{token, setToken, assetvalue, navigate,
                              assetDetails,input, setInput, checked,setChecked,
                              isbuttonopen, setIsbuttonopen, selectedValue, setSelectedValue
                              }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth=()=> useContext(AuthContext);
