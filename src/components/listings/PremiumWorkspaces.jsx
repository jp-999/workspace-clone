import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getPremiumWorkspaces } from '../../services/workspaceData';
import PremiumWorkspaceCard from './PremiumWorkspaceCard';

const PremiumWorkspaces = () => {
  const [workspaces, setWorkspaces] = useState([]);
  
  useEffect(() => {
    // Fetch premium workspaces
    const premiumWorkspaces = getPremiumWorkspaces();
    setWorkspaces(premiumWorkspaces);
  }, []);
  
  return (
    <section className="py-20 bg-gradient-to-b from-dark-950 to-dark-900 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-primary-500/30 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-20 bg-gradient-to-b from-primary-500/30 to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-primary-900/30 text-primary-400 text-sm font-semibold mb-3"
          >
            Exclusive Selection
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Workspace Experiences</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-dark-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our curated collection of luxury workspaces that combine exceptional amenities with inspiring environments for a truly elevated experience.
          </motion.p>
        </div>
        
        {/* Large featured premium workspace */}
        {workspaces.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glassmorphism rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative h-80 lg:h-auto">
                  <img 
                    src={`${workspaces[0].images[0]}?auto=format&fit=crop&w=800&h=600`} 
                    alt={workspaces[0].title} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    Premium
                  </div>
                </div>
                
                {/* Content side */}
                <div className="p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white font-semibold">{workspaces[0].rating}</span>
                      </div>
                      <span className="text-dark-400 text-sm">({workspaces[0].reviewCount} reviews)</span>
                    </div>
                    <div className="px-3 py-1 bg-dark-800 rounded-full text-dark-300 text-sm">
                      {workspaces[0].category}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{workspaces[0].title}</h3>
                  
                  <div className="flex items-center text-dark-300 text-sm mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{workspaces[0].location}, {workspaces[0].city}</span>
                  </div>
                  
                  <p className="text-dark-400 mb-6 flex-grow">{workspaces[0].description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Premium Amenities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {workspaces[0].amenities.slice(0, 6).map((amenity, index) => (
                        <div key={index} className="flex items-center text-dark-300 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-white">
                      <span className="font-bold text-2xl">${workspaces[0].price}</span>
                      <span className="text-dark-400 text-sm"> / {workspaces[0].priceUnit}</span>
                    </div>
                    
                    <Link to={`/listing/${workspaces[0].id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Other premium workspaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workspaces.slice(1).map((workspace, index) => (
            <motion.div
              key={workspace.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <PremiumWorkspaceCard workspace={workspace} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/explore" className="btn btn-outline">
            View All Premium Workspaces
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumWorkspaces; 