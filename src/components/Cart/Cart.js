import { useState } from 'react'

import './Cart.css'
import cart from '../../images/icon-cart.svg'

export default function Cart(){
  const [showCart, setShowCart] = useState(false);

  function toggleCart(){
    setShowCart(prevMode => !prevMode)
  }
 
  return (
    <div className='cart--toggle'>
      <div className='cart--total'>
        <img 
          className='cart'
          src={cart} 
          alt="shopping cart"
          onClick={toggleCart}

        />
        <span className='total'>3</span>
      </div>
      <div className={showCart ? "toggle": "no-toggle"}>
        <h2 className='cart--title'>Cart</h2>
        <hr />
        <div className='cart--content'>
          <p className='cart--empty'>Your cart is empty</p>
        </div>
      </div>
    </div>
  )
}