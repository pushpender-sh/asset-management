import React,{useState} from 'react'
import { useForm , Controller} from 'react-hook-form';
import { useAuth } from './GlobalContext'
import Switch from '@mui/material/Switch';



export default function Forms() {
    const { handleSubmit, register,  formState: { errors }} = useForm();
    const{isbuttonopen, setIsbuttonopen, selectedValue, setSelectedValue, addedData, setAddedData, token, editData,  selectedRowKey}= useAuth();
    
    const [ownedByValue, setOwnedByValue] = useState('');

    // Update the state and react-hook-form's value when select value changes
    const handleOwnedByChange = (e) => {
      setOwnedByValue(e.target.value);
    }
    
    const handleSubmitForm=(data)=>{
           const finalData={
            ...data, "AssetType": selectedValue,
            purchasedDate:data.purchasedDate+'T00:00:00.000Z',
           warrantyStartDate: data.warrantyStartDate?data.warrantyStartDate+'T00:00:00.000Z': null,
           warrantyExpiryDate: data.warrantyExpiryDate?data.warrantyExpiryDate+'T00:00:00.000Z': null
           }

        fetch('https://devassetapi.remotestate.com/asset-management/user/asset/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, 
          },
          body: JSON.stringify(finalData),
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



    if(selectedValue==="laptop"){
        return(
          <form onSubmit={handleSubmit(handleSubmitForm)} className='lines'>
            <div className='row'>
              <div>
            <div>Owned By</div> 
            <select {...register("ownedBy", { required: true }) } onChange={handleOwnedByChange}  className='modalselect'>
            <option  value=""  hidden></option>
              <option value="client">Client</option>
              <option value="remote_state">RemoteState</option>
           </select>
            </div>
            {ownedByValue==="client" &&
            <div>
            <div>Client Name</div>
            <input {...register("clientName")} className='modalinputfield' type="text" placeholder='Enter Client Name'/>
            </div>}
            </div>
    
            <div className='row'>
              <div>
              <div>Make</div>
              <input {...register("brand")} className='modalinputfield' type="text" placeholder='Enter Brand Name'
              />
              </div>
              <div>
              <div>Model</div>
              <input {...register("model")}  className='modalinputfield' type="text" placeholder='Enter Model Number'
                />
              </div>
            </div>
    
            <div className='row'>
              <div>
              <div>Serial Number</div>
              <input {...register("serialNO")}  className='modalinputfield' type="text" placeholder='Enter Serial Number' 
              />
              </div>
              <div>
              <div>Series</div>
              <input {...register("series")}  className='modalinputfield' type="text" placeholder='Enter Series' />
              </div>
            </div>
    
            <div className='row'>
              <div>
              <div>Warranty Start Date</div>
              <input {...register("warrantyStartDate")}   className='modalinputfield' type="date" placeholder='mm/dd/yyyy' 
              />
              </div>
              <div>
              <div>Warranty Expiry Date</div>
              <input {...register("warrantyExpiryDate")}  className='modalinputfield' type="date" placeholder='mm/dd/yyyy' 
              />
              </div>
            </div>
    
            <div className='row'>
              <div>
              <div>RAM</div>
              <input  {...register("ram")}  className='modalinputfield' type="text" placeholder='Enter RAM' />
              </div>
              <div>
              <div>Processor</div>
              <input  {...register("processor")}  className='modalinputfield' type="text" placeholder='Enter Processor' />
              </div>
            </div>
    
            <div className='row'>
              <div>
              <div>Screen Resolution</div>
              <input  {...register("screenResolution")}  className='modalinputfield' type="text" placeholder='Enter Screen Resolution' />
              </div>
              <div>
              <div>Operationg System</div>
              <input  {...register("operatingSystem")}  className='modalinputfield' type="text" placeholder='Enter Operationg System' />
              </div>
            </div>
    
            <div className='row'>
              <div>
              <div>Date Of Purchase</div>
              <input {...register("purchasedDate")}  className='modalinputfield' type="date" placeholder='dd/mm/yyyy' 
              />
              </div>
              <div>
              <div>Charger</div>
              <div >
                No <Switch {...register("charger")} /> Yes
              </div>
              </div>
            </div>
    
            <div className='row'>
              <button  className='end-buttons'>Cancel</button>
              <button type='submit' className='end-buttons'>Save</button>
              </div>
              {errors.register && <div> {errors.register } is necessary</div>}
            </form>

        )
      }
  
   
}
