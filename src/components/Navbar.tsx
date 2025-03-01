import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-maroon-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Scale className="h-8 w-8 mr-2" />
              <span className="nav-title text-2xl">Legal Ease</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-maroon-700 ${
                isActive('/') ? 'bg-maroon-700 font-semibold border-b-2 border-white' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/chatbot" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-maroon-700 ${
                isActive('/chatbot') ? 'bg-maroon-700 font-semibold border-b-2 border-white' : ''
              }`}
            >
              Chatbot
            </Link>
            <Link 
              to="/resources" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-maroon-700 ${
                isActive('/resources') ? 'bg-maroon-700 font-semibold border-b-2 border-white' : ''
              }`}
            >
              Resources
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-maroon-700 ${
                isActive('/about') ? 'bg-maroon-700 font-semibold border-b-2 border-white' : ''
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-maroon-700 ${
                isActive('/contact') ? 'bg-maroon-700 font-semibold border-b-2 border-white' : ''
              }`}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-maroon-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-maroon-700 ${
                isActive('/') ? 'bg-maroon-700 font-semibold border-l-4 border-white' : ''
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/chatbot" 
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-maroon-700 ${
                isActive('/chatbot') ? 'bg-maroon-700 font-semibold border-l-4 border-white' : ''
              }`}
              onClick={toggleMenu}
            >
              Chatbot
            </Link>
            <Link 
              to="/resources" 
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-maroon-700 ${
                isActive('/resources') ? 'bg-maroon-700 font-semibold border-l-4 border-white' : ''
              }`}
              onClick={toggleMenu}
            >
              Resources
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-maroon-700 ${
                isActive('/about') ? 'bg-maroon-700 font-semibold border-l-4 border-white' : ''
              }`}
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-maroon-700 ${
                isActive('/contact') ? 'bg-maroon-700 font-semibold border-l-4 border-white' : ''
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;