import React, { Fragment } from 'react'
import '../Pages/ProfileInfo.css'

const ProfileInfo = () => {
    
  return (
    <>
               <div className="profile-container">
            <h3 className="profile-heading">Personal Information</h3>
            <form className="profile-form">
                <div className="form-row">
                    <div className="form-group-pro">
                        <label htmlFor="fullName" className="form-label-pro">Full Name</label>
                        <input type="text" className="form-input" id="fullName" />
                    </div>
                    <div className="form-group-pro">
                        <label htmlFor="mobileNumber" className="form-label-pro">Mobile Number</label>
                        <input type="text" className="form-input" id="mobileNumber" />
                    </div>
                </div>
                
                <div className="form-group-pro">
                    <label htmlFor="email" className="form-label-pro">E-Mail Address</label>
                    <input type="email" className="form-input" id="email" />
                </div>

                <div className="form-group-pro">
                    <label htmlFor="companyName" className="form-label-pro">Company Name</label>
                    <input type="text" className="form-input" id="companyName" />
                </div>

                <div className="form-group-pro">
                    <label htmlFor="creditLimit" className="form-label-pro">Credit Limit</label>
                    <input type="text" className="form-input" id="creditLimit" />
                </div>

                <div className="form-group-pro">
                    <label htmlFor="address" className="form-label-pro">Address</label>
                    <textarea className="form-input" id="address" rows="3"></textarea>
                </div>

                <div className="form-row">
                    <div className="form-group-pro">
                        <label htmlFor="pincode" className="form-label-pro">Pincode</label>
                        <input type="text" className="form-input" id="pincode" />
                    </div>
                    <div className="form-group-pro">
                        <label htmlFor="landmark" className="form-label-pro">Landmark</label>
                        <input type="text" className="form-input" id="landmark" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group-pro">
                        <label htmlFor="city" className="form-label-pro">City</label>
                        <input type="text" className="form-input" id="city" />
                    </div>
                    <div className="form-group-pro">
                        <label htmlFor="state" className="form-label-pro">State</label>
                        <input type="text" className="form-input" id="state" />
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default ProfileInfo