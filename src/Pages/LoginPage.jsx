import React from 'react'
import '../Pages/Login.css'
import  logo from '../Assets/RiM-Logo.png'

const LoginPage = () => {
  return (
    <>
      <div className="login-container-rim">
      <div className="login-form-rim">
        <h3>Welcome Back</h3>
        <div className="form-group-rim">
          <label>User Name</label>
          <input type="text" />
        </div>
        <div className="form-group-rim">
          <label>Password</label>
          <input type="password" />
        </div>
        <a href="#" className="forgot-password-rim">Forget Password ?</a>
        <button className="login-btn-rim">Sign in</button>
        <p className="otp-login-rim">
          Sign - in using <a href="#">OTP</a>
        </p>
      </div>
      <div className="login-banner-rim">
        <img src={logo} alt="Logo" className="rim-logo" />
      </div>
    </div>
  
    </>
  )
}

export default LoginPage