import React, { useState} from 'react'
import './Login.css'
import Button from '@mui/material/Button'
import { useAuth } from './GlobalContext'
import loginImage from '../Images/loginPageImage.jpg'


export default function Login() {
  // const [token, setToken] = useState('');       
  const {setToken, navigate} = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin= async()=>{
    try{
      const response= await fetch('https://devassetapi.remotestate.com/asset-management/login', {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({email:email, password:password})
      });

      if(!response.ok){
        throw new Error('Login failed')
      }
      
      const data= await response.json();
      const token = data.token;
      console.log(token)

      if(token){
        setToken(token);
        localStorage.setItem('token', token);
        navigate('/dashboard')
      }

    } catch(error){
      console.error(error);
    }
  }

  return (
    <div className='main-login-div'>
     <div className='login-image'>
        <img src={loginImage} alt="welcome user" style={{height: "600px", width:"590px"}} />
     </div>
    
      <form className='login-details'>
      <h2 style={{fontFamily:"Roboto"}}>Login to Admin Panel</h2>
      <div className='input'>
      <label>Email </label> <br />
      <input type="email" 
            placeholder='Enter Email Id'
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            style={{height: "40px", width:"300px"}}/>
      </div>
     <div className='input'>
      <label >Password</label> <br /> 
      <input type="password"
             placeholder='Enter Password'
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
               style={{height: "40px", width:"300px"}}/>
      <div><input type="checkbox" /> Remember me </div>  
      </div>
      <Button variant='contained' className='login-button' onClick={handleLogin} >Log In</Button>
      </form>
     </div>
    
  )
}
