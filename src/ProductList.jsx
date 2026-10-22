import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
  {
    category: "Aromatic Plants",
    plants: [
      { name: "Lavender", image: "https://via.placeholder.com/150", description: "Calming scent", cost: "$15" },
      { name: "Jasmine", image: "https://via.placeholder.com/150", description: "Sweet aroma", cost: "$12" }
    ]
  },
  {
    category: "Medicinal Plants",
    plants: [
      { name: "Aloe Vera", image: "https://via.placeholder.com/150", description: "Soothing gel", cost: "$10" },
      { name: "Mint", image: "https://via.placeholder.com/150", description: "Refreshing taste", cost: "$8" }
    ]
  }
];

function ProductList({ onShowCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <div className="navbar">
        <h2>Paradise Nursery</h2>
        <button onClick={onShowCart}>Cart ({totalQuantity})</button>
      </div>
      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h3>{category.category}</h3>
            {category.plants.map((plant, pIndex) => {
              const isAdded = cartItems.some(item => item.name === plant.name);
              return (
                <div key={pIndex} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>{plant.description}</p>
                  <p>{plant.cost}</p>
                  <button onClick={() => handleAddToCart(plant)} disabled={isAdded}>
                    {isAdded ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
