
import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AN</span>
            </div>
            <h1 className="text-2xl font-bold">AN Media</h1>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
