import React from 'react'
import './hero.css'
import hand_icon from  "../Assets/hand_icon.png"
// import arrow_icon from  "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <hr />

            <div className="hand-hand-icon">
                <p>New <img style={{ width: '40px', }}src={hand_icon} alt="" /></p>
            </div>

            <p>Collection</p>
            <p>For Everyone</p>
        </div>

        {/* <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div> */}

        <div className="hero-right">
            <img style={{width: '400px'}}src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero