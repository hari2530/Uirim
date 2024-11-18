import React, { useState } from 'react';
import '../Pages/StoreDetails.css';

import exitImg from '../Assets/exit.png';
import voiceImg from '../Assets/voice.png';
import searchImg from '../Assets/search.png';
import boxImg from '../Assets/box.png';
import nearImg from '../Assets/near.png';
import storeImg from '../Assets/store-img.png';
import phoneImg from '../Assets/phone.png';
import starImg from '../Assets/star.png';

const StoreDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const stores = [
    { name: "Smart Accessories", category: "AC Spare Part Wholesalers", location: "Coimbatore" },
    { name: "Smart Accessories", category: "AC Spare Part Wholesalers", location: "Chennai" },
    { name: "Smart Accessories", category: "AC Spare Part Wholesalers", location: "Kerala" },
    { name: "Smart Accessories", category: "AC Spare Part Wholesalers", location: "Goa" },
    { name: "Smart Accessories", category: "AC Spare Part Wholesalers", location: "Bangalore" },
    { name: "Smart Accessories", category: "AC Spare Part Wholesalers", location: "Pune" },
  ];

  const filteredStores = stores.filter(store => 
    store.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search">
        <input type="text" placeholder="Search..." className="search-box" />
        <img src={exitImg} alt="Exit" className="search-exit-img" />
        <img src={voiceImg} alt="Voice" className="search-box-img" />
        <img src={searchImg} alt="Search" className="search-box-img" />
      </div>

      <div className="for">
        <img src={boxImg} alt="Forum" className="search-box-forum" /><span>Forum</span>
      </div>

      <div className="search-Location">
        <input 
          type="text" 
          placeholder="Enter your Location here" 
          className="search-box-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {/* Show suggestion list only when searchTerm is not empty */}
        {searchTerm && (
          <ul className="search-list">
            <li><img src={nearImg} alt="Near me" className="search-box-img" />Near me</li>
            {stores.map((store, index) => (
              <li key={index} onClick={() => setSearchTerm(store.location)}>
                {store.location}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='store-cards'>
        {filteredStores.map((store, index) => (
          <div className="store-card" key={index}>
            <img src={storeImg} alt="store" className="store-img" />
            <h3 className='smart'>{store.name}</h3>
            <p>{store.category}</p> 
            <p>Gandhipuram <span>{store.location}</span></p>
            <img src={starImg} alt='stat' className='starImg'/>
            <span className="store-card-phone">
              <img src={phoneImg} alt="phone" className='phoneImg' />
              View Mobile Number
            </span>
            <button className="store-card-button">Contact Supplier</button>
          </div>              
        ))}
      </div>
      
    </>
  );
}

export default StoreDetails;
