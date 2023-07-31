import React from 'react'
import './AssetList.css'
import { useAuth } from '../Screens/GlobalContext'
import Modals from './Modals'
import Navbar from './Navbar'
import search from '../Images/search.jpg'
import cross from '../Images/cross.png'
import plus from '../Images/plus.png'
import CircularProgress from '@mui/material/CircularProgress';


function DataEntries({assetDetails }) {
  
  
    // console.log(filteredAssets)

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
        {assetDetails.map((value) => (
          <tr key={value.id}>
            <td style={{color:"#6200EE"}}>{value.brand}</td>
            <td>{value.model}</td>
            <td>{value.serialNo}</td>
            <td className='assettype'>{value.AssetType}</td>
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

const HandleAddAssets=({setIsbuttonopen, selectedValue, setSelectedValue})=>{

  

  return(
    <div className='addnewasset'>
      <div className='addassetheader'>
      <div style={{fontWeight:"bold"}}>Asset Details</div>
      <img className='cross' src={cross} alt="" onClick={()=>setIsbuttonopen(false)}/>
      </div>

      <div className='assignasset'>
         <div style={{color:"#6200EE", fontSize:"20px", fontWeight:"bolder"}}>Assign Asset </div>
        <select value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)} className='assignasset-select' name="" id="" >
              <option value="All">All</option>
              <option value="Laptop">Laptop</option>
              <option value="Mouse">Mouse</option>
              <option value="PenDrive">Pen Drive</option>
              <option value="HardDrive">Hard Drive</option>
              <option value="Mobile">Mobile</option>
              <option value="SIMCard">SIM Card</option>
        </select>
     {/* {console.log(selectedValue)} */}
         
       <Modals/>

        
      </div>
    </div>
  )
}

function DataTable({assetDetails, input, setInput, checked, setChecked, isbuttonopen, setIsbuttonopen}){

  const handleButtonClick = () => {
    if (isbuttonopen) {
      setIsbuttonopen(false)
    } else {
      setIsbuttonopen(true);
    }
  };


  
  

  return(
    <div className='table'>
    <div className='header-field'>
          <div className='left-elements'>
            <img src={search} alt="" />
            <input className='inputfield' value={input} type="text" placeholder='Search' 
            onChange={(e)=>
              {setInput(e.target.value)}
            }

            />
            <img className='cross' src={cross} alt="" onClick={()=>setInput('')}/>
            </div>

            <div className=' right-elements'>
              <div><input value={checked} type="checkbox" onChange={(e)=>{setChecked(e.target.checked)}} /> Available </div>
              
              <fieldset>
                <legend> Asset Type</legend>
              <select className='tableselects' name="Asset Type" id="">
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
              <select className='tableselects' name="Warranty" id="">
                <option disabled hidden value="">Warranty</option>
                <option value="">None</option>
                <option value="">Expires in 1 months</option>
                <option value="">Expires in 3 months</option>
                <option value="">Expires in 6 months</option>
                <option value="">Expired</option>
              </select>
              </fieldset>
              <button className='addassetbutton' onClick={handleButtonClick} > <img src={plus} alt="" />Add Asset</button>
            </div>
        </div>

         <div>
          <DataEntries assetDetails={assetDetails} input={input} checked={checked}  />
          
         </div>

        </div>
  )
}

export default function AssetLists() {
    
    const { input, setInput, checked, setChecked, isbuttonopen, setIsbuttonopen, assetDetails, selectedValue, setSelectedValue} = useAuth();
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
        <DataTable input={input} setInput={setInput} checked={checked} setChecked={setChecked} isbuttonopen={isbuttonopen} setIsbuttonopen={setIsbuttonopen} assetDetails={assetDetails} />
         <div className='addassetPopup'>{isbuttonopen && <HandleAddAssets setIsbuttonopen={setIsbuttonopen} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>} </div>
    </div>
    </div>
  )
}
