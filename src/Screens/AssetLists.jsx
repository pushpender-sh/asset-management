import React from 'react'
import './AssetList.css'
import Navbar from './Navbar'
import search from '../Images/search.jpg'
import cross from '../Images/cross.png'



export default function AssetLists() {
  return (
    <div className='top-div'>
    {/* <Navbar/> */}
        <div className='header-field'>
            <img src={search} alt="" />
            <input type="text" placeholder='Search' />
            <img src={cross} alt="" />

        </div>
    </div>
  )
}
