// src/components/Offline.js
import React from 'react';

const Offline = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <svg 
          className="w-16 h-16 text-red-500 mx-auto mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9.75 3L8 7H5a2 2 0 00-2 2v6a2 2 0 002 2h2.5l2 4h1.25l1-2h6.5l1 2H21l2-4h-2.5a2 2 0 002-2v-6a2 2 0 00-2-2h-2.5l-2-4h-1.25l-1 2H9.75l-1-2H7.5l1-2h1.25l1 2z"
          />
        </svg>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">No Internet Connection</h2>
        <p className="text-gray-600 mb-4">It looks like you're not connected to the internet. Please check your connection and try again.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Offline;
