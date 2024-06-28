
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Eatsy. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/about" className="hover:text-orange-500">About Us</a>
          <a href="/contact" className="hover:text-orange-500">Contact</a>
          <a href="/privacy" className="hover:text-orange-500">Privacy Policy</a>
          <a href="/terms" className="hover:text-orange-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
