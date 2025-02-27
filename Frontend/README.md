# E-Commerce MERN App

## Overview
This is a full-stack e-commerce web application built using the **MERN** stack (MongoDB, Express, React, Node.js). The frontend uses **MUI components** and **Tailwind CSS** for styling. State management is handled with **@reduxjs/toolkit** along with **react-redux** and **redux-thunk** as middleware. The backend includes authentication and security features using **bcrypt**, **cors**, **dotenv**, and **jsonwebtoken**.

## Features
- User authentication & authorization (JWT-based)
- Admin panel accessible via `/admin`
- Product listing, and filtering
- Shopping cart and checkout process
- Order management
- Secure password encryption

## Tech Stack

### Frontend
- **React.js** (with Hooks)
- **Redux Toolkit** for state management
- **React-Redux** for connecting state
- **Redux Thunk** as middleware
- **MUI (Material UI) Components** for UI
- **Tailwind CSS** for styling

### Backend
- **Node.js** with Express.js
- **MongoDB** (with Mongoose ORM)
- **JWT (JSON Web Token)** for authentication
- **Bcrypt** for password hashing
- **Cors** for handling cross-origin requests
- **Dotenv** for environment variables

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js** (>= 14.x)
- **MongoDB** (local or cloud instance)

### Clone the Repository
```sh
git clone https://github.com/ARehman047/mern-ecommerce-mui
```

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm start
   ```

## Usage
- Open `http://localhost:5173` in your browser.
- Navigate to `/admin` for the admin panel.


