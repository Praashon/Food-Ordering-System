# 🍔 Food Ordering System - Full Stack Web Application

<div align="center">

![React](https://img.shields.io/badge/React-18.3-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen.svg)
![Stripe](https://img.shields.io/badge/Stripe-Payment-purple.svg)
![Vite](https://img.shields.io/badge/Vite-Build-yellow.svg)

*A complete food ordering platform with customer, admin, and restaurant management*

[Demo](#) | [Documentation](#) | [Report Bug](#)

</div>

## 📋 Overview

A modern, full-featured food ordering system built with the MERN stack (MongoDB, Express, React, Node.js). This application provides a complete solution for online food ordering, including customer-facing storefront, restaurant menu management, order processing, and administrative controls.

## ✨ Key Features

### Customer Features
- 🛒 **Browse Menu** - Explore food items with images, descriptions, and prices
- 🔐 **User Authentication** - Secure registration and login with JWT
- 🛍️ **Shopping Cart** - Add, remove, and manage cart items
- 💳 **Stripe Payment** - Secure payment processing with Stripe integration
- 📦 **Order Tracking** - View order history and current order status
- ⭐ **Reviews & Ratings** - Leave feedback on food items
- 👤 **User Profile** - Manage personal information and preferences

### Admin Features
- 📊 **Dashboard** - Overview of orders, revenue, and statistics
- 🍕 **Menu Management** - Add, edit, and delete food items
- 📸 **Image Upload** - Upload and manage food images
- 👥 **User Management** - View and manage registered users
- 🎫 **Order Management** - Process and update order statuses
- 📈 **Analytics** - Track sales and popular items

### Restaurant Features
- 📋 **Order Processing** - Real-time order notifications
- ✅ **Status Updates** - Update order preparation and delivery status
- 🔔 **Notifications** - Alert system for new orders

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Additional Technologies
- **JWT** - Authentication and authorization
- **bcrypt** - Password hashing
- **Multer** - File upload handling
- **Stripe** - Payment processing
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn
- Stripe account for payments

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/food-ordering-project.git
cd Food-Ordering-Project
```

2. **Backend Setup**
```bash
cd backend
npm install

# Create .env file
cat > .env << EOF
PORT=4001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
EOF

# Start backend server
npm run server
```

3. **Frontend Setup**
```bash
cd ../frontend
npm install

# Start frontend dev server
npm run dev
```

4. **Admin Panel Setup**
```bash
cd ../admin
npm install

# Start admin panel
npm run dev
```

## 🎯 Usage

### Customer Application

1. **Browse Menu**
   - Navigate to `http://localhost:5173`
   - View available food items and categories

2. **Place Order**
   - Register/Login to your account
   - Add items to cart
   - Proceed to checkout
   - Complete payment with Stripe

3. **Track Orders**
   - View order history in your profile
   - Check order status in real-time

### Admin Panel

1. **Access Admin**
   - Navigate to `http://localhost:5174`
   - Login with admin credentials

2. **Manage Menu**
   - Add new food items with images
   - Edit existing items
   - Remove discontinued items

3. **Process Orders**
   - View incoming orders
   - Update order status
   - Manage deliveries

## 📁 Project Structure

```
Food-Ordering-Project/
├── frontend/              # Customer-facing React app
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── assets/       # Images and static files
│   │   └── App.jsx       # Main app component
│   ├── public/           # Public assets
│   └── package.json
│
├── admin/                # Admin panel React app
│   ├── src/
│   │   ├── components/   # Admin UI components
│   │   ├── pages/       # Admin page components
│   │   └── App.jsx
│   └── package.json
│
├── backend/              # Node.js/Express server
│   ├── config/          # Configuration files
│   │   └── db.js        # Database connection
│   ├── controllers/     # Request handlers
│   │   ├── foodController.js
│   │   ├── userController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   └── reviewController.js
│   ├── models/          # Mongoose schemas
│   │   ├── foodModel.js
│   │   ├── userModel.js
│   │   ├── orderModel.js
│   │   └── reviewModel.js
│   ├── routes/          # API routes
│   │   ├── foodRoute.js
│   │   ├── userRoute.js
│   │   ├── cartRoute.js
│   │   ├── orderRoute.js
│   │   └── reviewRoute.js
│   ├── middleware/      # Custom middleware
│   │   └── auth.js
│   ├── uploads/         # Uploaded images
│   └── server.js        # Entry point
│
└── Figma Design/        # UI/UX design files
    └── Food Ordering System FrontEnd.fig
```

## 🔑 API Endpoints

### Food Routes
```
GET    /api/food          - Get all food items
POST   /api/food          - Add new food item (admin)
PUT    /api/food/:id      - Update food item (admin)
DELETE /api/food/:id      - Delete food item (admin)
```

### User Routes
```
POST   /api/user/register - Register new user
POST   /api/user/login    - Login user
GET    /api/user/profile  - Get user profile (auth)
PUT    /api/user/profile  - Update user profile (auth)
```

### Cart Routes
```
GET    /api/cart          - Get user cart (auth)
POST   /api/cart/add      - Add item to cart (auth)
PUT    /api/cart/update   - Update cart item (auth)
DELETE /api/cart/remove   - Remove from cart (auth)
```

### Order Routes
```
GET    /api/order         - Get user orders (auth)
POST   /api/order         - Create new order (auth)
GET    /api/order/:id     - Get order details (auth)
PUT    /api/order/:id     - Update order status (admin)
```

### Review Routes
```
GET    /api/review/:foodId - Get reviews for food item
POST   /api/review        - Add review (auth)
PUT    /api/review/:id    - Update review (auth)
DELETE /api/review/:id    - Delete review (auth)
```

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. User registers/logs in
2. Server generates JWT token
3. Token stored in client
4. Token sent with each authenticated request
5. Server verifies token in middleware

## 💳 Payment Integration

Stripe payment flow:

1. User proceeds to checkout
2. Frontend creates payment intent
3. Stripe processes payment
4. Backend confirms payment
5. Order created upon success

## 🎨 Design

The Figma design file includes:
- Complete UI/UX mockups
- Color schemes and typography
- Component designs
- User flow diagrams

## 🚀 Deployment

### Backend Deployment (Heroku/Railway)

```bash
# Install Heroku CLI
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your_uri
heroku config:set JWT_SECRET=your_secret
heroku config:set STRIPE_SECRET_KEY=your_key

# Deploy
git push heroku main
```

### Frontend Deployment (Vercel/Netlify)

```bash
# Build frontend
cd frontend
npm run build

# Deploy to Vercel
vercel --prod

# Or Netlify
netlify deploy --prod --dir=dist
```

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Prashon**

## 🙏 Acknowledgments

- React community for excellent documentation
- Stripe for payment processing
- MongoDB for database solutions
- Vite for lightning-fast builds

## 📞 Support

For support, email your-email@example.com or open an issue on GitHub.

## 🔮 Future Enhancements

- [ ] Real-time order tracking with WebSockets
- [ ] Push notifications for order updates
- [ ] Multi-restaurant support
- [ ] Advanced search and filters
- [ ] Loyalty points system
- [ ] Delivery partner integration
- [ ] Multi-language support
- [ ] Mobile app (React Native)

---

<div align="center">

**Built with ❤️ by Prashon**

*Hungry? Order now!* 🍕

</div>
