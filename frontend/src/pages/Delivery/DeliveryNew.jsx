import React from 'react';
import './Delivery.css';
import { assets } from '../../assets/assets';

const Delivery = () => {
  return (
    <div className="delivery-page">
      {/* Hero Section */}
      <section className="delivery-hero">
        <div className="hero-background">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Lightning Fast <span className="gradient-text">Delivery</span></h1>
              <p>Experience the fastest food delivery service with real-time tracking and guaranteed freshness</p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">30</span>
                  <span className="stat-label">Min Average</span>
                </div>
                <div className="stat">
                  <span className="stat-number">99%</span>
                  <span className="stat-label">On Time</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Available</span>
                </div>
              </div>
              <button className="cta-button">Track Your Order</button>
            </div>
            <div className="hero-visual">
              <div className="delivery-animation">
                <div className="delivery-truck">🚚</div>
                <div className="delivery-path"></div>
                <div className="delivery-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="delivery-features">
        <div className="container">
          <h2>Why Choose Our <span className="gradient-text">Delivery Service</span></h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Ultra Fast</h3>
              <p>Average delivery time of just 30 minutes with our optimized routing system</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Real-time Tracking</h3>
              <p>Track your order live from kitchen to your doorstep with GPS precision</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌡️</div>
              <h3>Temperature Controlled</h3>
              <p>Special insulated bags ensure your food arrives hot and fresh every time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💯</div>
              <h3>Quality Guaranteed</h3>
              <p>100% satisfaction guarantee or we'll make it right immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It <span className="gradient-text">Works</span></h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-visual">
                <div className="step-number">01</div>
                <div className="step-icon">🛒</div>
              </div>
              <div className="step-content">
                <h3>Browse & Order</h3>
                <p>Choose from our extensive menu of authentic dishes and add them to your cart</p>
              </div>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-visual">
                <div className="step-number">02</div>
                <div className="step-icon">👨‍🍳</div>
              </div>
              <div className="step-content">
                <h3>Chef Prepares</h3>
                <p>Our expert chefs prepare your order with fresh ingredients and authentic spices</p>
              </div>
            </div>
            <div className="step-connector"></div>
            <div className="step">
              <div className="step-visual">
                <div className="step-number">03</div>
                <div className="step-icon">🏍️</div>
              </div>
              <div className="step-content">
                <h3>Fast Delivery</h3>
                <p>Our trained delivery partners ensure your food reaches you hot and on time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Zones Section */}
      <section className="delivery-zones">
        <div className="container">
          <div className="zones-content">
            <div className="zones-text">
              <h2>Delivery <span className="gradient-text">Coverage</span></h2>
              <p>We deliver across major cities with expanding coverage every month</p>
              <div className="zone-list">
                <div className="zone-item">
                  <span className="zone-icon">📍</span>
                  <div>
                    <h4>Kathmandu Valley</h4>
                    <p>Complete coverage including Kathmandu, Lalitpur, and Bhaktapur</p>
                  </div>
                </div>
                <div className="zone-item">
                  <span className="zone-icon">📍</span>
                  <div>
                    <h4>Pokhara City</h4>
                    <p>Full city coverage with plans to expand to surrounding areas</p>
                  </div>
                </div>
                <div className="zone-item">
                  <span className="zone-icon">📍</span>
                  <div>
                    <h4>Coming Soon</h4>
                    <p>Chitwan, Butwal, and more cities launching this year</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="zones-visual">
              <div className="map-placeholder">
                <div className="map-pin active">📍</div>
                <div className="map-pin">📍</div>
                <div className="map-pin upcoming">📍</div>
                <div className="coverage-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Partners Section */}
      <section className="delivery-partners">
        <div className="container">
          <h2>Our Trusted <span className="gradient-text">Delivery Partners</span></h2>
          <div className="partners-grid">
            <div className="partner-card">
              <div className="partner-avatar">👨‍🚴</div>
              <h3>Bike Delivery</h3>
              <p>Fast and eco-friendly delivery for nearby locations</p>
            </div>
            <div className="partner-card">
              <div className="partner-avatar">🚗</div>
              <h3>Car Delivery</h3>
              <p>Comfortable delivery for larger orders and distant areas</p>
            </div>
            <div className="partner-card">
              <div className="partner-avatar">🏍️</div>
              <h3>Scooter Express</h3>
              <p>Quick navigation through traffic for faster delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="delivery-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for <span className="gradient-text">Lightning Fast</span> Delivery?</h2>
            <p>Join thousands of satisfied customers who trust us for their daily meals</p>
            <div className="cta-buttons">
              <button className="primary-btn">Order Now</button>
              <button className="secondary-btn">Download App</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
