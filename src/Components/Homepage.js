import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/products', {
        method: 'GET',
        headers: {
          'Origin': 'http://localhost:3000' // Update with your frontend URL
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Display products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={product.image} alt={product.name} className="w-full mb-4" />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-gray-700 mb-2">${product.price}</p>
              {/* Add to cart button */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
