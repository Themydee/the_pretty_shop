import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>The pretty shop</p>
        </div>

        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <Link to="https://www.instagram.com/themy_dee/" target='__blank'>
                 <img src={instagram} alt="" />
                </Link>
                
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="" />
            </div>
        </div>

        <div className="footer-copyright">
            <hr />
            <p>Copyright @ Temi.dev - All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer