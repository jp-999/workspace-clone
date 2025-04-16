import React from 'react';
import { motion } from 'framer-motion';

const ForumCategories = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <motion.div
      className="glassmorphism rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4 text-white">Categories</h2>
      
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onSelectCategory(null)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex justify-between items-center ${
              !selectedCategory ? 'bg-primary-900 bg-opacity-40 text-primary-400' : 'hover:bg-dark-800 text-dark-300 hover:text-white'
            }`}
          >
            <div className="flex items-center">
              <span className="text-xl mr-3">🌟</span>
              <span className="font-medium">All Categories</span>
            </div>
            <span className="text-sm bg-dark-800 px-2 py-1 rounded-full">
              {categories.reduce((sum, cat) => sum + cat.count, 0)}
            </span>
          </button>
        </li>
        
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onSelectCategory(category)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex justify-between items-center ${
                selectedCategory && selectedCategory.id === category.id 
                  ? 'bg-primary-900 bg-opacity-40 text-primary-400' 
                  : 'hover:bg-dark-800 text-dark-300 hover:text-white'
              }`}
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="text-sm bg-dark-800 px-2 py-1 rounded-full">{category.count}</span>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ForumCategories; 