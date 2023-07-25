// import React, { useEffect } from 'react';
import { useAuth } from './GlobalContext';
import Navbar from '../Components/Navbar';
import './DashBoard.css';
import CircularProgress from '@mui/material/CircularProgress';
import img1 from '../Images/img1.png'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'

function Box({assetImage, assetName, assetCount, assetRaise}){
    return(
        <div className='box'>
            <div className='imagediv'>
            <img src={assetImage} alt="assetImage" style={{borderRadius:"100%", height:"50px"}} />
            </div>
             <div className='asset-details '>
               <div style={{fontSize:"17px"}}> {assetName}</div>
               <div style={{fontSize:"40px", fontWeight:"bold"}}> {assetCount} </div>
                <div style={{fontSize:"13px"}}>{assetRaise}</div>
             </div>
        </div>
    )
}

function BigCard(){
    return(
        <div className='card'>
        card
        </div>
    )
}

export default function Dashboard() {
  const {assetvalue } = useAuth();
  if(!assetvalue){
    return(
        <div> <CircularProgress/> <br />
        Loading...</div>
    )
  }
//   console.log(assetvalue.distributedAssets)

  return (
    <div>
      <Navbar/>
      <div className='asset-boxes'>
      <Box assetImage={img1} assetName={"Total Assets"} assetCount={assetvalue.totalAssets} assetRaise={"7.8% this month"}/>
      <Box assetImage={img2} assetName={"Distributed Assets"} assetCount={assetvalue.distributedAssets} assetRaise={"3.4% this month"}/>
      <Box assetImage={img3} assetName={"Available Assets"} assetCount={assetvalue.availableAssets} />
      </div>
      <div className='bigcard'>
      <BigCard/>
      </div>
    </div>
  );
}
