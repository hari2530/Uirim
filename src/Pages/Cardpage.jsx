import React from 'react'
import '../Pages/Cardpage.css'

import OutImg from '../Assets/ac-outdoor-stand.png';

const Cardpage = () => {
    const decreaseQuantity = () => {

    };

    const increaseQuantity = () => {

    };

    return (
        <>
            <div className='card-all'>
                <div className='ur'>Your Card : 2 items</div>
                <div className="bill-container-1">

                    <div className='card-Titel'>
                        <div className='Product-Titel'>Product Details</div>
                        <div className='Product-Titel'>Quantity</div>
                        <div className='Product-Titel'>Total Price</div>
                    </div>
                    <div className="product-item">
                        <div className="product-details">
                            <img src={OutImg} alt="Product Image" />
                            <div>
                                <div className="product-name">Toolname</div>
                                <div className="product-category">AC Spares</div>
                            </div>
                        </div>



                        <div className="quantity-control">

                            <button onClick={decreaseQuantity}>-</button>
                            <input type="number" id="quantity" value="1" min="1" />
                            <button onClick={increaseQuantity}>+</button>
                        </div>



                        <div className="price">Rs 2999.00</div>
                    </div>

                    <div className="product-item">
                        <div className="product-details">
                            <img src={OutImg} alt="Product Image" />
                            <div>
                                <div className="product-name">Toolname</div>
                                <div className="product-category">AC Spares</div>
                            </div>
                        </div>

                        <div className="quantity-control">
                            <button onClick={decreaseQuantity}>-</button>
                            <input type="number" id="quantity" value="1" min="1" />
                            <button onClick={increaseQuantity}>+</button>
                        </div>

                        <div className="price">Rs 2999.00</div>
                    </div>

                    <div className="total-value">
                        Total Card Value: Rs 5998
                    </div>
                </div>

                <div className="Order-container-2">
                    <div className="bill-header">Order Summary</div>

                    <div className="bill-item">
                        <span className="sub-total">Sub Total</span>
                        <span className="sub-total">2 items</span>
                    </div>

                    <div className="bill-item">
                        <span>Total MRP</span>
                        <span>Rs 5998</span>
                    </div>

                    <div className="bill-item">
                        <span>Total Card Value</span>
                        <span>Rs 5998</span>
                    </div>

                    <div className="bill-item bill-total">
                        <span>Total Amount</span>
                        <span>Rs 5998</span>
                    </div>

                    <button className="btn-checkout">Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Cardpage;
