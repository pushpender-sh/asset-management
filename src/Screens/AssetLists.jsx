import React from 'react'
import './AssetList.css'
import { useAuth } from '../Screens/GlobalContext'
// import Modals from './Modals'
import Navbar from './Navbar'
import search from '../Images/search.jpg'
import cross from '../Images/cross.png'
import plus from '../Images/plus.png'
import CircularProgress from '@mui/material/CircularProgress';
import ToggleButton from '@mui/material/ToggleButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Delete,Edit } from './Actions'
import Forms from './Forms'

function DataEntries({assetDetails,actionButton, setActionButton,selectedRowKey, setSelectedRowKey }) {

  const{token, deletePopup,setDeletePopup,selectedValue, setSelectedValue, setIsbuttonopen,editdata, setEditData, addedData} =useAuth()

  function handleActionButton(){
    async function fetchData() {
      try {
          var params = {
              assetId: selectedRowKey,
              assetType: selectedValue,
          }
          const res = await fetch(`https://devassetapi.remotestate.com/asset-management/user/asset/specifications?${new URLSearchParams(params).toString()}`,
              {
                  method: 'GET',
                  headers: {
                      'Authorization': token,
                      'Content-Type': 'application/json'
                  }
              }
          )
          if (!res.ok) {
              throw new Error('not available');
          }
          const dataFromJSON = await res.json();
          setEditData(dataFromJSON)
      }
      catch (err) {
          console.log(err);
      }}
    
    return(
      <div className='handleactionButton'>
        <div className='edit action' onClick={async()=>{
           try{
            await fetchData();
          setIsbuttonopen(true);
          setActionButton(false);
          }catch(err){
            console.log(err)
          }}} > <EditIcon/> <div> Edit Asset </div></div>

        <div className='delete action' onClick={()=>
        { setActionButton(false)
          if(deletePopup===false) setDeletePopup(true)
        else {setDeletePopup(false)
               setActionButton(false)}}}>
           <DeleteIcon/> <div> Delete Asset </div></div>
      </div>
    )
  }

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
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {assetDetails.map((value) => (
          <tr key={value.id}>
            <td style={{color:"#6200EE"}}>{value.brand}</td>
            <td >{value.model}</td>
            <td>{value.serialNo}</td>
            <td className='assettype'>{value.AssetType}</td>
            <td>{value.purchasedDate}</td>
            <td>{value.warrantyStartDate}</td>
            <td>{value.warrantyExpiryDate}</td>
            <td>{value.assignedTo}</td>
            <td>{value.status}</td>
            <td style={{display:"flex"}}>
              <ToggleButton 
              sx={{height:"40px", width:"40px"}}
              onClick={
                ()=>{ 
                  if(actionButton===true && selectedRowKey===value.id ) {setActionButton(false)}
                  else{setActionButton(true)}  
                  setSelectedRowKey(value.id)
                  setSelectedValue(value.AssetType)}}    
                  >... </ToggleButton>
            {actionButton && selectedRowKey === value.id && handleActionButton()}
            </td>
          </tr>

        ))}

      </tbody>
    </table>
  );
}

const HandleAddAssets=({setIsbuttonopen, selectedValue, setSelectedValue, setActionButton, setEditData})=>{

  // setEditData()

  return(
    <div className='addnewasset'>
      <div className='addassetheader'>
      <div style={{fontWeight:"bold"}}>Asset Details</div>
      <img className='cross' src={cross} alt="" onClick={()=>{
        setIsbuttonopen(false)
       setSelectedValue("None")
       setActionButton(false)}}/>
      </div>

      <div className='assignasset'>
         <div style={{color:"#6200EE", fontSize:"20px", fontWeight:"bolder"}}>Assign Asset </div>
        <select value={selectedValue} onChange={(e)=>{setSelectedValue(e.target.value) }} className='assignasset-select' name="" id="" >
              <option value="All">None</option>
              <option value="laptop">Laptop</option>
              <option value="mouse">Mouse</option>
              <option value="pen drive">Pen Drive</option>
              <option value="hard disk">Hard Disk</option>
              <option value="mobile">Mobile</option>
              <option value="sim">SIM Card</option>
        </select>
     {/* {console.log(selectedValue)} */}
       {/* <Modals/>      */}
       <Forms/>
      </div>
    </div>
  )
}

function DataTable({assetDetails, input, setInput, checked, setChecked, isbuttonopen, setIsbuttonopen, 
  actionButton, setActionButton, selectedRowKey, setSelectedRowKey, setEditData}){

  const handleButtonClick = () => {
    setEditData()
    if (isbuttonopen) {
      setIsbuttonopen(false)
    } else {
      setIsbuttonopen(true);
    }
    setActionButton(false)
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
          <DataEntries assetDetails={assetDetails} input={input} checked={checked} actionButton={actionButton} setActionButton={setActionButton}
          selectedRowKey={selectedRowKey} setSelectedRowKey={setSelectedRowKey}  />
          
         </div>

        </div>
  )
}

export default function AssetLists() {

  
    
    const { token, navigate ,input, setInput, checked, setChecked, isbuttonopen, setIsbuttonopen, assetDetails,
       selectedValue, setSelectedValue,  actionButton, setActionButton, selectedRowKey, setSelectedRowKey,
       deletePopup, setEditData} = useAuth();

       if(!token){
        navigate('/')
        // return null
     }
     
     
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
        <DataTable input={input} setInput={setInput} checked={checked} setChecked={setChecked} isbuttonopen={isbuttonopen} setIsbuttonopen={setIsbuttonopen}
         assetDetails={assetDetails}  actionButton={actionButton} setActionButton={setActionButton} selectedRowKey={selectedRowKey} setSelectedRowKey={setSelectedRowKey} setEditData={setEditData} />

         <div className='addassetPopup'>{isbuttonopen && <HandleAddAssets setIsbuttonopen={setIsbuttonopen} selectedValue={selectedValue} setSelectedValue={setSelectedValue} setActionButton={setActionButton}
           setEditData={setEditData} />} </div>
    </div>
         <div> {deletePopup && <Delete/>}</div>
         {/* <div> {<Edit/>}</div> */}
    </div>
  )
}
