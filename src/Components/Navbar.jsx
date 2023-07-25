import React from 'react'
import './Navbar.css'
import topLogo from '../Images/topLogo.png'
import women from '../Images/women.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='left-items'>
        <div className='left-img'>
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

      <div className='items'>
        Assets List
      </div>

      <div className='items'>
        Employer List
      </div>

      <div className='items'>
        Accessed By
      </div>
      </div>
      <div className='profile'>
        <div style={{fontWeight:"bold"}}> Nitya Jain</div>
        <img src={women} alt="women" style={{borderRadius: "100%"}} />
      </div>
    </div>
  )
}
