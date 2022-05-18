import "./Addcart.css";
import plus from '../../images/icon-plus.svg';
import minus from '../../images/icon-minus.svg';
import cart from '../../images/icon-cart.svg';


export default function Addcart() {
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
        <button className="minus--total--shoes">
          <img src={minus} alt='minus icon' />
        </button>
        <span className="shoes--number">0</span>
        <button className="plus--total--shoes">
          <img src={plus} alt='plus icon' />
        </button>
      </p>

      <button className="add-to-cart--btn">
        <img src={cart} alt='cart icon' className="cart--img" />
        Add to cart
      </button>
    </div>
  );
}
