import { useState } from "react";

import "./Addcart.css";
import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import cart from '../../images/icon-cart.svg';


export default function Addcart() {
  const [item, setItem] = useState(1);
  const [price, setPrice] = useState(125);

  function addItem(){
    setPrice(price+125)
    setItem(item+1)

  }

  function subtractItem(){
    if(item===1){
      return
    }
    setPrice(price-125)
    setItem(item-1)

  }

  return (
    <div className="addcart">
      <div className="price">
        <div className="actual--percentage">
          <p className="actual--price">${price}</p>
          <p className="percentage">50%</p>
        </div>
        <p className="prev--price">$250.00</p>
      </div>
      <p className="total--shoes">
        <button 
        className="minus--total--shoes"
        onClick={subtractItem}
        >
          <img src={minus} alt='minus icon' />
        </button>
        <span className="shoes--number">{item}</span>
        <button 
        className="plus--total--shoes"
        onClick={addItem}
        >
          <img src={plus} alt='plus icon' />
        </button>
      </p>

      <button 
      className="add-to-cart--btn"
      
      >
        <img src={cart} alt='cart icon' className="cart--img" />
        Add to cart
      </button>
    </div>
  );
}
