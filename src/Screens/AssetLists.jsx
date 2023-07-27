import React from 'react'
import './AssetList.css'
import { useAuth } from '../Screens/GlobalContext'

import Navbar from './Navbar'
import search from '../Images/search.jpg'
import cross from '../Images/cross.png'
import CircularProgress from '@mui/material/CircularProgress';


export default function AssetLists() {

    const { assetDetails,  navigate} = useAuth();
    // console.log(assetDetails);
    if(!assetDetails){
      return(
          <div> <CircularProgress/> <br />
          Loading...</div>
      )
    }

  return (
    <div className='top-div'>  
    <Navbar/>
        <div className='header-field'>
            <img src={search} alt="" />
            <input type="text" placeholder='Search' style={{height: "30px"}}
            const filterValue= {assetDetails.map((value)=>{console.log(value.AssetType)})}
            
            />
            <img src={cross} alt="" />

        </div>
    </div>
  )
}
