

## 🏁 Setup & Installation

### ✅ Prerequisites
Ensure you have installed:

- Node.js (v16+ recommended)
- npm (comes with Node)

---

### ▶️ Steps to Run Project

1️ Clone the repository
```bash
https://github.com/Praveenkrishna-21/Ecom_Frontened_.git
2
cd vite-project
3
npm install
4
npm run dev

# 🛍️ Simple E-Commerce Dashboard

A simple React-based e-commerce web application that allows users to browse products, view product details, add items to a cart, and simulate a checkout process.  
This project uses mocked product data without a backend — suitable for learning frontend concepts.

---

## 🚀 Features

✅ Product listing with images, name & price  
✅ Search products by Category  
✅ Product detail page with full info  
✅ Add to Cart functionality  
✅ Update quantity / Remove items  
✅ Cart total calculation  
✅ Mock checkout action  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, React Router |
| Styling | CSS |
| Data Handling | useState + Local Component State |

---
## 📁 Project Structure

vite-project/
│
├── public/                      # Static public assets
│
├── src/
│   ├── assets/                  # Images, icons and static media
│   │
│   ├── components/              # Reusable UI components
│   │   ├── Addbutton.jsx
│   │   ├── Addbutton.css
│   │   ├── CartItems.jsx
│   │   ├── CartItems.css
│   │   ├── Checkout.jsx
│   │   ├── Checkout.css
│   │   ├── CheckoutResponse.jsx
│   │   ├── Context.js           # React Context for global state (Cart)
│   │   ├── Dropdown.jsx
│   │   ├── Dropdown.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── ProductCard.jsx
│   │   ├── ProductCard.css
│   │   ├── ProductDetails.jsx
│   │   ├── ProductDetails.css
│   │   ├── ProductList.jsx
│   │   ├── Quantity.jsx
│   │   ├── Quantity.css
│   │   ├── SearchBar.jsx
│   │   ├── SearchCategory.jsx
│   │   ├── SearchCategory.css
│   │
│   ├── App.jsx                  # Main application component
│   ├── App.css
│   ├── index.css
│   ├── main.jsx                 # Application entry file
│
├── package.json                 # Project dependencies and scripts
├── package-lock.json
├── eslint.config.js
├── index.html                   # Main HTML template
└── .gitignore

public/
Contains static files like icons and the main HTML template that Vite uses during the build process.

src/
Main source code folder where all project logic, pages, components, and styles exist.

assets/
Stores images and static media used across the application.

components/
Contains all reusable UI components such as:

Product-related components (ProductList, ProductCard, ProductDetails)

Cart-related components (CartItems, Quantity adjustment buttons)

Search and Filter components (SearchBar, Dropdown, SearchCategory)

Navigation and Layout (Header, Home)

Checkout components (Checkout, CheckoutResponse)

Each component has a separate .jsx (logic) and .css (styling) file to keep structure organized.

Context.js
Implements React Context API to manage global cart state across the app.

App.jsx
Root UI component that defines page structure and routes.

main.jsx
Application entry point that mounts the React app into the DOM.

package.json
Lists project dependencies and development scripts.

eslint.config.js
Defines code linting rules for consistent coding standards.

index.html
Base HTML file used by Vite to serve the application.

