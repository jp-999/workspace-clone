import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { getAllWorkspaces, searchWorkspaces } from '../services/workspaceData';
import WorkspaceCard from '../components/listings/WorkspaceCard';

const Explore = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search') || '';
  const categoryQuery = queryParams.get('category') || 'All';

  const [workspaces, setWorkspaces] = useState([]);
  const [filteredWorkspaces, setFilteredWorkspaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState(categoryQuery);
  
  const categories = ['All', 'Office', 'Studio', 'Coworking', 'Business Center', 'Smart Office', 'Retreat'];
  
  useEffect(() => {
    // Fetch all workspaces
    const allWorkspaces = getAllWorkspaces();
    setWorkspaces(allWorkspaces);
    
    // Apply initial filters from URL if they exist
    if (searchQuery || categoryQuery !== 'All') {
      let results = allWorkspaces;
      
      if (searchQuery) {
        results = searchWorkspaces(searchQuery);
      }
      
      if (categoryQuery !== 'All') {
        results = results.filter(workspace => workspace.category === categoryQuery);
      }
      
      setFilteredWorkspaces(results);
    } else {
      setFilteredWorkspaces(allWorkspaces);
    }
  }, [searchQuery, categoryQuery]);
  
  useEffect(() => {
    // Filter workspaces based on search term and category
    let results = workspaces;
    
    if (searchTerm) {
      results = searchWorkspaces(searchTerm);
    }
    
    if (selectedCategory !== 'All') {
      results = results.filter(workspace => workspace.category === selectedCategory);
    }
    
    setFilteredWorkspaces(results);
  }, [searchTerm, selectedCategory, workspaces]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-16">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-white mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Workspaces</span>
          </motion.h1>
          
          <motion.div 
            className="glassmorphism rounded-xl p-6 shadow-lg max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
          </motion.div>
        </section>
        
        {/* Results Section */}
        <section>
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">
              {filteredWorkspaces.length} {filteredWorkspaces.length === 1 ? 'workspace' : 'workspaces'} found
            </h2>
            
            <div className="flex items-center space-x-2">
              <span className="text-dark-300">Sort by:</span>
              <select className="input input-sm bg-dark-800 border-dark-700">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
                <option>Most Recent</option>
              </select>
            </div>
          </div>
          
          {filteredWorkspaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWorkspaces.map((workspace, index) => (
                <motion.div
                  key={workspace.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <WorkspaceCard workspace={workspace} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="glassmorphism p-8 rounded-xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">No workspaces found</h3>
              <p className="text-dark-300 mb-4">Try adjusting your search criteria or category selection.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Explore; 