import React,{useState, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from './GlobalContext'
import Switch from '@mui/material/Switch';
import './Forms.css'



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

           if(editData){
              fetch('https://devassetapi.remotestate.com/asset-management/user/asset/', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': token, 
                },
                body: JSON.stringify({...finalData,"id":selectedRowKey}),
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
           else{

             
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
      
       
    }
    if(selectedValue==="laptop"){
        return(
          <form onSubmit={handleSubmit(handleSubmitForm)} className='lines'>
            <div className='row'>
              <div>
            <div>Owned By</div> 
            <select {...register("ownedBy", { required: true }) } onChange={handleOwnedByChange} defaultValue={editData?.[0].ownedBy} className='modalselect'>
            <option  value=""  hidden></option>
              <option value="client">Client</option>
              <option value="remote_state">RemoteState</option>
           </select>
            </div>
            {ownedByValue==="client" &&
            <div>
            <div>Client Name</div>
            <input {...register("clientName")}  defaultValue={editData?.[0].clientName} className='modalinputfield' type="text" placeholder='Enter Client Name'/>
            
            </div>}
            </div>
    
            <div className='row'>
              <div>
              <div>Make</div>
              <input {...register("brand", {required:true})}  defaultValue={editData?.[0].brand} className='modalinputfield' type="text" placeholder='Enter Brand Name'
              />
              {errors.brand && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> Brand is necessary</p>}
              </div>
              <div>
              <div>Model</div>
              <input {...register("model" , {required:true})}  defaultValue={editData?.[0].model}  className='modalinputfield' type="text" placeholder='Enter Model Number'
                />
                 {errors.model && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> Make is necessary</p>}
              </div>
            </div>
    
            <div className='row'>
              <div>
              <div>Serial Number</div>
              <input {...register("serialNo" , {required:true})}  defaultValue={editData?.[0].serialNo}  className='modalinputfield' type="text" placeholder='Enter Serial Number' 
              />
               {errors.serialNo && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> Serial No is necessary</p>}
              </div>
              <div>
              <div>Series</div>
              <input {...register("series"  , {required:true})}  defaultValue={editData?.[0].series}  className='modalinputfield' type="text" placeholder='Enter Series' />
              {errors.series && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> series is necessary</p>}
              </div>
            </div>
    
            <div className='row'>
              <div>
              <div>Warranty Start Date</div>
              <input {...register("warrantyStartDate"  , {required:true})}  defaultValue={editData?.[0].warrantyStartDate}   className='modalinputfield' type="date" placeholder='mm/dd/yyyy' 
              />
               {errors.warrantyStartDate && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> warrantyStartDate is necessary</p>}
              </div>
              <div>
              <div>Warranty Expiry Date</div>
              <input {...register("warrantyExpiryDate" , {required:true})}  defaultValue={editData?.[0].warrantyExpiryDate}  className='modalinputfield' type="date" placeholder='mm/dd/yyyy' 
              />
               {errors.warrantyExpiryDate && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> warrantyExpiryDate is necessary</p>}
              </div>
            </div>
    
            <div className='row'>
              <div>
              <div>RAM</div>
              <input  {...register("ram"  , {required:true})}  defaultValue={editData?.[0].ram}  className='modalinputfield' type="text" placeholder='Enter RAM' />
              {errors.ram && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> ram is necessary</p>}
              </div>
              <div>
              <div>Processor</div>
              <input  {...register("processor" , {required:true})}  defaultValue={editData?.[0].processor} className='modalinputfield' type="text" placeholder='Enter Processor' />
              {errors.processor && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> processor is necessary</p>}
              </div>
            </div>
    
            <div className='row'>
              <div>
              <div>Screen Resolution</div>
              <input  {...register("screenResolution" , {required:true})}  defaultValue={editData?.[0].screenResolution} className='modalinputfield' type="text" placeholder='Enter Screen Resolution' />
              {errors.screenResolution && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> screenResolution is necessary</p>}
               </div>
              <div>
              <div>Operationg System</div>
              <input  {...register("operatingSystem" , {required:true})}  defaultValue={editData?.[0].operatingSystem} className='modalinputfield' type="text" placeholder='Enter Operationg System' />
              {errors.operatingSystem && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> operatingSystem is necessary</p>}
              </div>
            </div>
    
            <div className='row'>
              <div>
              <div>Date Of Purchase</div>
              <input {...register("purchasedDate" , {required:true})}  defaultValue={editData?.[0].purchasedDate}  className='modalinputfield' type="date" placeholder='dd/mm/yyyy' 
              />
               {errors.purchasedDate && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> purchasedDate is necessary</p>}
              </div>
              <div>
              <div>Charger</div>
              <div >
                No <Switch {...register("charger" , {required:true}) }   defaultValue={editData?.[0].charger} /> Yes
                {errors.charger && <p style={{color:"red", fontSize:"10px", marginTop:"0.5px"}}> charger is necessary</p>}
                </div>
              </div>
            </div>
    
            <div className='row'>
              <button  className='end-buttons'>Cancel</button>
              <button type='submit' className='end-buttons'>{editData?"Update": "Save"}</button>
              </div>
            </form>

        )
      }
  
   
}
