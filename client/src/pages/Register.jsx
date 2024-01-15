import React from 'react'
import "./CSS/register.css"

const Register = () => {
  return (
    <div className='loginSignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <hr />
        <div className="loginsignup-fields">
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter your Email Address" />
          <input type="password" placeholder="Enter your Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, you agree to the terms and conditions associated within the use of this website.</p>
        </div>
      </div>
    </div>
  )
}

export default Register