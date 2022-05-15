import './Navbar.css'

import hamburger from '../../images/icon-menu.svg'
import cart from '../../images/icon-cart.svg'
import avatar from '../../images/image-avatar.png'


export default function Navbar(){
  return (
    <div className="navbar">
      <div className="hamburger--logo">
        <div className="hamburger">
          <img src={hamburger} alt="hamburger icon" />
        </div>
        <h1>sneakers</h1>
      </div>

      <div className="basket--profile">
        <div>
          <img className='cart' src={cart} alt="shopping cart"/>
        </div>
        <div>
          <img src={avatar} alt="shopping cart" width="40px"/>
        </div>
      </div>
    </div>
  )
}

