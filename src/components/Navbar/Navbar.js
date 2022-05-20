import "./Navbar.css";
import Cart from "../Cart/Cart";
import { useState } from "react";

import hamburger from "../../images/icon-menu.svg";
import close from "../../images/icon-close.svg";
import avatar from "../../images/image-avatar.png";
import logo from "../../images/logo.svg";

export default function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  

  function toggleSidebar() {
    setSidebar((prevMode) => !prevMode);
  }

  function closeSidebar() {
    setSidebar((prevMode) => !prevMode);
  }


  return (
    <div className="navbar">
      <div className="hamburger--logo">
        <div className="hamburger">
          <img src={hamburger} alt="hamburger icon" onClick={toggleSidebar} />

          {/* sidebar */}
          <div className={sidebar ? "sidebar" : "no-sidebar"}>
            <div className="side-bar-elements">
              <img
                className="close-icon"
                src={close}
                alt="close icon"
                onClick={closeSidebar}
              />
              <ul className="sidebar--menu">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hamburger">
          <img src={logo} alt="logo" />
        </div>
      </div>

      {/* desktop navbar */}
      <div className="desktop--menu">
       <div >
       <img 
        src={logo} 
        alt="logo"
        />
        <a className="collection">Collections</a>
        <a className="men">Men</a>
        <a className="women">Women</a>
        <a className="about">About</a>
        <a className="contact">Contact</a>

       </div>
      </div>
      {/* desktop navbar end */}

      {/* cart and profile photo */}
      <div className="basket--profile">
        <Cart 
        // item={props.item}
        // addToCart={props.addToCart}
        />
        {/* <div> */}
          <img className="avatar" src={avatar} alt="shopping cart" />
        {/* </div> */}
      </div>
      {/* cart and profile end */}
    </div>
  );
}
