import React from 'react'
import './Modals.css'
import Switch from '@mui/material/Switch';
import { useAuth } from './GlobalContext'

export default function Modals() {

  const{selectedValue,ownedBy, setOwnedBy, addedData, setAddedData}= useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddedData  ({ ...addedData, [name]: value });
  };

  if(selectedValue==="Laptop"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
        <div>Owned By</div> 
        <select  value={ownedBy} onChange={(e)=>setOwnedBy(e.target.value)}  className='modalselect' name="" id="">
          <option  value="" disabled hidden></option>
          <option value="client">Client</option>
          <option value="RemoteState">RemoteState</option>
        </select>
        </div>
        {ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input className='modalinputfield' type="text" placeholder='Enter Client Name' />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input  className='modalinputfield' type="text" placeholder='Enter Brand Name' />
          </div>
          <div>
          <div>Model</div>
          <input className='modalinputfield' type="text" placeholder='Enter Model Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Serial Number</div>
          <input className='modalinputfield' type="text" placeholder='Enter Serial Number' />
          </div>
          <div>
          <div>Series</div>
          <input className='modalinputfield' type="text" placeholder='Enter Series' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Warranty Start Date</div>
          <input className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
          <div>
          <div>Warranty Expiry Date</div>
          <input className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>RAM</div>
          <input className='modalinputfield' type="text" placeholder='Enter RAM' />
          </div>
          <div>
          <div>Processor</div>
          <input className='modalinputfield' type="text" placeholder='Enter Processor' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Screen Resolution</div>
          <input className='modalinputfield' type="text" placeholder='Enter Screen Resolution' />
          </div>
          <div>
          <div>Operationg System</div>
          <input className='modalinputfield' type="text" placeholder='Enter Operationg System' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Date Of Purchase</div>
          <input className='modalinputfield' type="date" placeholder='dd/mm/yyyy' />
          </div>
          <div>
          <div>Charger</div>
          <div>
            No <Switch/> Yes
          </div>
          </div>
        </div>

        <div className='row'>
          <button className='end-buttons'>Cancel</button>
          <button className='end-buttons'>Save</button>
          </div>
        </div>
    )
  } else if(selectedValue==="Mouse"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
        <div>Owned By</div> 
        <select value={ownedBy} onChange={(e)=>setOwnedBy(e.target.value)}  className='modalselect' name="" id="">
          <option disabled hidden value=""></option>
          <option value="client">Client</option>
          <option value="RemoteState">RemoteState</option>
        </select>
        </div>
        {ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input className='modalinputfield' type="text" placeholder='Enter Client Name' />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input className='modalinputfield' type="text" placeholder='Enter Brand Name' />
          </div>
          <div>
          <div>Model</div>
          <input className='modalinputfield' type="text" placeholder='Enter Model Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Serial Number</div>
          <input className='modalinputfield' type="text" placeholder='Enter Serial Number' />
          </div>
          <div>
          <div>Date Of Purchase</div>
          <input className='modalinputfield' type="date" placeholder='dd/mm/yyyy' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Warranty Start Date</div>
          <input className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
          <div>
          <div>Warranty Expiry Date</div>
          <input className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
        </div>

        <div className='row'>
          <button className='end-buttons'>Cancel</button>
          <button className='end-buttons'>Save</button>
          </div>
        </div>

      
    )
  } else if(selectedValue==="PenDrive"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
        <div>Owned By</div> 
        <select value={ownedBy} onChange={(e)=>setOwnedBy(e.target.value)}  className='modalselect' name="" id="">
          <option disabled hidden value=""></option>
          <option value="client">Client</option>
          <option value="RemoteState">RemoteState</option>
        </select>
        </div>
        {ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input className='modalinputfield' type="text" placeholder='Enter Client Name' />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input className='modalinputfield' type="text" placeholder='Enter Brand Name' />
          </div>
          <div>
          <div>Model</div>
          <input className='modalinputfield' type="text" placeholder='Enter Model Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Serial Number</div>
          <input className='modalinputfield' type="text" placeholder='Enter Serial Number' />
          </div>
          <div>
          <div>Storage</div>
          <input className='modalinputfield' type="text" placeholder='Enter Storage' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Warranty Start Date</div>
          <input className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
          <div>
          <div>Warranty Expiry Date</div>
          <input className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
        </div>

        <div className='row'>
        <div>
          <div>Date Of Purchase</div>
          <input className='modalinputfield' type="date" placeholder='dd/mm/yyyy' />
          </div>
        </div>
        
        <div className='row'>
          <button className='end-buttons'>Cancel</button>
          <button className='end-buttons'>Save</button>
          </div>
        </div>

      
    )
  }   else if(selectedValue==="HardDrive"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
        <div>Owned By</div> 
        <select value={ownedBy} onChange={(e)=>setOwnedBy(e.target.value)}  className='modalselect' name="" id="">
          <option disabled hidden value=""></option>
          <option value="client">Client</option>
          <option value="RemoteState">RemoteState</option>
        </select>
        </div>
        {ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input className='modalinputfield' type="text" placeholder='Enter Client Name' />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input className='modalinputfield' type="text" placeholder='Enter Brand Name' />
          </div>
          <div>
          <div>Model</div>
          <input className='modalinputfield' type="text" placeholder='Enter Model Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Serial Number</div>
          <input className='modalinputfield' type="text" placeholder='Enter Serial Number' />
          </div>
          <div>
          <div>Storage</div>
          <input className='modalinputfield' type="text" placeholder='Enter Storage' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Warranty Start Date</div>
          <input className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
          <div>
          <div>Warranty Expiry Date</div>
          <input className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
        </div>

        <div className='row'>
        <div>
          <div>Date Of Purchase</div>
          <input className='modalinputfield' type="date" placeholder='dd/mm/yyyy' />
          </div>
        </div>
        
        <div className='row'>
          <button className='end-buttons'>Cancel</button>
          <button className='end-buttons'>Save</button>
          </div>
        </div>

      
    )
  }  else if(selectedValue==="Mobile"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
        <div>Owned By</div> 
        <select value={ownedBy} onChange={(e)=>setOwnedBy(e.target.value)}  className='modalselect' name="" id="">
          <option disabled hidden value=""></option>
          <option value="client">Client</option>
          <option value="RemoteState">RemoteState</option>
        </select>
        </div>
        {ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input className='modalinputfield' type="text" placeholder='Enter Client Name' />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input className='modalinputfield' type="text" placeholder='Enter Brand Name' />
          </div>
          <div>
          <div>Model</div>
          <input className='modalinputfield' type="text" placeholder='Enter Model Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>RAM</div>
          <input className='modalinputfield' type="text" placeholder='Enter RAM' />
          </div>
          <div>
          <div>OS type</div>
          <select className='modalselect'  name="" id="">
            <option value="Android">Android</option>
            <option value="iOS">iOS</option>
          </select>
          </div>
        </div>

        <div className='row'>
          <div>
          <div>IMEI Number-1</div>
          <input className='modalinputfield' type="text" placeholder='Enter IMEI Number' />
          </div>
          <div>
          <div>IMEI Number-2</div>
          <input className='modalinputfield' type="text" placeholder='Enter IMEI Number' />
          </div>
        </div>


        <div className='row'>
          <div>
          <div>Date Of Purchase</div>
          <input className='modalinputfield' type="date" placeholder='dd/mm/yyyy' />
          </div>
          <div>
          <div>Serial Number</div>
          <input className='modalinputfield' type="text" placeholder='Enter Serial Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>Warranty Start Date</div>
          <input className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
          <div>
          <div>Warranty Expiry Date</div>
          <input className='modalinputfield' type="date" placeholder='mm/dd/yyyy' />
          </div>
        </div>

        <div className='row'>
          <button className='end-buttons'>Cancel</button>
          <button className='end-buttons'>Save</button>
          </div>
        </div>
    )
  }  else if(selectedValue==="SIMCard"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
        <div>Owned By</div> 
        <select value={ownedBy} onChange={(e)=>setOwnedBy(e.target.value)}  className='modalselect' name="" id="">
          <option disabled hidden value=""></option>
          <option value="client">Client</option>
          <option value="RemoteState">RemoteState</option>
        </select>
        </div>
        {ownedBy==="client" &&
        <div>
        <div>Client Name</div>
          <input className='modalinputfield' type="text" placeholder='Enter Client Name' />
        </div>}
        </div>

        <div className='row'>
          <div>
          <div>Make</div>
          <input className='modalinputfield' type="text" placeholder='Enter Brand Name' />
          </div>
          <div>
          <div>Model</div>
          <input className='modalinputfield' type="text" placeholder='Enter Model Number' />
          </div>
        </div>

        <div className='row'>
          <div>
          <div>MObile Number</div>
          <input className='modalinputfield' type="text" placeholder='Enter Mobile Number' />
          </div>
          <div>
          <div>Date Of Purchase</div>
          <input className='modalinputfield' type="date" placeholder='dd/mm/yyyy' />
          </div>
        </div>

        <div className='row'>
          <button className='end-buttons'>Cancel</button>
          <button className='end-buttons'>Save</button>
          </div>
        </div>
    )
  }

}
