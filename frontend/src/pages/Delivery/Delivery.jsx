import React, { useState } from 'react';
import './Delivery.css';

const Delivery = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Delivery information:', formData);
    // Add your delivery logic here
  };

  return (
    <div className="delivery">
      <div className="delivery-container">
        <div className="delivery-header">
          <h1>Delivery Information</h1>
          <p>Please provide your delivery details for a seamless food delivery experience</p>
        </div>

        <form className="delivery-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Delivery Address</h2>
            <div className="form-group">
              <label htmlFor="street">Street Address</label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="delivery-options">
            <h2>Delivery Options</h2>
            <div className="delivery-time-slots">
              <div className="time-slot">
                <input type="radio" id="asap" name="deliveryTime" value="asap" defaultChecked />
                <label htmlFor="asap">
                  <div className="slot-info">
                    <h3>ASAP</h3>
                    <p>Delivery in 30-45 minutes</p>
                  </div>
                </label>
              </div>
              <div className="time-slot">
                <input type="radio" id="scheduled" name="deliveryTime" value="scheduled" />
                <label htmlFor="scheduled">
                  <div className="slot-info">
                    <h3>Schedule Delivery</h3>
                    <p>Choose your preferred time</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Confirm Delivery Details
            </button>
          </div>
        </form>

        <div className="delivery-info">
          <div className="info-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Get your food delivered hot and fresh within 30-45 minutes</p>
          </div>
          <div className="info-card">
            <h3>📍 Real-time Tracking</h3>
            <p>Track your order in real-time from kitchen to your doorstep</p>
          </div>
          <div className="info-card">
            <h3>🔒 Secure Payment</h3>
            <p>Safe and secure payment processing for your peace of mind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
