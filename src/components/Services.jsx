import React from "react";

const Services = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-gray-700 uppercase text-yellow-500 tracking-wider">
            OUR STORY & SERVICES
          </h2>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Our Culinary Journey And Services
          </h1>
          <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Embark on a flavorful journey with MRKing. Our menu blends authentic Sri Lankan tastes with modern delights. Enjoy the convenience of seamless service, making every bite a delight. Welcome to a world where taste meets efficiency!
          </p>
        </div>

        {/* Services Grid - Exactly like the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Catering */}
          <div className="flex items-start">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Catering</h3>
              <p className="mt-2 text-gray-600">Delight your guests with our flavors and presentation</p>
            </div>
          </div>

          {/* Fast Delivery */}
          <div className="flex items-start">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Fast delivery</h3>
              <p className="mt-2 text-gray-600">We deliver your order promptly to your door</p>
            </div>
          </div>

          {/* Online Ordering */}
          <div className="flex items-start">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Online Ordering</h3>
              <p className="mt-2 text-gray-600">Explore menu & order with ease using our Online Ordering</p>
            </div>
          </div>

          {/* Gift Cards */}
          <div className="flex items-start">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4H5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Gift Cards</h3>
              <p className="mt-2 text-gray-600">Give the gift of exceptional dining with Food! Gift Cards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;