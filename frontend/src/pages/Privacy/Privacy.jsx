import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Privacy Policy</h1>
            <p>Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>
            <div className="last-updated">
              <span>Last updated: December 2024</span>
            </div>
          </div>
          <div className="hero-icon">
            <div className="shield-icon">🛡️</div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="privacy-overview">
        <div className="container">
          <h2>What You Need to Know</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="card-icon">📊</div>
              <h3>Data Collection</h3>
              <p>We collect only necessary information to provide our food delivery service effectively.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">🔒</div>
              <h3>Data Security</h3>
              <p>Your data is encrypted and securely stored with industry-standard protection measures.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">🎯</div>
              <h3>Data Usage</h3>
              <p>We use your information solely to process orders and improve our service quality.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">👤</div>
              <h3>Your Rights</h3>
              <p>You have full control over your data with options to view, edit, or delete your information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="info-collection">
        <div className="container">
          <h2>Information We Collect</h2>
          <div className="collection-content">
            <div className="collection-categories">
              <div className="category">
                <h3>📝 Personal Information</h3>
                <ul>
                  <li>Name and contact details</li>
                  <li>Email address and phone number</li>
                  <li>Delivery address and location</li>
                  <li>Payment information (securely encrypted)</li>
                  <li>Profile picture (optional)</li>
                </ul>
              </div>
              
              <div className="category">
                <h3>🛒 Order Information</h3>
                <ul>
                  <li>Order history and preferences</li>
                  <li>Food items and quantities</li>
                  <li>Delivery instructions</li>
                  <li>Order timestamps and status</li>
                  <li>Feedback and ratings</li>
                </ul>
              </div>
              
              <div className="category">
                <h3>📱 Technical Information</h3>
                <ul>
                  <li>Device type and browser information</li>
                  <li>IP address and location data</li>
                  <li>App usage and navigation patterns</li>
                  <li>Performance and error logs</li>
                  <li>Cookies and session data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="info-usage">
        <div className="container">
          <h2>How We Use Your Information</h2>
          <div className="usage-grid">
            <div className="usage-card">
              <div className="usage-icon">🍽️</div>
              <h3>Order Processing</h3>
              <p>Process and fulfill your food orders, manage payments, and coordinate delivery.</p>
            </div>
            <div className="usage-card">
              <div className="usage-icon">🚚</div>
              <h3>Delivery Service</h3>
              <p>Provide accurate delivery tracking, route optimization, and real-time updates.</p>
            </div>
            <div className="usage-card">
              <div className="usage-icon">💬</div>
              <h3>Customer Support</h3>
              <p>Respond to inquiries, resolve issues, and provide personalized assistance.</p>
            </div>
            <div className="usage-card">
              <div className="usage-icon">🎯</div>
              <h3>Service Improvement</h3>
              <p>Analyze usage patterns to enhance our platform and introduce new features.</p>
            </div>
            <div className="usage-card">
              <div className="usage-icon">📧</div>
              <h3>Communication</h3>
              <p>Send order confirmations, delivery updates, and important service notifications.</p>
            </div>
            <div className="usage-card">
              <div className="usage-icon">🛡️</div>
              <h3>Security & Safety</h3>
              <p>Prevent fraud, detect suspicious activity, and maintain platform security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="data-protection">
        <div className="container">
          <h2>How We Protect Your Data</h2>
          <div className="protection-content">
            <div className="protection-main">
              <div className="security-measures">
                <h3>🔐 Security Measures</h3>
                <div className="measures-grid">
                  <div className="measure">
                    <strong>Encryption:</strong> All sensitive data is encrypted using AES-256 encryption standards.
                  </div>
                  <div className="measure">
                    <strong>Secure Servers:</strong> Data is stored on secure servers with regular security audits.
                  </div>
                  <div className="measure">
                    <strong>Access Control:</strong> Strict access controls ensure only authorized personnel can access data.
                  </div>
                  <div className="measure">
                    <strong>Regular Updates:</strong> Security systems are continuously updated to prevent vulnerabilities.
                  </div>
                </div>
              </div>
              
              <div className="compliance">
                <h3>📋 Compliance Standards</h3>
                <ul>
                  <li>GDPR (General Data Protection Regulation) compliant</li>
                  <li>PCI DSS compliant for payment processing</li>
                  <li>Regular third-party security assessments</li>
                  <li>Employee data protection training programs</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="user-rights">
        <div className="container">
          <h2>Your Privacy Rights</h2>
          <div className="rights-grid">
            <div className="right-card">
              <div className="right-icon">👁️</div>
              <h3>Right to Access</h3>
              <p>View all personal data we have collected about you and how it's being used.</p>
            </div>
            <div className="right-card">
              <div className="right-icon">✏️</div>
              <h3>Right to Rectification</h3>
              <p>Update or correct any inaccurate or incomplete personal information.</p>
            </div>
            <div className="right-card">
              <div className="right-icon">🗑️</div>
              <h3>Right to Deletion</h3>
              <p>Request deletion of your personal data when it's no longer needed.</p>
            </div>
            <div className="right-card">
              <div className="right-icon">📦</div>
              <h3>Data Portability</h3>
              <p>Receive a copy of your data in a structured, machine-readable format.</p>
            </div>
            <div className="right-card">
              <div className="right-icon">🚫</div>
              <h3>Right to Object</h3>
              <p>Object to processing of your personal data for specific purposes.</p>
            </div>
            <div className="right-card">
              <div className="right-icon">⏸️</div>
              <h3>Processing Restriction</h3>
              <p>Request restriction of processing under certain circumstances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies and Tracking */}
      <section className="cookies-section">
        <div className="container">
          <h2>Cookies and Tracking</h2>
          <div className="cookies-content">
            <div className="cookies-info">
              <h3>🍪 What Are Cookies?</h3>
              <p>Cookies are small text files stored on your device that help us improve your experience on our platform. We use different types of cookies for various purposes.</p>
              
              <div className="cookie-types">
                <div className="cookie-type">
                  <h4>Essential Cookies</h4>
                  <p>Required for basic site functionality, login sessions, and security features.</p>
                </div>
                <div className="cookie-type">
                  <h4>Performance Cookies</h4>
                  <p>Help us understand how visitors interact with our site to improve performance.</p>
                </div>
                <div className="cookie-type">
                  <h4>Functional Cookies</h4>
                  <p>Remember your preferences and provide enhanced, personalized features.</p>
                </div>
                <div className="cookie-type">
                  <h4>Marketing Cookies</h4>
                  <p>Used to deliver relevant advertisements and track marketing campaign effectiveness.</p>
                </div>
              </div>
              
              <div className="cookie-control">
                <h4>🎛️ Cookie Control</h4>
                <p>You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect site functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="third-party">
        <div className="container">
          <h2>Third-Party Services</h2>
          <div className="third-party-grid">
            <div className="service-card">
              <div className="service-icon">💳</div>
              <h3>Payment Processors</h3>
              <p>We use secure payment processors like Stripe and PayPal to handle transactions. They have their own privacy policies governing payment data.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📍</div>
              <h3>Maps & Location</h3>
              <p>Google Maps API is used for delivery tracking and location services. Location data is processed according to Google's privacy policy.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Analytics</h3>
              <p>We use Google Analytics to understand user behavior and improve our service. Data is anonymized and aggregated.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📧</div>
              <h3>Email Services</h3>
              <p>Email communications are handled through secure email service providers with appropriate data protection measures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="data-retention">
        <div className="container">
          <h2>Data Retention</h2>
          <div className="retention-content">
            <div className="retention-policy">
              <h3>📅 How Long We Keep Your Data</h3>
              <div className="retention-items">
                <div className="retention-item">
                  <strong>Account Information:</strong> Retained while your account is active and for 2 years after account closure for legal compliance.
                </div>
                <div className="retention-item">
                  <strong>Order History:</strong> Kept for 5 years for business records, tax purposes, and dispute resolution.
                </div>
                <div className="retention-item">
                  <strong>Payment Data:</strong> Credit card information is not stored; tokens are retained as per payment processor policies.
                </div>
                <div className="retention-item">
                  <strong>Support Communications:</strong> Customer service interactions are kept for 3 years for quality assurance.
                </div>
                <div className="retention-item">
                  <strong>Marketing Data:</strong> Removed immediately upon unsubscribing or account deletion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Updates */}
      <section className="privacy-contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-section">
              <h2>Contact Us</h2>
              <p>If you have questions about this privacy policy or how we handle your data, please contact us:</p>
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
                    <a href="tel:+1234567890">+977-9800000000</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div>
                    <strong>Address:</strong>
                    123 Food Street, Kathmandu, Nepal
                  </div>
                </div>
              </div>
            </div>
            
            <div className="updates-section">
              <h2>Policy Updates</h2>
              <p>We may update this privacy policy from time to time. When we make changes:</p>
              <ul>
                <li>We'll post the updated policy on this page</li>
                <li>We'll update the "last modified" date</li>
                <li>For significant changes, we'll notify you via email</li>
                <li>You'll be asked to review and accept major changes</li>
              </ul>
              <div className="policy-version">
                <strong>Current Version:</strong> 2.1<br />
                <strong>Effective Date:</strong> December 1, 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="privacy-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Questions About Your Privacy?</h2>
            <p>Our privacy team is here to help you understand how we protect your data and ensure your rights are respected.</p>
            <button className="cta-button" onClick={() => window.location.href = 'mailto:privacy@foodorder.com'}>
              Contact Privacy Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
