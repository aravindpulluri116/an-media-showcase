import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AN</span>
              </div>
              <h3 className="text-xl font-bold">AN Media</h3>
            </Link>
            <p className="text-gray-400 mb-4">
              Professional video production and design company creating compelling visual stories for brands worldwide.
            </p>
            <div className="text-center mt-8">
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Contact Now</Link>
          </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Logo Design</span></li>
              <li><span className="text-gray-400">Posters & Flyers</span></li>
              <li><span className="text-gray-400">Menu Design</span></li>
              <li><span className="text-gray-400">Reels & Promotional Videos</span></li>
              <li><span className="text-gray-400">YouTube Videos</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-white font-medium mb-1">Aravind Pulluri</p>
                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-1">
                  <Phone className="w-4 h-4" />
                  <span>8886113839</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-1">
                  <Mail className="w-4 h-4" />
                  <span>pulluriaravind@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Instagram className="w-4 h-4" />
                  <a href="https://www.instagram.com/techy.aravind/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    @techy.aravind
                  </a>
                </div>
              </div>
              
              <div className="pt-2">
                <p className="text-white font-medium mb-1">Nithin Alle</p>
                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-1">
                  <Phone className="w-4 h-4" />
                  <span>+91 8341235665</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-1">
                  <Mail className="w-4 h-4" />
                  <span>allenithin14@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Instagram className="w-4 h-4" />
                  <a href="https://www.instagram.com/edit.with.nithin/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    @edit.with.nithin
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
