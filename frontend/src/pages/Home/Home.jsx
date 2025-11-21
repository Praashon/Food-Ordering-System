import React, { useEffect, useState, useContext } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Home = () => {

  const [category, setCategory] = React.useState('All');
  const [isLoaded, setIsLoaded] = useState(false);
  const [topRatedFoods, setTopRatedFoods] = useState([]);
  const { url, food_list, loading } = useContext(StoreContext);

  useEffect(() => {
    // Add loading animation
    setIsLoaded(true);
    fetchTopRatedFoods();
  }, []);

  // Update topRatedFoods when food_list changes
  useEffect(() => {
    if (food_list && food_list.length > 0 && topRatedFoods.length === 0) {
      setTopRatedFoods(food_list.slice(0, 8));
    }
  }, [food_list]);

  const fetchTopRatedFoods = async () => {
    try {
      // For now, just get regular foods since top-rated endpoint might have issues
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        // Get first 8 foods as "top rated"
        setTopRatedFoods(response.data.data.slice(0, 8));
      }
    } catch (error) {
      console.log("Error fetching foods:", error);
      // Fallback to using food_list from context if available
      if (food_list && food_list.length > 0) {
        setTopRatedFoods(food_list.slice(0, 8));
      }
    }
  };

  const features = [
    {
      icon: "🍕",
      title: "Fresh Ingredients",
      description: "We use only the freshest, locally sourced ingredients in all our dishes"
    },
    {
      icon: "🚚", 
      title: "Fast Delivery",
      description: "Quick and reliable delivery service right to your doorstep"
    },
    {
      icon: "👨‍🍳",
      title: "Expert Chefs",
      description: "Our experienced chefs create culinary masterpieces just for you"
    },
    {
      icon: "⭐",
      title: "5 Star Quality",
      description: "Premium quality food with exceptional taste and presentation"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "50+", label: "Food Items" },
    { number: "24/7", label: "Service" },
    { number: "4.9", label: "Rating" }
  ];

  return (
    <div className={`home-container ${isLoaded ? 'loaded' : ''}`}>
        {/* Hero Section */}
        <div className="home-hero-section">
          <Header />
        </div>
        
        <div className="home-content">
          {/* Features Section */}
          <section className="features-section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Why Choose Hungry Heaven?</h2>
                <p className="section-subtitle">Experience the difference with our premium food service</p>
              </div>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="feature-icon">{feature.icon}</div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <div className="container">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="container">
              <div className="cta-content">
                <div className="cta-text">
                  <h2>Ready to Order?</h2>
                  <p>Explore our full menu and discover amazing dishes crafted with love</p>
                  <Link to="/menu" className="cta-button">
                    <span>Browse Menu</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                <div className="cta-image">
                  <img src={assets.header_img} alt="Delicious Food" />
                </div>
              </div>
            </div>
          </section>
          
          {/* Popular Items Section */}
          <section className="popular-items-section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Top Rated Dishes</h2>
                <p className="section-subtitle">Our customers' highest rated picks</p>
              </div>
              <FoodDisplay category={category} limit={10} topRatedFoods={topRatedFoods} />
              <div className="view-all-container">
                <Link to="/menu" className="view-all-button">
                  View All Items
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Home