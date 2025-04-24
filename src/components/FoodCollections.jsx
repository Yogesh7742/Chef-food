// import { useState } from 'react';
// import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiStar, FiClock } from 'react-icons/fi';

// const FoodCollections = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   // Sample data
//   const categories = ['All', 'Vegetarian', 'Non-Veg', 'Desserts', 'Beverages', 'Snacks'];
  
//   const collections = [
//     {
//       id: 1,
//       name: 'Summer Specials',
//       image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
//       items: 24,
//       time: '20-30 min',
//       rating: 4.5,
//       category: 'Vegetarian'
//     },
//     {
//       id: 2,
//       name: 'BBQ Grill Master',
//       image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
//       items: 18,
//       time: '30-45 min',
//       rating: 4.8,
//       category: 'Non-Veg'
//     },
//     {
//       id: 3,
//       name: 'Sweet Tooth',
//       image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
//       items: 12,
//       time: '15-25 min',
//       rating: 4.7,
//       category: 'Desserts'
//     },
//     {
//       id: 4,
//       name: 'Cool Refreshments',
//       image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
//       items: 15,
//       time: '5-10 min',
//       rating: 4.3,
//       category: 'Beverages'
//     },
//     {
//       id: 5,
//       name: 'Quick Bites',
//       image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f',
//       items: 20,
//       time: '10-15 min',
//       rating: 4.2,
//       category: 'Snacks'
//     },
//     {
//       id: 6,
//       name: 'Healthy Bowls',
//       image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
//       items: 16,
//       time: '15-20 min',
//       rating: 4.6,
//       category: 'Vegetarian'
//     },
//   ];

//   const filteredCollections = collections.filter(collection => {
//     const matchesCategory = activeCategory === 'All' || collection.category === activeCategory;
//     const matchesSearch = collection.name.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-orange-600">FoodWeb</h1>
//           <div className="flex items-center space-x-4">
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <FiHeart className="text-gray-600" />
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <FiShoppingCart className="text-gray-600" />
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100">
//               <FiUser className="text-gray-600" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-12">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Discover Amazing Food Collections</h2>
//           <p className="text-xl mb-8">Browse through our curated selections for every occasion</p>
          
//           {/* Search Bar */}
//           <div className="max-w-md mx-auto relative">
//             <input
//               type="text"
//               placeholder="Search collections..."
//               className="w-full py-3 px-4 pr-10 rounded-full text-gray-800 focus:outline-none"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <FiSearch className="absolute right-3 top-3.5 text-gray-500" />
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         {/* Categories */}
//         <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
//           <div className="flex space-x-2">
//             {categories.map(category => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Collections Grid */}
//         {filteredCollections.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredCollections.map(collection => (
//               <div key={collection.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                 <div className="relative">
//                   <img 
//                     src={collection.image} 
//                     alt={collection.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow">
//                     <FiHeart className="text-gray-600 hover:text-orange-500 cursor-pointer" />
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-lg font-semibold">{collection.name}</h3>
//                     <div className="flex items-center bg-orange-100 text-orange-600 px-2 py-1 rounded">
//                       <FiStar className="mr-1" />
//                       <span>{collection.rating}</span>
//                     </div>
//                   </div>
//                   <div className="flex justify-between text-sm text-gray-500 mb-3">
//                     <span>{collection.items} items</span>
//                     <span className="flex items-center">
//                       <FiClock className="mr-1" />
//                       {collection.time}
//                     </span>
//                   </div>
//                   <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors duration-300">
//                     View Collection
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <h3 className="text-xl font-medium text-gray-600">No collections found</h3>
//             <p className="text-gray-500">Try a different search or category</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default FoodCollections;



import { useState, useEffect } from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiStar, FiClock } from 'react-icons/fi';

const FoodCollections = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Dessert', 'Vegetarian', 'Non-Veg', 'Seafood', 'Misc'];

  // ✅ useEffect for API Call
  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        // API से data लेकर अपने format में map करें
        const formatted = data.recipes.map((item, index) => ({
          id: item.id,
          name: item.name,
          image: item.image,
          items: item.ingredients.length,
          time: `${item.cookTimeMinutes} min`,
          rating: item.rating,
          category: item.mealType?.[0] || 'Misc'
        }));
        setCollections(formatted);
        setLoading(false);
      });
  }, []);

  const filteredCollections = collections.filter(collection => {
    const matchesCategory = activeCategory === 'All' || collection.category === activeCategory;
    const matchesSearch = collection.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-12">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Discover Amazing Food Collections</h2>
          <p className="text-xl mb-8">Browse through our curated selections for every occasion</p>
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search collections..."
              className="w-full py-3 px-4 pr-10 rounded-full text-gray-800 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-3.5 text-gray-500" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Grid */}
        {loading ? (
          <div className="text-center text-lg text-gray-500">Loading recipes...</div>
        ) : filteredCollections.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCollections.map(collection => (
              <div key={collection.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img src={collection.image} alt={collection.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow">
                    <FiHeart className="text-gray-600 hover:text-orange-500 cursor-pointer" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{collection.name}</h3>
                    <div className="flex items-center bg-orange-100 text-orange-600 px-2 py-1 rounded">
                      <FiStar className="mr-1" />
                      <span>{collection.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>{collection.items} items</span>
                    <span className="flex items-center">
                      <FiClock className="mr-1" />
                      {collection.time}
                    </span>
                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors duration-300">
                    View Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">No collections found</h3>
            <p className="text-gray-500">Try a different search or category</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default FoodCollections;
