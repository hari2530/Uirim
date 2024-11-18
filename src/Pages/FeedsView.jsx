import React from 'react'
import '../Pages/FeedsView.css'
import compressor from '../Assets/compressor-img.png'

import exitImg from '../Assets/exit.png';
import voiceImg from '../Assets/voice.png';
import searchImg from '../Assets/search.png';
import boxImg from '../Assets/box.png';


const FeedsView = () => {
  return (
    <>
      <div className='feed-search-container'>
      <div className="feed-search">
                <input type="text" placeholder="Search..." className="search-box" />
                <img src={exitImg} alt="Exit" className="search-exit-img" />
                <img src={voiceImg} alt="Voice" className="search-box-img" />
                <img src={searchImg} alt="Search" className="search-box-img" />
        </div>

        <div className="feed-for">
                <img src={boxImg} alt="Forum" className="search-box-forum" /><span>Add Post</span>
        </div>
        </div>

      <div className='product-card-container'>
      <div className="product-card">
        <img src={compressor} alt="Compressor" className="product-image" />
        <div className="product-info">
            <p><strong>Product Name:</strong> Emerson Refrigerator Compressor New</p>
            <p><strong>Needed Quality:</strong> 2 Quality</p>
            <p><strong>Distributors:</strong> Tools Mart</p>
            <p><strong>Distributors Location:</strong> Chennai</p>
            <p><strong>Close Date:</strong> 24-Sep-2024</p>
            <button className="take-button">Take</button>
        </div>
      </div>
      <div className="product-card">
        <img src={compressor} alt="Emerson Refrigerator Compressor" className="product-image" />
        <div className="product-info">
            <p><strong>Product Name:</strong> Emerson Refrigerator Compressor New</p>
            <p><strong>Needed Quality:</strong> 2 Quality</p>
            <p><strong>Distributors:</strong> Tools Mart</p>
            <p><strong>Distributors Location:</strong> Chennai</p>
            <p><strong>Close Date:</strong> 24-Sep-2024</p>
            <button className="take-button">Take</button>
        </div>
      </div>
      <div className="product-card">
        <img src={compressor} alt="Emerson Refrigerator Compressor" className="product-image" />
        <div className="product-info">
            <p><strong>Product Name:</strong> Emerson Refrigerator Compressor New</p>
            <p><strong>Needed Quality:</strong> 2 Quality</p>
            <p><strong>Distributors:</strong> Tools Mart</p>
            <p><strong>Distributors Location:</strong> Chennai</p>
            <p><strong>Close Date:</strong> 24-Sep-2024</p>
            <button className="take-button">Take</button>
        </div>
      </div>
      <div className="product-card">
        <img src={compressor} alt="Emerson Refrigerator Compressor" className="product-image" />
        <div className="product-info">
            <p><strong>Product Name:</strong> Emerson Refrigerator Compressor New</p>
            <p><strong>Needed Quality:</strong> 2 Quality</p>
            <p><strong>Distributors:</strong> Tools Mart</p>
            <p><strong>Distributors Location:</strong> Chennai</p>
            <p><strong>Close Date:</strong> 24-Sep-2024</p>
            <button className="take-button">Take</button>
        </div>
      </div>
      <div className="product-card">
        <img src={compressor} alt="Emerson Refrigerator Compressor" className="product-image" />
        <div className="product-info">
            <p><strong>Product Name:</strong> Emerson Refrigerator Compressor New</p>
            <p><strong>Needed Quality:</strong> 2 Quality</p>
            <p><strong>Distributors:</strong> Tools Mart</p>
            <p><strong>Distributors Location:</strong> Chennai</p>
            <p><strong>Close Date:</strong> 24-Sep-2024</p>
            <button className="take-button">Take</button>
        </div>
      </div>
      <div className="product-card">
        <img src={compressor} alt="Emerson Refrigerator Compressor" className="product-image" />
        <div className="product-info">
            <p><strong>Product Name:</strong> Emerson Refrigerator Compressor New</p>
            <p><strong>Needed Quality:</strong> 2 Quality</p>
            <p><strong>Distributors:</strong> Tools Mart</p>
            <p><strong>Distributors Location:</strong> Chennai</p>
            <p><strong>Close Date:</strong> 24-Sep-2024</p>
            <button className="take-button">Take</button>
        </div>
      </div>
      <div className="product-card">
        <img src={compressor} alt="Emerson Refrigerator Compressor" className="product-image" />
        <div className="product-info">
            <p><strong>Product Name:</strong> Emerson Refrigerator Compressor New</p>
            <p><strong>Needed Quality:</strong> 2 Quality</p>
            <p><strong>Distributors:</strong> Tools Mart</p>
            <p><strong>Distributors Location:</strong> Chennai</p>
            <p><strong>Close Date:</strong> 24-Sep-2024</p>
            <button className="take-button">Take</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default FeedsView
