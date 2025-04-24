import React, { useEffect, useState } from "react";
import { FiClock, FiHeart, FiStar } from "react-icons/fi";

const Menu = ({ addToCart }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) throw new Error("Failed to fetch recipes");
        const data = await response.json();
        setFoodItems(data.recipes); // 'recipes' key contains the actual list
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen py-10 px-4 max-w-[1400px] m-auto">
      <h2 className="text-3xl font-bold mb-10">All Recipe</h2>

      {loading ? (
        <div
          aria-label="Loading..."
          role="status"
          className="flex justify-center items-center h-[60vh]"
        >
          <svg
            className="h-12 w-12 animate-spin stroke-gray-500"
            viewBox="0 0 256 256"
          >
            <line
              x1={128}
              y1={32}
              x2={128}
              y2={64}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1={224}
              y1={128}
              x2={192}
              y2={128}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1={128}
              y1={224}
              x2={128}
              y2={192}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1={32}
              y1={128}
              x2={64}
              y2={128}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            ></line>
          </svg>
        </div>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="bg-white  shadow-md overflow-hidden hover:shadow-xl transform hover:scale-100 transition duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
                <div className="absolute top-2 right-2 bg-white hover:bg-yellow-500 rounded-full p-2 shadow">
                  <FiHeart className="text-gray-600 hover:text-white cursor-pointer" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="flex items-center text-white bg-yellow-400 px-2 py-1 rounded">
                    <FiStar className="mr-1" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>{item.servings} items</span>
                    <span className="flex items-center">
                      <FiClock className="mr-1"/>
                      {item.prepTimeMinutes} to {item.cookTimeMinutes} min
                    </span>
                  </div>
                <p className="text-gray-600">
                  <span className="text-red-600 font-bold">₹ : </span> 
                  <span className="font-bold text-green-500">{item.caloriesPerServing}</span>
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="relative overflow-hidden mt-4 text-[#f8b400] px-4 py-2 border border-[#f8b400] group rounded-xl"
                >
                  <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:text-white text-[#f8b400]">
                    Add to Cart
                  </span>
                  <span className="absolute top-0 left-0 h-full w-0 bg-[#f8b400] transition-all duration-300 ease-in-out group-hover:w-full z-0"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
