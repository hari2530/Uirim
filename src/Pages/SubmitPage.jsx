import React from 'react'
import outdoorStand from "../Assets/ac-outdoor-stand.png";
import '../Pages/Submit.css'

const SubmitPage = () => {
  return (
    <div className='containers'>
    {/* Product Card */}
    <div className='cards'>
      <img
        src={outdoorStand}
        alt="AC Outdoor Stand Wall Stand Split AC"
        className='productImage'
      />
      <h3 className='productTitle'>AC Outdoor Stand Wall Stand Split AC</h3>
      <p className='price'>Rs -3,000.00</p>
      <p className='brands'>Blue Star Brand</p>
      <p className='sellerInfo'>
        Sold by: Industries Name <br />
        Location <br />
        Pincode
      </p>
      <a className='viewNumberButton'>
      <i class="bi bi-telephone-fill"> View Mobile Number</i>
      </a>
    </div>

    {/* Login Form */}
    <div className='formContainer'>
      <h2 className='formTitle'>
        Please login to view Supplier's Mobile Number
      </h2>
      <label className='label' htmlFor="mobileNumber">
        Mobile Number
      </label>
      <input
        type="text"
        id="mobileNumber"
        placeholder="Enter Your Mobile Number"
        className='input'
      />
      <button className='submitButton'>Submit</button>
    </div>
  </div>
  )
}

export default SubmitPage