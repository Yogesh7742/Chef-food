import React from 'react';

const BestRestaurant = () => {
  // Array of 12 popular Jaipur restaurants
  const restaurants = [
    "Chinese Restaurant Near Me",
    "South Indian Restaurant Near Me",
    "Indian Restaurant Near Me",
    "Kerala Restaurant Near Me",
    "Korean Restaurant Near Me",
    "North Indian Restaurant Near Me",
    "Seafood Restaurant Near Me",
    "Bengali Restaurant Near Me",
    " Punjabi Restaurant Near Me",
    "Italian Restaurant Near Me",
    "Andhra Restaurant Near Me",
    "Biryani Restaurant Near Me"
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Top 12 Restaurants in Jaipur</h1>
      
      {/* Grid container - 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {restaurants.map((restaurant, index) => (
          <div 
            key={index}
            className="p-4 border-2 border-gray-200 rounded-lg text-center hover:bg-gray-50 transition-colors"
          >
            <p className="font-medium text-gray-700">{restaurant}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestRestaurant;