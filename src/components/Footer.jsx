
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy font-bold text-xl">SOF</span>
              </div>
              <div>
                <span className="text-xl font-bold font-display">The School of Freedom</span>
                <p className="text-sm text-gray-300">Education is Her Freedom</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Afghan girls and refugee youth through education, mentorship, and leadership development.
            </p>
            <div className="quote-card bg-gold text-navy p-4 rounded-lg">
              <p className="font-medium italic">"When you educate a girl, you change the world."</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-gold transition-colors">Programs</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-gold transition-colors">Our Team</Link></li>
              <li><Link to="/press" className="text-gray-300 hover:text-gold transition-colors">Press & Media</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Get Involved</span>
            <ul className="space-y-2">
              <li><Link to="/donate" className="text-gray-300 hover:text-gold transition-colors">Donate Now</Link></li>
              <li><Link to="/petition" className="text-gray-300 hover:text-gold transition-colors">Sign Petition</Link></li>
              <li><a href="#newsletter" className="text-gray-300 hover:text-gold transition-colors">Newsletter</a></li>
              <li><a href="#volunteer" className="text-gray-300 hover:text-gold transition-colors">Volunteer</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail size={16} className="text-gold" />
              <span className="text-gray-300">admin@schooloffreedom.org</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Phone size={16} className="text-gold" />
              <span className="text-gray-300">+1 (916) 844-5480</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <MapPin size={16} className="text-gold" />
              <span className="text-gray-300">Sacramento, CA</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center space-y-2">
  <p className="text-gray-300 flex items-center justify-center space-x-2">
    <span>© 2025 The School of Freedom. Made with</span>
    <Heart size={16} className="text-gold" />
    <span>for education and freedom.</span>
  </p>
  <p className="text-sm text-gray-400">
    Website designed and built by <span className="font-semibold text-gold">Masoud Mahmoodi</span>
  </p>
</div>


      </div>
    </footer>
  );
};

export default Footer;
