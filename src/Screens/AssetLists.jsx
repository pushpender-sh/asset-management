import React, { useState } from 'react'
import './AssetList.css'
import { useAuth } from '../Screens/GlobalContext'

import Navbar from './Navbar'
import search from '../Images/search.jpg'
import cross from '../Images/cross.png'
import plus from '../Images/plus.png'
import CircularProgress from '@mui/material/CircularProgress';

function DataEntries({ assetDetails, input }) {
  const filteredAssets = input
    ? assetDetails.filter((item) =>
        item.AssetType.toLowerCase().includes(input.toLowerCase())
      )
    : assetDetails;

  return (
    <table className='entries-table'>
      <thead className='heading-row'>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Serial Number</th>
          <th>Asset Type</th>
          <th>Date Purchased</th>
          <th>Warranty Start Date</th>
          <th>Warranty Expires</th>
          <th>Assigned To</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {filteredAssets.map((value) => (
          <tr key={value.serialNo}>
            <td>{value.brand}</td>
            <td>{value.model}</td>
            <td>{value.serialNo}</td>
            <td>{value.AssetType}</td>
            <td>{value.purchasedDate}</td>
            <td>{value.warrantyStartDate}</td>
            <td>{value.warrantyExpiryDate}</td>
            <td>{value.assignedTo}</td>
            <td>{value.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


function DataTable({input, setInput, assetDetails}){
  return(
    <div className='table'>
    <div className='header-field'>
          <div className='left-elements'>
            <img src={search} alt="" />
            <input className='inputfield' value={input} type="text" placeholder='Search' 
            onChange={(e)=>setInput(e.target.value)}

            />
            <img className='cross' src={cross} alt="" onClick={()=>setInput('')}/>
            </div>

            <div className=' right-elements'>
              <div><input type="checkbox" /> Available </div>
              
              <fieldset>
                <legend> Asset Type</legend>
              <select name="Asset Type" id="">
                <option value="">All</option>
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

         <div>
          <DataEntries assetDetails={assetDetails} input={input} />
         </div>

        </div>
  )
}

export default function AssetLists() {
    const [input, setInput]= useState('')
    const { assetDetails} = useAuth();
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
