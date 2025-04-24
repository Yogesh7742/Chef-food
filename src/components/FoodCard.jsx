// components/FoodCard.js
import React from 'react';

function FoodCard({ item, addToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
      <p className="text-gray-600">₹ {item.price}</p>
      <button
        className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white py-1 px-3 rounded"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;
