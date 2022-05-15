import './Navbar.css'
import {useState} from 'react'

import hamburger from '../../images/icon-menu.svg'
import cart from '../../images/icon-cart.svg'
import avatar from '../../images/image-avatar.png'


const HoverDivHandler = ({handleMouseOver, handleMouseOut }) => {
  return (
    <div  className="basket--profile">
      <div >
        <img 
        className='cart'
        src={cart} 
        alt="shopping cart"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      </div>
      <div >
        <img 
        className="avatar" 
        src={avatar} 
        alt="shopping cart" 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      </div>
    </div>
  )
}

const HoverResultDiv = () => {
  return (
    <div className='hoverresultdiv'>
      <div className='cart-title'>
        <h2>Cart</h2>
      </div>
      <div className='cart-empty'>
        <p>Your cart is empty</p>
      </div>
    </div>
  )
}


export default function Navbar(props){

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }
  
  return (
    <div className="navbar">
      <div className="hamburger--logo">
        <div className="hamburger">
          <img src={hamburger} alt="hamburger icon" />
        </div>
        <h1>sneakers</h1>
      </div>
      <HoverDivHandler 
      handleMouseOver={handleMouseOver}
      handleMouseOut={handleMouseOut}
      />
      {isHovering && <HoverResultDiv />} 
    </div>
  )
}

