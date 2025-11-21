import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Our <span className="gradient-text">Story</span></h1>
              <p>Crafting authentic culinary experiences that bring families together, one meal at a time</p>
              <div className="hero-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🌟</span>
                  <span>Premium Quality</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">❤️</span>
                  <span>Made with Love</span>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🏆</span>
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="story-animation">
                <div className="story-circle">
                  <div className="chef-icon">👨‍🍳</div>
                </div>
                <div className="floating-elements">
                  <span className="element">🍛</span>
                  <span className="element">🥘</span>
                  <span className="element">🍜</span>
                  <span className="element">🥗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="our-journey">
        <div className="container">
          <h2>Our <span className="gradient-text">Journey</span></h2>
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>Started as a small family restaurant in Kathmandu with a dream to serve authentic flavors</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Going Digital</h3>
                <p>Launched our online platform to reach more food lovers during challenging times</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>Expansion</h3>
                <p>Extended delivery coverage across Kathmandu Valley with faster service</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Innovation</h3>
                <p>Introduced advanced features like real-time tracking and personalized recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="our-values">
        <div className="container">
          <h2>Our <span className="gradient-text">Values</span></h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3>Quality Ingredients</h3>
              <p>We source only the finest, freshest ingredients to ensure every dish meets our high standards</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Customer First</h3>
              <p>Your satisfaction is our priority. We listen, adapt, and continuously improve our service</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏠</div>
              <h3>Family Tradition</h3>
              <p>Every recipe carries the warmth of home-cooked meals and generations of culinary wisdom</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Innovation</h3>
              <p>We embrace technology to make ordering convenient while preserving traditional flavors</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Community</h3>
              <p>Supporting local farmers and giving back to the community that has supported us</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♻️</div>
              <h3>Sustainability</h3>
              <p>Committed to eco-friendly practices and reducing our environmental footprint</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Signature Dishes</div>
              <div className="stat-description">Carefully crafted recipes</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25K+</div>
              <div className="stat-label">Happy Customers</div>
              <div className="stat-description">Satisfied food lovers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99%</div>
              <div className="stat-label">Customer Satisfaction</div>
              <div className="stat-description">Based on reviews</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Service Available</div>
              <div className="stat-description">Always ready to serve</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our <span className="gradient-text">Team</span></h2>
          <p className="team-intro">The passionate people behind your favorite meals</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍🍳</div>
              <h3>Chef Ramesh Maharjan</h3>
              <p className="member-role">Head Chef & Co-Founder</p>
              <p className="member-bio">With 15+ years of culinary expertise, Chef Ramesh brings authentic Nepali flavors to every dish</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Sita Shrestha</h3>
              <p className="member-role">Operations Manager</p>
              <p className="member-bio">Ensuring smooth operations and exceptional customer service across all our platforms</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>Arjun Thapa</h3>
              <p className="member-role">Tech Lead</p>
              <p className="member-bio">Building innovative solutions to enhance your food ordering and delivery experience</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🏭</div>
              <h3>Maya Gurung</h3>
              <p className="member-role">Quality Assurance</p>
              <p className="member-bio">Maintaining the highest standards in food quality and safety across all our offerings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our <span className="gradient-text">Mission</span></h2>
              <p className="mission-statement">
                To deliver authentic, high-quality meals that bring joy to families and connect people 
                through the universal language of delicious food.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <span className="point-icon">🎯</span>
                  <span>Preserving authentic flavors while embracing modern convenience</span>
                </div>
                <div className="mission-point">
                  <span className="point-icon">💡</span>
                  <span>Creating memorable dining experiences for every customer</span>
                </div>
                <div className="mission-point">
                  <span className="point-icon">🌟</span>
                  <span>Setting new standards in food delivery and customer service</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="mission-circle">
                <div className="mission-icon">🏆</div>
                <div className="mission-rings">
                  <div className="ring"></div>
                  <div className="ring"></div>
                  <div className="ring"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to <span className="gradient-text">Experience</span> Our Story?</h2>
            <p>Join thousands of food lovers who have made us part of their daily dining experience</p>
            <div className="cta-buttons">
              <button className="primary-btn">Order Now</button>
              <button className="secondary-btn">View Menu</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
