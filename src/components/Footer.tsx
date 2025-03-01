import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 mr-2" />
              <span className="nav-title text-xl">Legal Ease</span>
            </div>
            <p className="text-gray-300 text-sm">
              Making legal information accessible to everyone through AI-powered assistance.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/chatbot" className="text-gray-300 hover:text-white">Chatbot</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white">Resources</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Topics</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Family Law</span></li>
              <li><span className="text-gray-300">Housing Rights</span></li>
              <li><span className="text-gray-300">Employment Law</span></li>
              <li><span className="text-gray-300">Consumer Protection</span></li>
              <li><span className="text-gray-300">Immigration</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:kaushikdakshi24@gmail.com" className="text-gray-300 hover:text-white">
                  kaushikdakshi24@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-gray-300">(302) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span className="text-gray-300">Smith Hall, 18 Amstel Ave, Newark DE 19716</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Legal Ease. All rights reserved.</p>
          <p className="mt-2">Disclaimer: Information provided by this chatbot is not legal advice and does not create an attorney-client relationship.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
