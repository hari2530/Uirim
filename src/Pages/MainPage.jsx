import React from 'react';
import '../Pages/MainPage.css';

import exitImg from '../Assets/exit.png';
import voiceImg from '../Assets/voice.png';
import searchImg from '../Assets/search.png';
import boxImg from '../Assets/box.png';
import nearImg from '../Assets/near.png';
import cardImg from '../Assets/card.png';
import hamburgerImg from '../Assets/hamburger.png';
import ProfilepicImg from '../Assets/profile-pic.png';

const MainPage = () => {
  return (
    <>
        <div className='Main-Mobile-nav'>
        <img src={hamburgerImg} alt="Humburger" className="humburger-img" />
        <span>Mobile Site Product</span>
        <img src={ProfilepicImg} alt="Profile" className="Profile-pic-img" />
        </div>

        <div className="search">
                <input type="text" placeholder="Search..." className="search-box" />
                <img src={exitImg} alt="Exit" className="search-exit-img" />
                <img src={voiceImg} alt="Voice" className="search-box-img" />
                <img src={searchImg} alt="Search" className="search-box-img" />
            </div>

            <div className="for">
                <img src={boxImg} alt="Forum" className="search-box-forum" /><span>Forum</span>
            </div>

            <div className="search-container">
                <input type="text" placeholder="Enter your Location here" className="search-box-1" />
                <ul className="search-list">
                    <li><img src={nearImg} alt="Near me" className="search-box-img" />Near me</li>
                    <li>Coimbatore</li>
                    <li>Chennai</li>
                    <li>Kerala</li>
                    <li>Goa</li>
                    <li>Bangalore</li>
                    <li>Pune</li>
                </ul>
            </div>

            <div className="main-container">
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
                    <div className="main-card">
                        <img src={cardImg} alt="Card" className="card-img" />
                        <p>AC Outdoor Stand Wall Stand Split Ac</p>
                        <hr />
                        <p>Rs -3,000.00</p>
                        <h6>Blue Star Brand</h6>
                        <button>Add to Cart</button>
                    </div>
            </div>
    </>
  )
}

export default MainPage