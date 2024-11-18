import React from 'react'
import '../Pages/Techlog.css'

import  logo from '../Assets/RiM-Logo.png'

const Techlog = () => {
  return (
    <>
    <div className="tech-login-container-rim">
      <div className="tech-login-form-rim">
        <h3>Welcome Back</h3>
        <div className="tech-form-group-rim">
          <label>Phone Number</label>
          <input type="text" />
        </div>
        <button className="tech-login-btn-rim">Sign in</button>
        </div>
        <div className="tech-login-banner-rim">
        <img src={logo} alt="Logo" className="rim-logo" />
      </div>
    </div>
    </>
  )
}

export default Techlog