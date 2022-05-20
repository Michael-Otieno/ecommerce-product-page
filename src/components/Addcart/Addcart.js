
import "./Addcart.css";
import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import cart from '../../images/icon-cart.svg';


export default function Addcart(props) {
  
  
 

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
        <button 
        className="minus--total--shoes"
        onClick={props.subtractItem}
        >
          <img src={minus} alt='minus icon' />
        </button>
        {/* total items */}
        <span className="shoes--number">{props.item}</span>
        {/* add btn */}
        <button 
        className="plus--total--shoes"
        onClick={props.addItem}
        >
          <img src={plus} alt='plus icon' />
        </button>
      </p>

      <button 
      className="add-to-cart--btn"
      onClick={props.addToCart}
      >
        <img src={cart} alt='cart icon' className="cart--img" />
        Add to cart
      </button>
    </div>
  );
}

