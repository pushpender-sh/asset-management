import React from 'react'
import './Navbar.css'
import { useAuth } from '../Screens/GlobalContext'
import topLogo from '../Images/topLogo.png'
import women from '../Images/women.png'
import arrowdown from '../Images/arrowdown.jpg'


export default function Navbar() {

    const { setToken,  navigate} = useAuth();

    const handleLogout=()=>{
      localStorage.removeItem('token')
      setToken('')
      navigate('/')
    }

  return (
    <div className='navbar'>
        <div className='left-items'>
        <div className='left-img' >
        <img src={topLogo} alt="top-left-logo" style={{height: "45px"}}  /> 
        <div className='logo-title'>
            <div className='upper-title'>
            StoreX 
            </div>
          <div className='line'></div>
            <div className='bottom-title'>
             Asset Management
            </div>
        </div>
        </div>

      <div className='items assetslist' onClick={()=>navigate('/dashboard/assetlists')} >
        Assets List
      </div>

      <div className='items employerlist'>
        Employer List
      </div>

      <div className='items accessedby'>
        Accessed By
      </div>
      </div>
      <div className='profile'>
        <div style={{fontWeight:"bold"}}> Nitya Jain</div>
        <img src={women} alt="women" style={{borderRadius: "100%"}} />
        <img onClick={handleLogout} src={arrowdown} alt="" className='logout' />

      </div>
    </div>
  )
}
