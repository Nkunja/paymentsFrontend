import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or brand */}
        <a href="/" className="text-white text-2xl font-bold">Ecommerce Store</a>

        {/* Hamburger menu for mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div className={`lg:flex flex-grow items-center justify-between lg:justify-end ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-white lg:flex-grow">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/" className="hover:text-gray-300">Shop</a></li>
            <li><a href="/" className="hover:text-gray-300">Offers</a></li>
            {/* Add more navigation links as needed */}
          </ul>

          {/* Search bar (displayed only in desktop view) */}
          <div className="hidden lg:block">
            <input type="text" placeholder="Search..." className="px-3 py-1 mr-4 rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
          </div>

          {/* User authentication or account-related links */}
          <div>
            <a href="/login" className="text-white hover:text-gray-300 mr-4">Login</a>
            <a href="/signup" className="text-white hover:text-gray-300">Sign Up</a>
            {/* You can replace the above links with user-specific links when the user is authenticated */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
