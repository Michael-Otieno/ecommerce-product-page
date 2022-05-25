import { useState } from "react";

import "./Addcart.css";
import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg";
import cart from "../../images/icon-cart.svg";

export default function Addcart() {
  const [item, setItem] = useState(0);
  const [price, setPrice] = useState(125);
  const totalItemsNotification = document.querySelector(".total");
  const cartPrice = document.querySelector(".cart-price-calc");
  const cartTotal = document.querySelector(".cart-price-total");
  const emptyCart = document.querySelector('.cart--content');
  const cartDetails = document.querySelector('.cart--detail--checkout');

  function addItem(){
    setPrice(125 + price)
    setItem(item+1)
  }
  function subtractItem(){
    if(item===0){
      return
    }
    setPrice(price-125)
    setItem(item-1)

  }
  function handleCart(){
    if (item !== 0){
      totalItemsNotification.style.display = 'block';
      totalItemsNotification.innerHTML=item;
      cartPrice.innerHTML=`$125.00 * ${item}`
      cartTotal.innerHTML=`$${(125.00 * item).toFixed(2)}`
      emptyCart.classList.add('none')
      cartDetails.classList.remove('none')
    }
  }

  return (
    <div className="addcart">
      <div className="price">
        <div className="actual--percentage">
          <p className="actual--price">$125.00</p>
          <p className="percentage">50%</p>
        </div>
        <p className="prev--price">$250.00</p>
      </div>
      <p className="total--shoes">
        {/* minus btn */}
        <button className="minus--total--shoes" onClick={subtractItem}>
          <img src={minus} alt="minus icon" />
        </button>
        {/* total items */}
        <span className="shoes--number">{item}</span>
        {/* add btn */}
        <button className="plus--total--shoes" onClick={addItem}>
          <img src={plus} alt="plus icon" />
        </button>
      </p>
      {/* add to cart btn */}
      <button className="add-to-cart--btn" onClick={handleCart}>
        <img src={cart} alt="cart icon" className="cart--img" />
        Add to cart
      </button>
    </div>
  );
}
