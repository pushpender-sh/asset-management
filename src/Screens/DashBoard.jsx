// import React, { useEffect } from 'react';
import { useAuth } from './GlobalContext';
import Navbar from './Navbar';

import './DashBoard.css';
import CircularProgress from '@mui/material/CircularProgress';

import img1 from '../Images/img1.png'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'

import uparrow from '../Images/uparrow.svg'


import laptop from '../Images/laptop.jpg'
import mouse from '../Images/mouse.jpg'
import harddrive from '../Images/harddrive.jpg'
import pendrive from '../Images/pendrive.jpg'
import mobile from '../Images/mobile.jpg'
import sim from '../Images/sim.jpg'



function Box({assetImage, assetDiscription, assetCount, arrow, assetRaise}){
    return(
        <div className='box'>
            <div className='imagediv'>
            <img src={assetImage} alt="assetImage" style={{borderRadius:"100%", height:"50px"}} />
            </div>
             <div className='asset-details '>
               <div style={{fontSize:"17px"}}> {assetDiscription}</div>
               <div style={{fontSize:"40px", fontWeight:"bold"}}> {assetCount} </div>
                <div className='raisevalue' style={{fontSize:"13px"}}> <img src={arrow} alt="" height="12px" />{assetRaise}</div>
             </div>
        </div>
    )
}

function Card({ assetImage ,assetName, assetCount}){
    return(
        <div className='card'>
            <div className='imageandname'>
        <img src={assetImage} alt={assetName} /> 
            <div>
        {assetName}
            </div>

            </div>
            <div className='countvalue'>
        {assetCount}
            </div>
        </div>
    )
}

export default function Dashboard() {

  const {assetvalue, token, navigate } = useAuth();

  if(!token){
    navigate('/')
    return null
 }

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
      <Box assetImage={img1} assetDiscription={"Total Assets"} assetCount={assetvalue.totalAssets} arrow={uparrow} assetRaise={"7.8% this month"}/>
      <Box assetImage={img2} assetDiscription={"Distributed Assets"} assetCount={assetvalue.distributedAssets} arrow={uparrow} assetRaise={"3.4% this month"}/>
      <Box assetImage={img3} assetDiscription={"Available Assets"} assetCount={assetvalue.availableAssets} />
      

      <div className='bigcard'>
        
      <h2>Total Assets</h2>
      <div className='card-header'>
        <div>Categories</div>
        <div>Quantity</div>
      </div>

        <div className='below-header-line'></div>
      <Card assetImage={laptop} assetName={"Laptop"} assetCount={assetvalue.laptopQuantity}/>
      <Card assetImage={mouse} assetName={"Mouse"} assetCount={assetvalue.mouseQuantity}/>
      <Card assetImage={harddrive} assetName={"Hard Disk"} assetCount={assetvalue.hardDiskQuantity}/>
      <Card assetImage={pendrive} assetName={"Pen Drive"} assetCount={assetvalue.penDriveQuantity}/>
      <Card assetImage={mobile} assetName={"Mobile"} assetCount={assetvalue.mobileQuantity}/>
      <Card assetImage={sim} assetName={"SIM Card"} assetCount={assetvalue.simQuantity}/>

      </div>
      </div>
    </div>
  );
}
