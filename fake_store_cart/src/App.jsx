import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage"; // Ensure this matches your filename

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // 1. Fetch products from API on initial load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // 2. Add to Cart / Remove from Cart Toggle Logic
  const addToCart = (product) => {
    const isAlreadyInCart = cart.find((item) => item.id === product.id);

    if (isAlreadyInCart) {
      // If user clicks button while item is in cart, remove it (Requirement)
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      // Add new item with initial quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // 3. Remove specifically from the Cart Page
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 4. Increase/Decrease Quantity Logic (Requirement)
  const updateQuantity = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar is outside Routes so it stays visible on every page */}
        <Navbar cartCount={cart.length} />

        <Routes>
          {/* Main Product Page */}
          <Route
            path="/"
            element={
              <ProductList
                products={products}
                cart={cart}
                addToCart={addToCart}
              />
            }
          />

          {/* Dedicated Cart Page */}
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;