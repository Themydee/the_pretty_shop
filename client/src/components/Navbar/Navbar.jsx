import React, { useState } from 'react'
import './navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'

const Navbar = () => {
    const [active, setActive] = useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo}alt="" />
            <p>The Pretty Shop</p>
        </div>

        <ul className="nav-menu">
            <li onClick={() => {setActive("shop")}}><Link style={{ color: 'black', textDecoration: 'none'}} to='/'>Shop</Link>{active === "shop" ? <hr />: <></>}</li>
            <li onClick={() => {setActive("men")}}><Link style={{ color: 'black', textDecoration: 'none'}}to='/men'>Men</Link>{active === "men" ? <hr />: <></>}</li>
            <li onClick={() => {setActive("women")}}><Link style={{ color: 'black', textDecoration: 'none'}} to='/women'>Women</Link>{active === "women" ? <hr />: <></>}</li>
            <li onClick={() => {setActive("kids")}}><Link style={{ color: 'black', textDecoration: 'none'}} to='/kids'>Kids</Link>{active === "kids" ? <hr />: <></>}</li>
        </ul>

        <div className="nav-login-cart">
            <Link to='/login'> 
                <button>Login</button>
            </Link>
           
           <Link to='/cart'>
                <img src={cart_icon} alt="" />
           </Link>
            
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar