# 🛒 E-Commerce MERN Application - "Khareedle"

A full-featured e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a modern UI with Material-UI and Tailwind CSS.

## ✨ Features

### 🛍️ Customer Features

- **User Authentication**: Secure JWT-based registration and login
- **Product Browsing**: Browse products with advanced filtering and sorting options
- **Category Navigation**: Multi-level category navigation (Men's, Women's fashion, etc.)
- **Shopping Cart**: Add, update, and remove items from cart
- **Checkout Process**: Multi-step checkout with delivery address and order summary
- **Order Management**: View order history and track order status
- **Product Search**: Search functionality with filters by price, brand, size, color
- **Responsive Design**: Mobile-first responsive design

### 👨‍💼 Admin Features

- **Admin Dashboard**: Comprehensive dashboard with sales overview and statistics
- **Product Management**: CRUD operations for products with category management
- **Order Management**: View, update order status (pending, confirmed, shipped, delivered, cancelled)
- **Customer Management**: View customer information and order history
- **Inventory Tracking**: Monitor product stock and availability

## 🛠️ Tech Stack

### Frontend

- **React.js** 18.3.1 with hooks and functional components
- **Redux Toolkit** 2.5.1 for state management
- **React Router DOM** 7.1.2 for navigation
- **Material-UI (MUI)** 6.4.0 for UI components
- **Tailwind CSS** 3.4.17 for styling
- **Axios** 1.7.9 for API calls
- **React Alice Carousel** for product carousels
- **Vite** for build tooling

### Backend

- **Node.js** with Express.js 4.21.2
- **MongoDB** with Mongoose 8.9.5 ODM
- **JWT** 9.0.2 for authentication
- **Bcrypt** 5.1.1 for password hashing
- **CORS** 2.8.5 for cross-origin requests
- **Dotenv** 16.4.7 for environment variables

## 📁 Project Structure

```
E-Commerce in MERN/
├── Backend/
│   ├── src/
│   │   ├── config/          # Database and JWT configuration
│   │   ├── controller/      # Route controllers
│   │   ├── middleware/      # Authentication middleware
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── index.js         # Express app setup
│   │   └── server.js        # Server startup
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── admin/           # Admin panel components
│   │   ├── customer/        # Customer-facing components
│   │   ├── state/           # Redux store and slices
│   │   ├── Routes/          # Route configurations
│   │   ├── Data/            # Static data
│   │   └── config/          # API configuration
│   └── package.json
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js (>= 14.x)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Clone Repository

```bash
git clone https://github.com/ARehman047/mern-ecommerce-mui.git
cd "E-Commerce in MERN"
```

### Backend Setup

1. Navigate to backend directory:

```bash
cd Backend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file in Backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
PORT=5454
```

4. Start the backend server:

```bash
# Development mode
npm run dev

# Production mode
npm start
```

Backend will run on `http://localhost:5454`

### Frontend Setup

1. Navigate to frontend directory:

```bash
cd Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React development server:

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## 📱 Usage

### Customer Access

- Visit `http://localhost:5173` for the main shopping interface
- Register/Login to access cart and checkout features
- Browse products by categories or use search functionality
- Add items to cart and proceed with checkout

### Admin Access

- Visit `http://localhost:5173/admin` for the admin panel
- Manage products, orders, and customers
- View dashboard analytics

## 🔐 API Endpoints

### Authentication

- `POST /auth/signup` - User registration
- `POST /auth/signin` - User login

### Products

- `GET /api/products` - Get all products with filters
- `GET /api/products/id/:id` - Get product by ID
- `POST /api/admin/products` - Create product (Admin)
- `PUT /api/admin/products/:id` - Update product (Admin)
- `DELETE /api/admin/products/:id` - Delete product (Admin)

### Cart

- `GET /api/cart` - Get user's cart
- `PUT /api/cart/add` - Add item to cart
- `PUT /api/cart_items/:id` - Update cart item
- `DELETE /api/cart_items/:id` - Remove cart item

### Orders

- `POST /api/orders` - Create new order
- `GET /api/orders/user` - Get user's order history
- `GET /api/orders/:id` - Get order by ID
- `GET /api/admin/orders` - Get all orders (Admin)
- `PUT /api/admin/orders/:id/confirmed` - Update order status (Admin)

## 🎨 Key Features Implementation

### State Management

- Redux Toolkit for efficient state management
- Separate slices for Auth, Products, Cart, Orders, and Admin
- Async thunks for API calls

### Authentication

- JWT-based authentication
- Protected routes for admin and user areas
- Secure password hashing with bcrypt

### Database Models

- User, Product, Cart, CartItem, Order, OrderItem, Address models
- Proper relationships and validations

### UI/UX

- Material-UI components for consistent design
- Tailwind CSS for custom styling
- Responsive design for all devices
- Loading states and error handling

## 🐛 Common Issues & Solutions

1. **MongoDB Connection Error**:

   - Ensure MongoDB is running locally or check Atlas connection string
   - Verify database URL in environment variables

2. **CORS Issues**:

   - Backend includes CORS middleware
   - Ensure frontend and backend URLs are properly configured

3. **JWT Token Issues**:
   - Check JWT secret in environment variables
   - Verify token storage in localStorage

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

For support and queries, please create an issue in the repository.

---

Built with ❤️ using MERN Stack
