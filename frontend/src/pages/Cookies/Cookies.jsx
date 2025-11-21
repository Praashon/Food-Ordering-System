import React from 'react';
import './Cookies.css';

const Cookies = () => {
  return (
    <div className="cookies-page">
      {/* Hero Section */}
      <section className="cookies-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Cookie Policy</h1>
            <p>Learn about how we use cookies to enhance your experience on our food delivery platform.</p>
            <div className="last-updated">
              <span>Last updated: December 2024</span>
            </div>
          </div>
          <div className="hero-icon">
            <div className="cookie-icon">🍪</div>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="what-are-cookies">
        <div className="container">
          <h2>What Are Cookies?</h2>
          <div className="cookies-explanation">
            <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our service.</p>
            
            <div className="cookie-benefits">
              <h3>🎯 Why We Use Cookies</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">⚡</div>
                  <h4>Enhanced Performance</h4>
                  <p>Make our website faster and more responsive to your needs.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🔒</div>
                  <h4>Security</h4>
                  <p>Keep your account secure and prevent unauthorized access.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">👤</div>
                  <h4>Personalization</h4>
                  <p>Remember your preferences and provide customized content.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">📊</div>
                  <h4>Analytics</h4>
                  <p>Help us understand how our website is used to improve it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="cookie-types">
        <div className="container">
          <h2>Types of Cookies We Use</h2>
          <div className="types-grid">
            <div className="type-card">
              <div className="type-icon">🔧</div>
              <h3>Essential Cookies</h3>
              <p><strong>Purpose:</strong> These cookies are necessary for the website to function properly.</p>
              <p><strong>What they do:</strong></p>
              <ul>
                <li>Enable you to log in to your account</li>
                <li>Remember items in your shopping cart</li>
                <li>Provide security features</li>
                <li>Allow you to navigate between pages</li>
              </ul>
              <p><strong>Can you disable them?</strong> No, these are required for basic functionality.</p>
            </div>

            <div className="type-card">
              <div className="type-icon">⚡</div>
              <h3>Performance Cookies</h3>
              <p><strong>Purpose:</strong> Help us understand how visitors interact with our website.</p>
              <p><strong>What they do:</strong></p>
              <ul>
                <li>Count visits and traffic sources</li>
                <li>Measure website performance</li>
                <li>Identify popular pages and features</li>
                <li>Help us fix technical issues</li>
              </ul>
              <p><strong>Can you disable them?</strong> Yes, but this may affect website performance insights.</p>
            </div>

            <div className="type-card">
              <div className="type-icon">🎨</div>
              <h3>Functional Cookies</h3>
              <p><strong>Purpose:</strong> Enhance your experience with personalized features.</p>
              <p><strong>What they do:</strong></p>
              <ul>
                <li>Remember your language preferences</li>
                <li>Store your delivery address</li>
                <li>Keep track of your favorite restaurants</li>
                <li>Customize the interface to your preferences</li>
              </ul>
              <p><strong>Can you disable them?</strong> Yes, but you'll lose personalized features.</p>
            </div>

            <div className="type-card">
              <div className="type-icon">📢</div>
              <h3>Marketing Cookies</h3>
              <p><strong>Purpose:</strong> Deliver relevant advertisements and track campaigns.</p>
              <p><strong>What they do:</strong></p>
              <ul>
                <li>Show you relevant ads based on your interests</li>
                <li>Prevent the same ad from being shown repeatedly</li>
                <li>Measure advertising campaign effectiveness</li>
                <li>Enable social media sharing features</li>
              </ul>
              <p><strong>Can you disable them?</strong> Yes, you can opt out of marketing cookies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Control */}
      <section className="cookie-control">
        <div className="container">
          <h2>How to Control Cookies</h2>
          <div className="control-content">
            <div className="control-options">
              <div className="control-method">
                <h3>🌐 Browser Settings</h3>
                <p>You can control cookies through your browser settings:</p>
                <div className="browser-instructions">
                  <div className="browser-item">
                    <strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data
                  </div>
                  <div className="browser-item">
                    <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
                  </div>
                  <div className="browser-item">
                    <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                  </div>
                  <div className="browser-item">
                    <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                  </div>
                </div>
              </div>

              <div className="control-method">
                <h3>⚙️ Our Cookie Preferences</h3>
                <p>Use our cookie preference center to customize your settings:</p>
                <div className="preference-buttons">
                  <button className="accept-all-btn">Accept All Cookies</button>
                  <button className="customize-btn">Customize Settings</button>
                  <button className="reject-btn">Reject Non-Essential</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="third-party-cookies">
        <div className="container">
          <h2>Third-Party Cookies</h2>
          <div className="third-party-content">
            <p>We also use cookies from trusted third-party services to enhance your experience:</p>
            
            <div className="third-party-grid">
              <div className="third-party-card">
                <h3>📊 Google Analytics</h3>
                <p>Helps us understand website usage and improve performance.</p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
              </div>
              
              <div className="third-party-card">
                <h3>📍 Google Maps</h3>
                <p>Powers our delivery tracking and location services.</p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
              </div>
              
              <div className="third-party-card">
                <h3>💳 Payment Processors</h3>
                <p>Secure payment processing through Stripe and other providers.</p>
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a>
              </div>
              
              <div className="third-party-card">
                <h3>💬 Customer Support</h3>
                <p>Live chat and support ticket functionality.</p>
                <p>Various privacy policies apply</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="cookies-contact">
        <div className="container">
          <h2>Questions About Cookies?</h2>
          <div className="contact-content">
            <p>If you have any questions about our use of cookies or this policy, please contact us:</p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div>
                  <strong>Email:</strong>
                  <a href="mailto:privacy@foodorder.com">privacy@foodorder.com</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div>
                  <strong>Phone:</strong>
                  <a href="tel:+977-9800000000">+977-9800000000</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cookies-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Manage Your Cookie Preferences</h2>
            <p>Take control of your privacy by customizing which cookies you accept.</p>
            <button className="cta-button">
              Cookie Settings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
