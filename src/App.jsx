import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="app-container">
      {!showCart ? (
        <ProductList onShowCart={() => setShowCart(true)} />
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default App;
