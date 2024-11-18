import React from 'react';
import '../Pages/Order.css';
import outdoorStand from '../Assets/ac-outdoor-stand.png';
import phoneImg from '../Assets/phone.png';


const Order = () => {
  return (
    <div className='order-container'>
    <div className="order-card">
      <img src={outdoorStand} alt="" />
      <p className="order-card-title">AC Outdoor Stand Wall Stand Split AC</p>
      <h3 className="order-card-price">RS -3,000.00</h3>
      <h6 className="order-card-brand">Blue star Brand</h6>
      <div className='order-lpm'>
      <h6 className="order-card-seller">Sold by - Industries Name</h6>
      <h6 className="order-card-location">Location</h6>
      <h6 className="order-card-pincode">Pincode</h6>
      <span className="order-view-mobile"><img src={phoneImg} /> View Mobile Number</span>
      </div>
   </div>
   <div className="f-container"> 
    <form className="login-form">
    <p className="info-text">Please login to view Supplier's Mobile Number</p>
      <label className="mobile-number">Mobile Number</label>
      <input type="text" className='mobile-input'  placeholder="Enter Your Mobile Number" />
      <button type="submit" className='order-btn'>Submit</button>
    </form>
  </div>
  </div>
  )
}

export default Order

