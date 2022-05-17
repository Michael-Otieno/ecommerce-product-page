import './Navbar.css'
import Cart from '../Cart/Cart'
import {useState} from 'react'

import hamburger from '../../images/icon-menu.svg'
import avatar from '../../images/image-avatar.png'
import logo from '../../images/logo.svg'


export default function Navbar(props){

  
  
  return (
    <div className="navbar">
      <div className="hamburger--logo">
        <div className="hamburger">
          <img src={hamburger} alt="hamburger icon" />
        </div>
        <div className="hamburger">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div  className="basket--profile">
        <Cart />
      <div >
        <img 
        className="avatar" 
        src={avatar} 
        alt="shopping cart" 
        />
      </div>
    </div>
    
    </div>
  )
}

