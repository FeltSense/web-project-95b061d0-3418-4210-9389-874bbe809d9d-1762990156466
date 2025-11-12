'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-white">Elite Properties</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in finding the perfect property. We turn your real estate dreams into reality.
            </p>
            <div className="flex gap-3 pt-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Property Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Investment Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  Legal Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-blue-400" />
                <span>123 Real Estate Ave, Suite 100, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-blue-400" />
                <span>info@eliteproperties.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Elite Properties. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}