import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WorkspaceCard = ({ workspace }) => {
  const { id, title, description, price, priceUnit, location, city, rating, reviewCount, images, category } = workspace;
  
  return (
    <motion.div 
      className="card overflow-hidden h-full flex flex-col"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Image */}
        <img 
          src={`${images[0]}?auto=format&fit=crop&w=500&h=300`} 
          alt={title} 
          className="w-full h-56 object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-dark-900/80 backdrop-blur-sm text-primary-400 text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-dark-900/80 backdrop-blur-sm px-2 py-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-white text-xs font-medium">{rating}</span>
          <span className="text-dark-300 text-xs">({reviewCount})</span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{title}</h3>
        </div>
        
        <div className="flex items-center text-dark-300 text-sm mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location}, {city}</span>
        </div>
        
        <p className="text-dark-400 text-sm line-clamp-3 mb-4 flex-grow">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="text-white">
            <span className="font-bold text-lg">${price}</span>
            <span className="text-dark-400 text-sm"> / {priceUnit}</span>
          </div>
          
          <Link to={`/listing/${id}`} className="btn btn-primary text-sm">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkspaceCard; 