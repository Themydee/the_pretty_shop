import React, { useContext, useRef, useState } from 'react'
import './navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { ShopContext } from '../../context/ShopContext'
import nav_drop_down from '../Assets/nav-drop.jpg'

const Navbar = () => {
    const [active, setActive] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);

    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo}alt="" />
            <p>OYIZAS SHOP</p>
        </div>

        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_drop_down} style={{width: '30px' }}alt="" />

        
        <ul ref={menuRef} className="nav-menu">
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
            
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar