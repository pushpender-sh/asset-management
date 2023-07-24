import React from 'react'
import './Login.css'
import Button from '@mui/material/Button'
import loginImage from '../Images/loginPageImage.jpg'
export default function Login() {
  return (
    <div className='main-login-div'>
     <div className='login-image'>
        <img src={loginImage} alt="welcome user" style={{height: "600px", width:"590px"}} />
     </div>
    
      <form className='login-details'>
      <h2 style={{fontFamily:"Roboto"}}>Login to Admin Panel</h2>
      <div className='imput'>
      <label>Email </label> <br />
      <input type="text" placeholder='Enter Email Id' style={{height: "40px", width:"300px"}}/>
      </div>
     <div className='imput'>
      <label >Password</label> <br /> 
      <input type="text" placeholder='Enter Password'  style={{height: "40px", width:"300px"}}/>
      <div><input type="checkbox" /> Remember me </div>
      </div>
      <Button variant='contained' className='login-button'>Log In</Button>
      </form>
     </div>
    
  )
}
