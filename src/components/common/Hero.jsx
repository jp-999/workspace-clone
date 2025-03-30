import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  
  const categories = ['All', 'Office', 'Studio', 'Coworking', 'Business Center', 'Smart Office'];
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to explore page with search parameters
    navigate(`/explore?search=${searchTerm}&category=${selectedCategory}`);
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center blur-sm"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/3 right-1/5 w-40 h-40 bg-secondary-500/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-yellow-300 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Find Your <span className="text-white">Perfect Workspace?</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-dark-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover innovative office spaces, meeting rooms, and coworking environments designed for productivity and collaboration.
          </motion.p>
          
          <motion.div 
            className="glassmorphism rounded-2xl p-6 shadow-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSearch}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="input pl-10"
                      placeholder="Search by location or workspace type..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="md:w-1/4">
                  <select 
                    className="input"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary md:w-auto">
                  Search
                </button>
              </div>
            </form>
            
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="text-dark-400 text-sm">Popular:</span>
              {['San Francisco', 'New York', 'Coworking', 'Smart Office'].map((item) => (
                <button 
                  key={item}
                  className="px-3 py-1 text-xs bg-dark-800 hover:bg-dark-700 text-dark-300 rounded-full transition-colors duration-200"
                  onClick={() => setSearchTerm(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 