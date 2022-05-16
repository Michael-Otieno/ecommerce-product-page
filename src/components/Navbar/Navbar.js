import './Navbar.css'
import {useState} from 'react'

import hamburger from '../../images/icon-menu.svg'
import cart from '../../images/icon-cart.svg'
import avatar from '../../images/image-avatar.png'
import logo from '../../images/logo.svg'


console.log(logo)
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
        <div className='cart--total'>
          <img 
        className='cart'
        src={cart} 
        alt="shopping cart"
     
      />
      <span className='total'>3</span>
      </div>
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

