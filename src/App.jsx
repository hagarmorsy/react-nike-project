import React from "react";
import "./App.css";

function App() {
  return (
    <div className="px-8 py-4 font-sans">
      <nav className="flex justify-between items-center mb-10">
        <h2 className="text-red-500 font-bold text-xl">Nike</h2>
        <ul className="flex space-x-6 text-gray-700">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">About Us</li>
          <li className="hover:text-red-500 cursor-pointer">Products</li>
          <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
        </ul>
      </nav>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-md">
          <p className="text-sm text-red-500 mb-2">Our Summer Collections</p>
          <h1 className="text-4xl font-bold leading-snug mb-4">
            The New Arrival <span className="text-red-500">Nike</span> Shoes
          </h1>
          <p className="text-gray-600 mb-6">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <button className="bg-red-500 text-red px-6 py-2 rounded-full hover:bg-red-600 transition">
            Shop Now
          </button>

          <div className="flex space-x-8 mt-8">
            <div>
              <h3 className="text-xl font-bold">1k+</h3>
              <p className="text-gray-600 text-sm">Brands</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">500+</h3>
              <p className="text-gray-600 text-sm">Shops</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">250k+</h3>
              <p className="text-gray-600 text-sm">Customers</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 md:mt-0 text-center">
          <img
            src="./nike_3.jpg"
            alt="shoe3"
            className="w-72 mx-auto rounded-lg "
          />
          <div className="flex justify-center space-x-4 mt-4">
            <img
              src="./nike_3.jpg"
              alt="shoe3"
              className="w-16 rounded-lg border-2 border-transparent hover:border-red-500 cursor-pointer"
            />
            <img
              src="./nike_2.jpg"
              alt="shoe2"
              className="w-16 rounded-lg border-2 border-transparent hover:border-red-500 cursor-pointer"
            />
            <img
              src="./nike_1.jpg"
              alt="shoe1"
              className="w-16 rounded-lg border-2 border-transparent hover:border-red-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;