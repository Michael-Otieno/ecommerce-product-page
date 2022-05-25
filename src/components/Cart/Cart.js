import { useState } from 'react'

import './Cart.css'
import cart from '../../images/icon-cart.svg'
import deleteIcon from '../../images/icon-delete.svg'
import thumbnail from '../../images/image-product-1-thumbnail.jpg'

export default function Cart(props){
  const [showCart, setShowCart] = useState(false);

  function toggleCart(){
    setShowCart(prevMode => !prevMode)
  }

  function deleteCart(){
    const total = document.querySelector('.total')
    const cartDetails = document.querySelector('.cart--detail--checkout')
    const emptyCart = document.querySelector('.cart--content');
    const number = document.querySelector('.shoes--number');
    total.style.display = 'none';
    cartDetails.style.display='none'
    emptyCart.classList.remove('none')
    number.innerHTML=0

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
        {/* cart total */}
        <span className='total'>3</span>
      </div>
      <div className={showCart ? "toggle": "no-toggle"}>
        <h2 className='cart--title'>Cart</h2>
        <hr />

        {/* empty div */}
        <div className='cart--content'>
          <p className='cart--empty'>Your cart is empty
          </p>
        </div>

        <div className='cart--detail--checkout none'>
          <div className='cart--detail--content'>
              <img 
              className='cart--image'
              src={thumbnail}
              alt='product' 
              />
              <p className='cart--detail--para'>
                Autumn Limited Edition... <br />
                <span className='cart-price-calc'>$125.00 * 3</span><span className='cart-price-total'>$375.00</span>
              </p>
              <img 
              className='deleteIcon'
              src={deleteIcon}
              alt='delete icon' 
              onClick={deleteCart}
              />
          </div>
          <div className='checkout--btn--div'>
            <button className="checkout--btn">
              Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}