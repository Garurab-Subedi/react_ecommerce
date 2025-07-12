import React from 'react'
import '../CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Enter your email address' />
          <input type="password" placeholder='Enter Your password' />
        </div>
        <button className='loginsignup-btn'>Sign Up</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignUp