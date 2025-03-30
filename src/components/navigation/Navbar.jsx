import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 flex items-center justify-center">
            <span className="text-white font-bold text-lg">WS</span>
          </div>
          <span className={`font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 ${
            isScrolled ? 'opacity-100' : 'opacity-90'
          }`}>
            WorkSpace
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/explore" label="Explore" />
          <NavLink to="/about" label="About" />
          <NavLink to="/contact" label="Contact" />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-white focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="btn btn-outline">Sign In</button>
          <Link to="/list-workspace" className="btn btn-primary">List Workspace</Link>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden glassmorphism mt-2 py-4 px-4 rounded-b-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/explore" label="Explore" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/about" label="About" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
            <div className="pt-4 flex space-x-4">
              <button className="flex-1 btn btn-outline text-sm">Sign In</button>
              <Link to="/list-workspace" className="flex-1 btn btn-primary text-sm" onClick={() => setIsMenuOpen(false)}>
                List Workspace
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// NavLink component for desktop
const NavLink = ({ to, label }) => {
  return (
    <Link 
      to={to} 
      className="text-white opacity-80 hover:opacity-100 font-medium transition-all duration-200 hover:text-primary-400 relative group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

// NavLink component for mobile
const MobileNavLink = ({ to, label, onClick }) => {
  return (
    <Link 
      to={to} 
      className="text-white text-lg font-medium block py-2 px-4 hover:bg-dark-800 rounded-lg transition-all duration-200"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar; 