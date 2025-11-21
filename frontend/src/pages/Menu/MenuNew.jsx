import React, { useState, useEffect, useContext } from 'react';
import './Menu.css';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import { StoreContext } from '../../context/StoreContext';

const Menu = () => {
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { food_list } = useContext(StoreContext);

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="hero-background">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Discover Our <span className="gradient-text">Flavors</span></h1>
              <p>Explore an authentic collection of Nepali and Indian cuisines, crafted with passion and served with love</p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Dishes</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">8</span>
                  <span className="stat-label">Categories</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Fresh</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="menu-animation">
                <div className="plate-container">
                  <div className="plate">🍽️</div>
                  <div className="food-items">
                    <span className="food-item">🍛</span>
                    <span className="food-item">🥘</span>
                    <span className="food-item">🍜</span>
                    <span className="food-item">🥗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="menu-search">
        <div className="container">
          <div className="search-container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search for your favorite dish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">🔍</button>
            </div>
            <div className="search-suggestions">
              <span className="suggestion-label">Popular searches:</span>
              <div className="suggestions">
                <button onClick={() => setSearchTerm('momo')}>Momo</button>
                <button onClick={() => setSearchTerm('dal')}>Dal Bhat</button>
                <button onClick={() => setSearchTerm('curry')}>Curry</button>
                <button onClick={() => setSearchTerm('rice')}>Rice</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="menu-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🌿</div>
              <h3>Fresh Ingredients</h3>
              <p>Sourced daily from local markets</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Expert Chefs</h3>
              <p>Traditional recipes perfected over generations</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Quick Service</h3>
              <p>Fast preparation without compromising quality</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌶️</div>
              <h3>Authentic Spices</h3>
              <p>Imported spices for genuine flavors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="menu-content">
        <div className="container">
          <div className="menu-header">
            <h2>Browse Our <span className="gradient-text">Menu</span></h2>
            <p>Choose from our carefully curated selection of dishes</p>
          </div>
          
          <div className="menu-wrapper">
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} searchTerm={searchTerm} />
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="special-offers">
        <div className="container">
          <h2>Today's <span className="gradient-text">Special Offers</span></h2>
          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-badge">20% OFF</div>
              <div className="offer-content">
                <h3>Weekend Special</h3>
                <p>Get 20% off on all curry dishes this weekend</p>
                <button className="offer-btn">Order Now</button>
              </div>
            </div>
            <div className="offer-card">
              <div className="offer-badge">Buy 1 Get 1</div>
              <div className="offer-content">
                <h3>Momo Mania</h3>
                <p>Buy one plate of momo, get another absolutely free</p>
                <button className="offer-btn">Order Now</button>
              </div>
            </div>
            <div className="offer-card">
              <div className="offer-badge">Free Delivery</div>
              <div className="offer-content">
                <h3>Orders Above Rs. 500</h3>
                <p>Enjoy free delivery on orders above Rs. 500</p>
                <button className="offer-btn">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="menu-testimonials">
        <div className="container">
          <h2>What Our <span className="gradient-text">Customers Say</span></h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The best authentic Nepali food I've ever had! The momos are absolutely divine."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨</div>
                <div className="author-info">
                  <h4>Rajesh Kumar</h4>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Fast delivery and amazing taste. The dal bhat reminds me of home cooking."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div className="author-info">
                  <h4>Priya Sharma</h4>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Excellent variety and quality. Their curry dishes are exceptional!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨</div>
                <div className="author-info">
                  <h4>Arjun Thapa</h4>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
