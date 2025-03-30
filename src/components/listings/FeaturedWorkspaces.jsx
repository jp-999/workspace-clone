import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WorkspaceCard from './WorkspaceCard';
import { getFeaturedWorkspaces } from '../../services/workspaceData';

const FeaturedWorkspaces = () => {
  const [workspaces, setWorkspaces] = useState([]);
  
  useEffect(() => {
    // Fetch featured workspaces
    const featuredWorkspaces = getFeaturedWorkspaces();
    setWorkspaces(featuredWorkspaces);
  }, []);
  
  return (
    <section className="py-16 bg-dark-900">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Workspaces</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-dark-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover top-rated workspaces handpicked by our team to provide exceptional experiences for professionals like you.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workspaces.map((workspace, index) => (
            <motion.div
              key={workspace.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WorkspaceCard workspace={workspace} />
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
            View All Workspaces
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorkspaces; 