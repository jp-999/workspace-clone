import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CreateTopicModal = ({ isOpen, onClose, onCreateTopic, categories }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [errors, setErrors] = useState({});
  
  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setTitle('');
      setContent('');
      setCategoryId(categories[0]?.id || '');
      setErrors({});
    }
  }, [isOpen, categories]);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    }
    
    if (!content.trim()) {
      newErrors.content = 'Content is required';
    } else if (content.length < 10) {
      newErrors.content = 'Content must be at least 10 characters';
    }
    
    if (!categoryId) {
      newErrors.category = 'Please select a category';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onCreateTopic({
        title,
        content,
        categoryId: parseInt(categoryId, 10)
      });
    }
  };
  
  // Handle click outside to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="w-full max-w-2xl glassmorphism rounded-xl p-6 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Create New Topic</h2>
              <button 
                onClick={onClose}
                className="text-dark-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Category Select */}
              <div className="mb-4">
                <label className="block text-dark-300 mb-2" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  className={`w-full bg-dark-900 border ${errors.category ? 'border-red-500' : 'border-dark-700'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-red-500 text-sm">{errors.category}</p>
                )}
              </div>
              
              {/* Topic Title */}
              <div className="mb-4">
                <label className="block text-dark-300 mb-2" htmlFor="title">
                  Topic Title
                </label>
                <input
                  type="text"
                  id="title"
                  className={`w-full bg-dark-900 border ${errors.title ? 'border-red-500' : 'border-dark-700'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                  placeholder="What's your topic about?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && (
                  <p className="mt-1 text-red-500 text-sm">{errors.title}</p>
                )}
              </div>
              
              {/* Topic Content */}
              <div className="mb-6">
                <label className="block text-dark-300 mb-2" htmlFor="content">
                  Content
                </label>
                <textarea
                  id="content"
                  className={`w-full bg-dark-900 border ${errors.content ? 'border-red-500' : 'border-dark-700'} rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all`}
                  placeholder="Share your thoughts, questions, or ideas..."
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
                {errors.content && (
                  <p className="mt-1 text-red-500 text-sm">{errors.content}</p>
                )}
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-outline mr-3"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Create Topic
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreateTopicModal; 