import React, { useState } from 'react'
import './AssetList.css'
import { useAuth } from '../Screens/GlobalContext'

import Navbar from './Navbar'
import search from '../Images/search.jpg'
import cross from '../Images/cross.png'
import plus from '../Images/plus.png'
import CircularProgress from '@mui/material/CircularProgress';

function DataEntries({assetDetails}){
  return(
    <div>
      
    </div>
  )
}

function DataTable({input, setInput, assetDetails}){
  return(
    <div className='table'>
    <div className='header-field'>
          <div className='left-elements'>
            <img src={search} alt="" />
            <input className='inputfield' value={input} type="text" placeholder='Search' 
            onChange={(e)=>setInput(e.target.value)}
            // const filterValue= {assetDetails.map((value)=>{console.log(value.AssetType)})}

            />
            <img src={cross} alt="" />
            </div>

            <div className=' right-elements'>
              <div><input type="checkbox" /> Available </div>
              
              <fieldset>
                <legend> Asset Type</legend>
              <select name="Asset Type" id="">
                <option hidden value="">All</option>
                <option value="">Laptop</option>
                <option value="">Mouse</option>
                <option value="">Pen Drive</option>
                <option value="">Hard Drive</option>
                <option value="">Mobile</option>
                <option value="">SIM Card</option>
              </select>
              </fieldset>

              <fieldset>
                <legend> Warranty</legend>
              <select name="Warranty" id="">
                <option disabled hidden value="">Warranty</option>
                <option value="">None</option>
                <option value="">Expires in 1 months</option>
                <option value="">Expires in 3 months</option>
                <option value="">Expires in 6 months</option>
                <option value="">Expired</option>
              </select>
              </fieldset>
              <button  > <img src={plus} alt="" />Add Asset</button>
            </div>
        </div>

        <div className='heading-row'>
          <div>Make</div>
          <div>Model</div>
          <div>Serial Number</div>
          <div>Asset Type</div>
          <div>Date Purchased</div>
          <div>Warranry Start Date</div>
          <div>Warranty Expires</div>
          <div>Assigned To</div>
          <div>Action</div>

        </div>
         <div>
          <DataEntries assetDetails={assetDetails} />
         </div>

        </div>
  )
}

export default function AssetLists() {
    const [input, setInput]= useState('')
    const { assetDetails,  navigate} = useAuth();
    // console.log(assetDetails);
    if(!assetDetails){
      return(
          <div> <CircularProgress/> <br />
          Loading...</div>
      )
    }
    

  return (
    <div>  
    <Navbar/>
    <div style={{paddingTop:'1px'}}>
        <DataTable input={input} setInput={setInput} assetDetails={assetDetails} />
    </div>
    </div>
  )
}
