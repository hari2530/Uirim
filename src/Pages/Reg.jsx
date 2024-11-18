import React from 'react';
import '../Pages/Reg.css';

const Reg = () => {


    return (
        <div className="form-container-reg">
            <h2>Tell us what you need, and we'll help you get quotes</h2>
            <form>
                <div className="form-group-reg">
                    <label>Product Name</label>
                    <input type="text" name="productName" placeholder='AC Outdoor Stand' required />
                </div>

                <div className="form-group-reg">
                    <label>Quantity</label>
                    <input type="number" required />
                </div>

                <div className="form-group-reg">
                    <label>Distributor's Name</label>
                    <input type="text" name="distributorName" placeholder='Enter Your Name' required />
                </div>

                <div className="form-group-reg">
                    <label>Distributor's Location</label>
                    <input type="text" name="distributorLocation" required />
                </div>

                <div className="form-group-reg">
                    <label>Distributor's Phone Number</label>
                    <input type="tel" name="distributorPhoneNumber" required />
                </div>

                <button className='req-btn'>Submit Requirement</button>
            </form>
        </div>

    );
};

export default Reg;
