import React from 'react';
import Navbar from './Navbar';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Hero section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Our Ecommerce Store</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">Discover the latest trends and best deals</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Shop Now</button>
        </div>

        {/* Featured products section */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Featured Products</h2>
          {/* Display featured products here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example product card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="product-image.jpg" alt="Product" className="w-full mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Name</h3>
              <p className="text-gray-700 mb-2">$99.99</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="product-image.jpg" alt="Product" className="w-full mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Name</h3>
              <p className="text-gray-700 mb-2">$99.99</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="product-image.jpg" alt="Product" className="w-full mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Name</h3>
              <p className="text-gray-700 mb-2">$99.99</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="product-image.jpg" alt="Product" className="w-full mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Name</h3>
              <p className="text-gray-700 mb-2">$99.99</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
            </div>
            
            {/* Repeat product cards for other featured products */}
          </div>
        </div>

        {/* Special offers section */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Special Offers</h2>
          {/* Display special offers here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example offer card */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">Offer Title</h3>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">View Offer</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">Offer Title</h3>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">View Offer</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">Offer Title</h3>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">View Offer</button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">Offer Title</h3>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">View Offer</button>
            </div>
            
            {/* Repeat offer cards for other special offers */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
