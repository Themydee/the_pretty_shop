import React, { useState } from 'react'
import './navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    const [active, setActive] = useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo}alt="" />
            <p>The Pretty Shop</p>
        </div>

        <ul className="nav-menu">
            <li onClick={() => {setActive("shop")}}>Shop {active === "shop" ? <hr />: <></>}</li>
            <li onClick={() => {setActive("men")}}>Men{active === "men" ? <hr />: <></>}</li>
            <li onClick={() => {setActive("women")}}>Women{active === "women" ? <hr />: <></>}</li>
            <li onClick={() => {setActive("kids")}}>Kids{active === "kids" ? <hr />: <></>}</li>
        </ul>

        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar