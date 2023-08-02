import React, { useEffect } from 'react'
import './Modals.css'
import Switch from '@mui/material/Switch';
import { useAuth } from './GlobalContext'

export default function Modals() {

  const{isbuttonopen, setIsbuttonopen, selectedValue, setSelectedValue, addedData, setAddedData, token, editData,  selectedRowKey}= useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (e.target.type === 'date') {
      const dateValue = value + 'T00:00:00.000Z';
      setAddedData({ ...addedData, "AssetType": selectedValue, [name]: dateValue });
    } else {
      setAddedData({ ...addedData, "AssetType": selectedValue, [name]: value });
    }
  };

  const handleSubmitForm=()=>{
  fetch('https://devassetapi.remotestate.com/asset-management/user/asset/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token, 
    },
    body: JSON.stringify(addedData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('API response:', data);
    })
    .catch((error) => {
      console.error('Error posting data:', error);
    });

    setIsbuttonopen(false)
    setAddedData({})
    setSelectedValue("None")
  }
 
  // console.log(addedData) 


  const handleUpdateForm=()=>{

    useEffect=(()=>{
    fetch('https://devassetapi.remotestate.com/asset-management/user/asset/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token, 
      },
      body: JSON.stringify({...addedData,"id":selectedRowKey}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('API response:', data);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
      
  },[isbuttonopen]);
  
    setIsbuttonopen(false)
    setAddedData({})
    setSelectedValue("None")
  }


  if(selectedValue==="laptop"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
        <div>Owned By</div> 
        <select name='ownedBy' value={addedData.ownedBy} onChange={handleInputChange}  className='modalselect'  id="" >
          <option  value=""  hidden></option>
          <option value="client">Client</option>
          <option value="remote_state">RemoteState</option>
        </select>
        </div>
        {addedData.ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input name='clientName' className='modalinputfield' type="text" placeholder='Enter Client Name' onChange={handleInputChange} />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input name='brand' className='modalinputfield' type="text" placeholder='Enter Brand Name'
          onChange={handleInputChange} />
          </div>
          <div>
          <div>Model</div>
          <input name='model' className='modalinputfield' type="text" placeholder='Enter Model Number'
           onChange={handleInputChange}  />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Serial Number</div>
          <input name='serialNo' className='modalinputfield' type="text" placeholder='Enter Serial Number' 
          onChange={handleInputChange} />
          </div>
          <div>
          <div>Series</div>
          <input name='series' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Series' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Warranty Start Date</div>
          <input name='warrantyStartDate'  className='modalinputfield' type="date" placeholder='mm/dd/yyyy' 
          onChange={handleInputChange} />
          </div>
          <div>
          <div>Warranty Expiry Date</div>
          <input name='warrantyExpiryDate' className='modalinputfield' type="date" placeholder='mm/dd/yyyy' 
          onChange={handleInputChange} />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>RAM</div>
          <input  name='ram' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter RAM' />
          </div>
          <div>
          <div>Processor</div>
          <input  name='processor' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Processor' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Screen Resolution</div>
          <input  name='screenResolution' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Screen Resolution' />
          </div>
          <div>
          <div>Operationg System</div>
          <input  name='operatingSystem' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Operationg System' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Date Of Purchase</div>
          <input name='purchasedDate' className='modalinputfield' type="date" placeholder='dd/mm/yyyy' 
          onChange={handleInputChange} />
          </div>
          <div>
          <div>Charger</div>
          <div >
            No <Switch name='charger' onChange={(e)=>setAddedData({...addedData, [e.target.name] :e.target.checked})}/> Yes
          </div>
          </div>
        </div>

        <div className='row'>
          <button  onClick={()=>{
        setIsbuttonopen(false)
       setSelectedValue("None")}} className='end-buttons'>Cancel</button>
          <button onClick={editData?handleUpdateForm: handleSubmitForm} className='end-buttons'>{editData?"Update": "Save"}</button>
          </div>
        </div>
    )
  } else if(selectedValue==="mouse"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
        <div>Owned By</div> 
        <select name='ownedBy' value={addedData.ownedBy} onChange={handleInputChange}  className='modalselect'  id="" >
          <option  value=""  hidden></option>
          <option value="client">Client</option>
          <option value="remote_state">RemoteState</option>
        </select>
        </div>
        {addedData.ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input name='clientName' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Client Name' />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input name='brand' onChange={handleInputChange}  className='modalinputfield' type="text" placeholder='Enter Brand Name' />
          </div>
          <div>
          <div>Model</div>
          <input name='model' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Model Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Serial Number</div>
          <input name='serialNo' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Serial Number' />
          </div>
          <div>
          <div>Date Of Purchase</div>
          <input name='purchasedDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='dd/mm/yyyy' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Warranty Start Date</div>
          <input name='warrantyStartDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
          <div>
          <div>Warranty Expiry Date</div>
          <input name='warrantyExpiryDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
        </div>

        <div className='row'>
          <button  onClick={()=>{
        setIsbuttonopen(false)
       setSelectedValue("None")}} className='end-buttons'>Cancel</button>
          <button onClick={editData?handleUpdateForm: handleSubmitForm} className='end-buttons'>{editData?"Update": "Save"}</button>
          </div>
        </div>

      
    )
  } else if(selectedValue==="pen drive"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
          <div>Owned By</div> 
        <select name='ownedBy' value={addedData.ownedBy} onChange={ handleInputChange}  className='modalselect'  id="" >
          <option  value=""  hidden></option>
          <option value="client">Client</option>
          <option value="remote_state">RemoteState</option>
        </select>
        </div>
        {addedData.ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input name='clientName' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Client Name' />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input name='brand' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Brand Name' />
          </div>
          <div>
          <div>Model</div>
          <input name='model' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Model Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Serial Number</div>
          <input name='serialNo' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Serial Number' />
          </div>
          <div>
          <div>Storage</div>
          <input name='storage' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Storage' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Warranty Start Date</div>
          <input name='warrantyStartDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
          <div>
          <div>Warranty Expiry Date</div>
          <input name='warrantyExpiryDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
        </div>

        <div className='row'>
        <div>
          <div>Date Of Purchase</div>
          <input name='purchasedDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='dd/mm/yyyy' />
          </div>
        </div>
        
        <div className='row'>
          <button  onClick={()=>{
        setIsbuttonopen(false)
       setSelectedValue("None")}} className='end-buttons'>Cancel</button>
          <button onClick={editData?handleUpdateForm: handleSubmitForm} className='end-buttons'>{editData?"Update": "Save"}</button>
          </div>
        </div>

      
    )
  }   else if(selectedValue==="hard disk"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
          <div>Owned By</div> 
        <select name='ownedBy' value={addedData.ownedBy} onChange={handleInputChange}  className='modalselect'  id="" >
          <option  value=""  hidden></option>
          <option value="client">Client</option>
          <option value="remote_state">RemoteState</option>
        </select>
        </div>
        {addedData.ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input name='clientName' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Client Name' />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input name='brand' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Brand Name' />
          </div>
          <div>
          <div>Model</div>
          <input name='model' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Model Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Serial Number</div>
          <input name='serialNo' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Serial Number' />
          </div>
          <div>
          <div>Storage</div>
          <input name='storage' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Storage' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Warranty Start Date</div>
          <input name='warrantyStartDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
          <div>
          <div>Warranty Expiry Date</div>
          <input name='warrantyExpiryDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
        </div>

        <div className='row'>
        <div>
          <div>Date Of Purchase</div>
          <input name='purchasedDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='dd/mm/yyyy' />
          </div>
        </div>
        
        <div className='row'>
          <button  onClick={()=>{
        setIsbuttonopen(false)
       setSelectedValue("None")}} className='end-buttons'>Cancel</button>
          <button onClick={editData?handleUpdateForm: handleSubmitForm} className='end-buttons'>{editData?"Update": "Save"}</button>
          </div>
        </div>

      
    )
  }  else if(selectedValue==="mobile"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
          <div>Owned By</div> 
        <select name='ownedBy' value={addedData.ownedBy} onChange={ handleInputChange}  className='modalselect'  id="" >
          <option  value=""  hidden></option>
          <option value="client">Client</option>
          <option value="remote_state">RemoteState</option>
        </select>
        </div>
        {addedData.ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input className='modalinputfield' type="text" placeholder='Enter Client Name' />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input name='brand' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Brand Name' />
          </div>
          <div>
          <div>Model</div>
          <input name='model' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Model Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>RAM</div>
          <input name='ram' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter RAM' />
          </div>
          <div>
          <div>OS type</div>
          <select name='osType' onChange={handleInputChange} className='modalselect'  id="">
            <option value="Android">Android</option>
            <option value="iOS">iOS</option>
          </select>
          </div>
        </div>

        <div className='row'>
          <div>
          <div>IMEI Number-1</div>
          <input name='imeiNumber1' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter IMEI Number' />
          </div>
          <div>
          <div>IMEI Number-2</div>
          <input name='imeiNumber2' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter IMEI Number' />
          </div>
        </div>


        <div className='row'>
          <div>
          <div>Date Of Purchase</div>
          <input name='purchasedDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='dd/mm/yyyy' />
          </div>
          <div>
          <div>Serial Number</div>
          <input name='serialNo' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Serial Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Warranty Start Date</div>
          <input name='warrantyStartDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
          <div>
          <div>Warranty Expiry Date</div>
          <input name='warrantyExpiryDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
        </div>

        <div className='row'>
          <button  onClick={()=>{
        setIsbuttonopen(false)
       setSelectedValue("None")}} className='end-buttons'>Cancel</button>
         <button onClick={editData?handleUpdateForm: handleSubmitForm} className='end-buttons'>{editData?"Update": "Save"}</button>
          </div>
        </div>
    )
  }  else if(selectedValue==="sim"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
          <div>Owned By</div> 
        <select name='ownedBy' value={addedData.ownedBy} onChange={handleInputChange}  className='modalselect'  id="" >
          <option  value=""  hidden></option>
          <option value="client">Client</option>
          <option value="remote_state">RemoteState</option>
        </select>
        </div>
        {addedData.ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input name='clientName' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Client Name' />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input name='brand' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Brand Name' />
          </div>
          <div>
          <div>SIM Card Number</div>
          <input name='simNo' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter SIM Card Number' />
          </div>
        </div>

        

        <div className='row'>
          <div>
          <div>Mobile Number</div>
          <input name='phoneNo' onChange={handleInputChange} className='modalinputfield' type="text" placeholder='Enter Mobile Number' />
          </div>
          <div>
          <div>Date Of Purchase</div>
          <input name='purchasedDate' onChange={handleInputChange} className='modalinputfield' type="date" placeholder='dd/mm/yyyy' />
          </div>
        </div>

        <div className='row'>
          <button  onClick={()=>{
        setIsbuttonopen(false)
       setSelectedValue("None")}} className='end-buttons'>Cancel</button>
          <button onClick={editData?handleUpdateForm: handleSubmitForm} className='end-buttons'>{editData?"Update": "Save"}</button>
          </div>
        </div>
    )
  }

}
