import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Terms of Service</h1>
            <p>Please read these terms carefully before using our food delivery service. By using our platform, you agree to these terms and conditions.</p>
            <div className="last-updated">
              <span>Last updated: December 2024</span>
            </div>
          </div>
          <div className="hero-icon">
            <div className="contract-icon">📋</div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="terms-overview">
        <div className="container">
          <h2>Agreement Overview</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="card-icon">✅</div>
              <h3>Acceptance</h3>
              <p>By using our service, you accept these terms and agree to comply with all applicable laws.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">🛡️</div>
              <h3>User Rights</h3>
              <p>You have the right to use our service in accordance with these terms and our policies.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">⚖️</div>
              <h3>Responsibilities</h3>
              <p>Both parties have specific responsibilities to ensure a smooth service experience.</p>
            </div>
            <div className="overview-card">
              <div className="card-icon">🔄</div>
              <h3>Updates</h3>
              <p>Terms may be updated periodically, and continued use implies acceptance of changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="service-description">
        <div className="container">
          <h2>Our Service</h2>
          <div className="service-content">
            <div className="service-main">
              <h3>🍽️ What We Provide</h3>
              <p>FoodOrder is an online platform that connects customers with local restaurants and food vendors. We facilitate the ordering and delivery of food items through our digital platform.</p>
              
              <div className="service-features">
                <div className="feature-item">
                  <h4>Online Ordering</h4>
                  <p>Browse menus, select items, and place orders through our website or mobile application.</p>
                </div>
                <div className="feature-item">
                  <h4>Payment Processing</h4>
                  <p>Secure payment processing through trusted payment gateway partners.</p>
                </div>
                <div className="feature-item">
                  <h4>Delivery Coordination</h4>
                  <p>Coordination of food delivery from restaurants to your specified location.</p>
                </div>
                <div className="feature-item">
                  <h4>Customer Support</h4>
                  <p>Customer service support for order-related inquiries and issues.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Responsibilities */}
      <section className="user-responsibilities">
        <div className="container">
          <h2>Your Responsibilities</h2>
          <div className="responsibilities-grid">
            <div className="responsibility-card">
              <div className="responsibility-icon">👤</div>
              <h3>Account Management</h3>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Update your information when necessary</li>
                <li>Notify us of any unauthorized access</li>
                <li>Use only one account per person</li>
              </ul>
            </div>
            
            <div className="responsibility-card">
              <div className="responsibility-icon">🛒</div>
              <h3>Ordering & Payment</h3>
              <ul>
                <li>Ensure payment method is valid and has sufficient funds</li>
                <li>Provide accurate delivery address and contact information</li>
                <li>Be available to receive orders during specified delivery times</li>
                <li>Review orders carefully before placing them</li>
                <li>Report any issues with orders promptly</li>
              </ul>
            </div>
            
            <div className="responsibility-card">
              <div className="responsibility-icon">🤝</div>
              <h3>Conduct & Behavior</h3>
              <ul>
                <li>Treat delivery personnel and customer service with respect</li>
                <li>Do not misuse or abuse the platform</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Do not engage in fraudulent activities</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Responsibilities */}
      <section className="our-responsibilities">
        <div className="container">
          <h2>Our Responsibilities</h2>
          <div className="our-resp-content">
            <div className="resp-grid">
              <div className="resp-item">
                <div className="resp-icon">🌐</div>
                <h3>Platform Availability</h3>
                <p>We strive to maintain platform availability 24/7, though occasional maintenance and technical issues may occur.</p>
              </div>
              
              <div className="resp-item">
                <div className="resp-icon">🔒</div>
                <h3>Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information and payment data.</p>
              </div>
              
              <div className="resp-item">
                <div className="resp-icon">📞</div>
                <h3>Customer Support</h3>
                <p>We provide customer support to address order issues, technical problems, and general inquiries.</p>
              </div>
              
              <div className="resp-item">
                <div className="resp-icon">🚚</div>
                <h3>Delivery Coordination</h3>
                <p>We coordinate with delivery partners to ensure timely and accurate order delivery.</p>
              </div>
              
              <div className="resp-item">
                <div className="resp-icon">💳</div>
                <h3>Payment Processing</h3>
                <p>We facilitate secure payment processing and handle refunds according to our refund policy.</p>
              </div>
              
              <div className="resp-item">
                <div className="resp-icon">📱</div>
                <h3>Service Updates</h3>
                <p>We continuously improve our platform and notify users of significant changes to our service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orders and Payments */}
      <section className="orders-payments">
        <div className="container">
          <h2>Orders & Payments</h2>
          <div className="orders-content">
            <div className="orders-grid">
              <div className="order-section">
                <h3>📋 Order Placement</h3>
                <ul>
                  <li>Orders are confirmed when payment is successfully processed</li>
                  <li>We reserve the right to cancel orders for various reasons including restaurant unavailability</li>
                  <li>Order modifications may not be possible once the restaurant begins preparation</li>
                  <li>Delivery times are estimates and may vary due to weather, traffic, or high demand</li>
                  <li>Special instructions should be clearly mentioned during checkout</li>
                </ul>
              </div>
              
              <div className="payment-section">
                <h3>💰 Payment Terms</h3>
                <ul>
                  <li>Payment is required at the time of order placement</li>
                  <li>Accepted payment methods include credit/debit cards and digital wallets</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Delivery fees and service charges are clearly displayed before payment</li>
                  <li>All prices include applicable taxes unless stated otherwise</li>
                </ul>
              </div>
              
              <div className="cancellation-section">
                <h3>❌ Cancellation Policy</h3>
                <ul>
                  <li>Orders can be cancelled within 5 minutes of placement for a full refund</li>
                  <li>After preparation begins, cancellations may not be possible</li>
                  <li>Restaurant-initiated cancellations result in automatic full refunds</li>
                  <li>Refunds are processed within 3-7 business days</li>
                  <li>Repeated cancellations may result in account restrictions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Terms */}
      <section className="delivery-terms">
        <div className="container">
          <h2>Delivery Terms</h2>
          <div className="delivery-content">
            <div className="delivery-policies">
              <div className="policy-card">
                <h3>🚚 Delivery Process</h3>
                <div className="policy-points">
                  <p><strong>Delivery Areas:</strong> We deliver within designated zones. Check availability in your area before ordering.</p>
                  <p><strong>Delivery Times:</strong> Standard delivery takes 30-45 minutes. Express delivery available for additional charges.</p>
                  <p><strong>Contact Requirement:</strong> You must be reachable by phone during delivery for coordination.</p>
                  <p><strong>Address Accuracy:</strong> Ensure delivery address is complete and accurate to avoid delays.</p>
                  <p><strong>Failed Deliveries:</strong> If delivery fails due to incorrect information, additional charges may apply for re-delivery.</p>
                </div>
              </div>
              
              <div className="policy-card">
                <h3>📱 Order Tracking</h3>
                <div className="policy-points">
                  <p><strong>Real-time Updates:</strong> Track your order status from preparation to delivery through our platform.</p>
                  <p><strong>Notifications:</strong> Receive SMS and app notifications for order updates.</p>
                  <p><strong>Estimated Time:</strong> Delivery time estimates are provided based on current conditions.</p>
                  <p><strong>Delays:</strong> Unforeseen circumstances may cause delays, for which we'll keep you informed.</p>
                  <p><strong>Contact Driver:</strong> Call the delivery partner if needed for specific instructions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="prohibited-activities">
        <div className="container">
          <h2>Prohibited Activities</h2>
          <div className="prohibited-content">
            <p className="section-intro">The following activities are strictly prohibited when using our service:</p>
            
            <div className="prohibited-grid">
              <div className="prohibited-card">
                <div className="prohibited-icon">🚫</div>
                <h3>Fraudulent Activities</h3>
                <ul>
                  <li>Using stolen or invalid payment methods</li>
                  <li>Creating fake accounts or providing false information</li>
                  <li>Attempting to manipulate pricing or promotions</li>
                  <li>Claiming false refunds or chargebacks</li>
                </ul>
              </div>
              
              <div className="prohibited-card">
                <div className="prohibited-icon">⚖️</div>
                <h3>Legal Violations</h3>
                <ul>
                  <li>Using the service for any illegal purposes</li>
                  <li>Violating any local, state, or federal laws</li>
                  <li>Infringing on intellectual property rights</li>
                  <li>Harassing or threatening other users or staff</li>
                </ul>
              </div>
              
              <div className="prohibited-card">
                <div className="prohibited-icon">💻</div>
                <h3>Platform Misuse</h3>
                <ul>
                  <li>Attempting to hack or compromise system security</li>
                  <li>Using automated systems or bots for orders</li>
                  <li>Reverse engineering our software or services</li>
                  <li>Interfering with the proper functioning of the platform</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="liability-section">
        <div className="container">
          <h2>Limitation of Liability</h2>
          <div className="liability-content">
            <div className="liability-main">
              <h3>⚖️ Service Limitations</h3>
              <p>While we strive to provide excellent service, we cannot guarantee:</p>
              
              <div className="limitation-items">
                <div className="limitation-item">
                  <strong>Food Quality:</strong> We are not responsible for the quality, safety, or preparation of food items, which remain the responsibility of the restaurant.
                </div>
                <div className="limitation-item">
                  <strong>Delivery Timing:</strong> Delivery times are estimates, and we are not liable for delays caused by traffic, weather, or other external factors.
                </div>
                <div className="limitation-item">
                  <strong>Restaurant Availability:</strong> Restaurant hours and menu availability are subject to change without notice.
                </div>
                <div className="limitation-item">
                  <strong>Technical Issues:</strong> We are not liable for damages resulting from technical failures, system maintenance, or internet connectivity issues.
                </div>
              </div>
              
              <div className="liability-notice">
                <h4>🚨 Important Notice</h4>
                <p>Our total liability for any claims arising from your use of our service shall not exceed the amount you paid for the specific order in question. We are not liable for any indirect, incidental, special, or consequential damages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Termination */}
      <section className="termination-section">
        <div className="container">
          <h2>Account Termination</h2>
          <div className="termination-content">
            <div className="termination-grid">
              <div className="termination-card">
                <h3>🔴 Grounds for Termination</h3>
                <p>We may terminate or suspend your account if you:</p>
                <ul>
                  <li>Violate these terms of service</li>
                  <li>Engage in fraudulent or illegal activities</li>
                  <li>Abuse our platform or staff</li>
                  <li>Repeatedly cancel orders without valid reasons</li>
                  <li>Provide false or misleading information</li>
                  <li>Use the service in a manner that harms our business</li>
                </ul>
              </div>
              
              <div className="termination-card">
                <h3>📋 Termination Process</h3>
                <p>Account termination procedures:</p>
                <ul>
                  <li>We will notify you of termination via email</li>
                  <li>You may appeal the decision within 7 days</li>
                  <li>Pending orders will be processed or refunded</li>
                  <li>Account data may be retained as per our privacy policy</li>
                  <li>You may request data deletion after termination</li>
                  <li>New account creation may be restricted</li>
                </ul>
              </div>
              
              <div className="termination-card">
                <h3>✅ Voluntary Termination</h3>
                <p>You may close your account at any time:</p>
                <ul>
                  <li>Contact our customer support team</li>
                  <li>Complete any pending orders before closure</li>
                  <li>Ensure no outstanding balances or disputes</li>
                  <li>Request data deletion if desired</li>
                  <li>Understand that closure may be permanent</li>
                  <li>Save any important order history or receipts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="changes-section">
        <div className="container">
          <h2>Changes to Terms</h2>
          <div className="changes-content">
            <div className="changes-main">
              <h3>📝 How We Update Terms</h3>
              <p>We may modify these terms from time to time to reflect changes in our service, legal requirements, or business practices.</p>
              
              <div className="changes-process">
                <div className="change-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Notification</h4>
                    <p>We'll notify you of significant changes via email and platform notifications.</p>
                  </div>
                </div>
                
                <div className="change-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Review Period</h4>
                    <p>You'll have at least 7 days to review changes before they take effect.</p>
                  </div>
                </div>
                
                <div className="change-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Acceptance</h4>
                    <p>Continued use of our service after changes indicates acceptance of new terms.</p>
                  </div>
                </div>
                
                <div className="change-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Disagreement</h4>
                    <p>If you disagree with changes, you may close your account before they take effect.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="terms-contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-section">
              <h2>Legal Contact</h2>
              <p>For questions about these terms or legal matters, please contact us:</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div>
                    <strong>Legal Department:</strong>
                    <a href="mailto:legal@foodorder.com">legal@foodorder.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div>
                    <strong>Legal Helpline:</strong>
                    <a href="tel:+977-9800000001">+977-9800000001</a>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div>
                    <strong>Legal Address:</strong>
                    123 Food Street, Legal Dept., Kathmandu, Nepal
                  </div>
                </div>
              </div>
            </div>
            
            <div className="governing-law">
              <h2>Governing Law</h2>
              <div className="law-content">
                <h3>⚖️ Jurisdiction</h3>
                <p>These terms are governed by the laws of Nepal. Any disputes arising from these terms or your use of our service will be subject to the exclusive jurisdiction of the courts in Kathmandu, Nepal.</p>
                
                <h3>🤝 Dispute Resolution</h3>
                <p>Before pursuing legal action, we encourage resolving disputes through:</p>
                <ul>
                  <li>Direct communication with our customer support</li>
                  <li>Mediation through a neutral third party</li>
                  <li>Alternative dispute resolution mechanisms</li>
                </ul>
                
                <div className="terms-version">
                  <strong>Terms Version:</strong> 3.2<br />
                  <strong>Effective Date:</strong> December 1, 2024<br />
                  <strong>Previous Version:</strong> November 1, 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="terms-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Questions About These Terms?</h2>
            <p>Our legal team is available to clarify any aspects of these terms and help you understand your rights and responsibilities.</p>
            <button className="cta-button" onClick={() => window.location.href = 'mailto:legal@foodorder.com'}>
              Contact Legal Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
