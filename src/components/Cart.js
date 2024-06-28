// src/components/Cart.js
import React from 'react';


const Cart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <svg 
          className="w-16 h-16 text-gray-500 mx-auto mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M3 3h2l1 10h13l1-10h2M16 21a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4zm2-10h8"
          />
        </svg>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-4">You have no items in your cart. Start adding some delicious food!</p>
        <button 
          onClick={() => window.location.href='/'} 
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        >
         See Restaurant
        </button>
      </div>
    </div>
  );
};

export default Cart;
