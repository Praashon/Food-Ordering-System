import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Let's <span className="gradient-text">Connect</span></h1>
              <p>Have a question, feedback, or need assistance? We're here to help you have the best experience possible.</p>
              <div className="hero-features">
                <div className="feature">
                  <span className="feature-icon">💬</span>
                  <span>24/7 Support</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">⚡</span>
                  <span>Quick Response</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🎯</span>
                  <span>Expert Help</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="contact-animation">
                <div className="message-bubble">💌</div>
                <div className="pulse-ring"></div>
                <div className="pulse-ring delay-1"></div>
                <div className="pulse-ring delay-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods">
        <div className="container">
          <h2>Multiple Ways to <span className="gradient-text">Reach Us</span></h2>
          <div className="methods-grid">
            <div className="method-card">
              <div className="method-icon">📱</div>
              <h3>Call Us</h3>
              <p>Speak directly with our support team</p>
              <div className="method-info">
                <a href="tel:+9779812345678">+977 981-234-5678</a>
                <span className="availability">Available 24/7</span>
              </div>
            </div>
            <div className="method-card">
              <div className="method-icon">✉️</div>
              <h3>Email Us</h3>
              <p>Send us a detailed message</p>
              <div className="method-info">
                <a href="mailto:support@foodorder.com">support@foodorder.com</a>
                <span className="availability">Response within 1 hour</span>
              </div>
            </div>
            <div className="method-card">
              <div className="method-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Get instant help through our chat</p>
              <div className="method-info">
                <button className="chat-btn">Start Chat</button>
                <span className="availability">Online now</span>
              </div>
            </div>
            <div className="method-card">
              <div className="method-icon">📍</div>
              <h3>Visit Us</h3>
              <p>Come to our main office</p>
              <div className="method-info">
                <span>New Road, Kathmandu</span>
                <span className="availability">Mon-Fri 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-content">
            <div className="form-text">
              <h2>Send Us a <span className="gradient-text">Message</span></h2>
              <p>Fill out the form below and we'll get back to you as soon as possible. We value your feedback and are committed to providing excellent service.</p>
              <div className="form-benefits">
                <div className="benefit">
                  <span className="benefit-icon">⚡</span>
                  <span>Quick response within 1 hour</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">🔒</span>
                  <span>Your information is secure</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">👥</span>
                  <span>Expert support team</span>
                </div>
              </div>
            </div>
            <div className="form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label>Full Name</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label>Email Address</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label>Phone Number</label>
                  </div>
                  <div className="form-group">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="order-inquiry">Order Inquiry</option>
                      <option value="delivery-issue">Delivery Issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder=" "
                  ></textarea>
                  <label>Your Message</label>
                </div>
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <span className="btn-icon">📤</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I track my order?</h3>
              <p>You can track your order in real-time through our website or mobile app using your order number.</p>
            </div>
            <div className="faq-item">
              <h3>What are your delivery hours?</h3>
              <p>We deliver 24/7 across Kathmandu Valley with varying delivery times based on your location.</p>
            </div>
            <div className="faq-item">
              <h3>How do I cancel or modify my order?</h3>
              <p>Orders can be cancelled or modified within 5 minutes of placing them through your account or by calling us.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer refunds?</h3>
              <p>Yes, we offer full refunds for cancelled orders and partial refunds for quality issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="office-hours">
        <div className="container">
          <div className="hours-content">
            <div className="hours-text">
              <h2>Office <span className="gradient-text">Hours</span></h2>
              <p>Our support team is available to assist you during these hours, though our delivery service operates 24/7.</p>
            </div>
            <div className="hours-schedule">
              <div className="day-schedule">
                <span className="day">Monday - Friday</span>
                <span className="time">9:00 AM - 8:00 PM</span>
              </div>
              <div className="day-schedule">
                <span className="day">Saturday</span>
                <span className="time">10:00 AM - 6:00 PM</span>
              </div>
              <div className="day-schedule">
                <span className="day">Sunday</span>
                <span className="time">12:00 PM - 5:00 PM</span>
              </div>
              <div className="emergency-note">
                <span className="emergency-icon">🚨</span>
                <span>For urgent delivery issues, our 24/7 hotline is always available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
