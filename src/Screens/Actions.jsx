import React from 'react'
import './Actions.css'
import { useAuth } from './GlobalContext'
import cross from '../Images/cross.png'

export  function Delete() {
    const {selectedRowKey, token, selectedValue,setSelectedValue, deletePopup, setDeletePopup,setActionButton} = useAuth();
    

  function deleteAssetDisplay(){
    return(
        <div className='assetDelete' onClick={handleDeleteAsset}>
           <div style={{display:"flex", gap:"10rem", fontSize:"20px", fontWeight:"bolder"}}> <div>Deletion Reason</div>
           <img src={cross} alt="" onClick={()=>{
            setDeletePopup(false) 
             setActionButton(false) } } />
           </div>
           <input type="text" style={{height:"30px", width:"300px", padding:"10px"}} />
           <button style={{justifyContent:"center"}} onClick={()=>{
            setDeletePopup(false)
            setActionButton(false)
            setSelectedValue("None")}}>Confirm</button>
        </div>
    )
  }

  const handleDeleteAsset=()=>{
    fetch('https://devassetapi.remotestate.com/asset-management/user/asset/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token, 
      },
      body: JSON.stringify({"id": selectedRowKey, "assetType": selectedValue}),
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
    }
    console.log("hyy")
   console.log({"id": selectedRowKey, "assetType": selectedValue})
    

    return(
        <div>
         { deletePopup && deleteAssetDisplay()}
        </div>
    )

}
