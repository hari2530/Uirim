import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal visibility state
  const [formData, setFormData] = useState({
    productName: '',
    mrfRate: '',
    techniciansRate: '',
    distributorsRate: '',
    aboutProduct: '',
    image: null
  });

  const [previewImage, setPreviewImage] = useState('/path-to-compressor-image.jpg');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setFormData(prevState => ({
        ...prevState,
        image: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  if (!isModalOpen) return null; // Render nothing if modal is closed

  return (
    <div className="product-form-container">
      <div className="product-form-content">
        <div className="product-form-header">
          <h2>Add product/edit product</h2>
          <button onClick={handleClose} className="close-button">×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Name Product</label>
            <input
              type="text"
              name="productName"
              placeholder='Emerson Refrigerator Compressor New'
              value={formData.productName}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <div className="form-field">
            <label>MRF Rate</label>
            <input
              type="number"
              name="mrfRate"
              value={formData.mrfRate}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <div className="form-field">
            <label>Technicians Rate</label>
            <input
              type="number"
              name="techniciansRate"
              value={formData.techniciansRate}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <div className="form-field">
            <label>Distributors Rate</label>
            <input
              type="number"
              name="distributorsRate"
              value={formData.distributorsRate}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <div className="form-field">
            <label>About Product</label>
            <input
              name="aboutProduct"
              value={formData.aboutProduct}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className='Pro-Img'>
            <div className="form-field">
              <label>Upload Image</label>
              <div className="image-upload-container">
                <label className="upload-box">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="file-input"
                  />
                  <div className="upload-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16V8M8 12L12 8L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
