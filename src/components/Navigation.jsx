import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Team', path: '/team' },
    { name: 'Updates', path: '/updates' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="School of Freedom Logo"
              className="w-12 h-12 object-cover rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-navy font-display">The School of Freedom</h1>
              <p className="text-sm text-gray-600">Education is Her Freedom</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-navy hover:text-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex space-x-4">
              <a
                href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-8491"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2"
              >
                Donate
              </a>
              <a
                href="https://form.jotform.com/251385758940064"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Sign Petition
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block font-medium transition-colors duration-300 ${
                      isActive(item.path) ? 'text-gold' : 'text-navy hover:text-gold'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="flex flex-col space-y-2 pt-4">
                  <a
                    href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-8491"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Donate Now
                  </a>
                  <a
                    href="https://form.jotform.com/251385758940064"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-opacity-90 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Petition
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
