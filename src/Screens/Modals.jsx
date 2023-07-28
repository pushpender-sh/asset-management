import React from 'react'
import './Modals.css'
import Switch from '@mui/material/Switch';
import { useAuth } from './GlobalContext'

export default function Modals() {

  const{selectedValue}= useAuth();

  if(selectedValue==="Laptop"){
    return(
      <div className='lines'>
        <div className='row'>
          <div>
        <div>Owned By</div>
        <select className='modalselect' name="" id="">
          <option value="client">Client</option>
          <option value="RemoteState">RemoteState</option>
        </select>
        </div>
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
          <div>Date Of Purchase</div>
          </div>
          <div>
          <div>Charger</div>
          <div>
            No <Switch/> Yes
          </div>
          </div>
        </div>

      </div>
    )
  }



}
