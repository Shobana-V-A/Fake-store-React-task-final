# Fake Store Cart App

Project Overview
This project was built to demonstrate proficiency in ReactJS, state management using Hooks, and client-side routing. It allows users to browse products, add/remove them from a cart, and manage quantities on a dedicated cart page.

Tech Stack
Library: ReactJS

Routing: React Router DOM

Styling: Tailwind CSS

API: Fake Store API (https://fakestoreapi.com/)

Deployment: Netlify

Features
Product Catalog: Fetches 20+ products with titles, images, prices, and descriptions.

Smart Cart Toggle: The "Add to Cart" button automatically changes to "Remove from Cart" if the item is already selected.

Dedicated Routing: Separate URLs for the Home page (/) and the Cart page (/cart).

Quantity Management: Users can increase or decrease item counts directly in the cart.

Automatic Discount: A 10% discount is calculated and applied to the subtotal automatically.

Responsive Design: Fully optimized for mobile, tablet, and desktop views using Tailwind's grid system.

Setup Instructions
Clone the repository to your local machine.

Install dependencies using npm install.

Start the development server with npm run dev.

To build for production, use npm run build.

Deployment
The app is deployed on Netlify. A _redirects file is included in the public folder to ensure that React Router handles page refreshes without 404 errors.

Project Structure
src/components: Contains reusable UI elements like the Navbar and ProductCard.

src/pages: Contains the main view components (ProductList and CartPage).

src/App.jsx: Manages the global state (products and cart) and handles all routing logic.
