import React, { useState, useEffect } from 'react';

const FoodSlider = () => {
  const foodItems = [
    { image: '/images/Biryani_2.jpeg' },
    { image: '/images/Burger.jpeg' },
    { image: '/images/Cakes.jpeg' },
    { image: '/images/Poori.jpeg' },
    { image: '/images/Salad.jpeg' },
    { image: '/images/Dosa.jpeg' },
    { image: '/images/Chinese.jpeg' },
    { image: '/images/Pizza.jpeg' },
    { image: '/images/Noodles.jpeg' },
    { image: '/images/Paratha.jpeg' },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 2 : 5);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide (right to left)
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev =>
        (prev - 1 + (foodItems.length - visibleCards + 1)) % (foodItems.length - visibleCards + 1)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [foodItems.length, visibleCards]);

  // Get visible items
  const getVisibleItems = () => {
    let endIndex = startIndex + visibleCards;
    if (endIndex > foodItems.length) {
      return [
        ...foodItems.slice(startIndex),
        ...foodItems.slice(0, endIndex % foodItems.length)
      ];
    }
    return foodItems.slice(startIndex, endIndex);
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Slider Container */}
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center">
          {visibleItems.map((item, index) => (
            <div
              key={`${item.image}-${index}`}
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transition-transform h-40"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/500/cccccc/ffffff?text=Food";
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setStartIndex(prev =>
              (prev + 1) % (foodItems.length - visibleCards + 1)
            )
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() =>
            setStartIndex(prev =>
              (prev - 1 + (foodItems.length - visibleCards + 1)) % (foodItems.length - visibleCards + 1)
            )
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: foodItems.length - visibleCards + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setStartIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === startIndex ? 'bg-rose-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodSlider;
