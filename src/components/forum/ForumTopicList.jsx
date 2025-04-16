import React from 'react';
import { motion } from 'framer-motion';

const ForumTopicList = ({ topics, onSelectTopic, categoryName }) => {
  // Format date to a readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">
          {categoryName}
        </h2>
        <div className="text-dark-400 text-sm">
          {topics.length} topic{topics.length !== 1 ? 's' : ''}
        </div>
      </div>
      
      {topics.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-dark-400 mb-4">No topics found in this category.</p>
          <p className="text-dark-500">Be the first to start a discussion!</p>
        </div>
      ) : (
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Topic List Header */}
          <div className="grid grid-cols-12 gap-4 pb-2 border-b border-dark-800 text-dark-400 text-sm font-medium">
            <div className="col-span-6 md:col-span-7">Topic</div>
            <div className="col-span-2 text-center hidden md:block">Replies</div>
            <div className="col-span-2 text-center hidden md:block">Views</div>
            <div className="col-span-6 md:col-span-1 text-right">Date</div>
          </div>
          
          {/* Topics */}
          {topics.map((topic) => (
            <motion.div 
              key={topic.id}
              className={`grid grid-cols-12 gap-4 p-4 rounded-lg hover:bg-dark-800 transition-all cursor-pointer ${
                topic.isPinned ? 'bg-dark-800 bg-opacity-50' : ''
              }`}
              onClick={() => onSelectTopic(topic)}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              {/* Topic title and author */}
              <div className="col-span-6 md:col-span-7">
                <div className="flex items-start">
                  {topic.isPinned && (
                    <span className="mr-2 text-primary-400" title="Pinned Topic">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
                        <path d="M3 7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                      </svg>
                    </span>
                  )}
                  <div>
                    <h3 className="font-medium text-white">{topic.title}</h3>
                    <div className="text-dark-400 text-sm mt-1 flex items-center">
                      <span className="flex items-center">
                        <span className="w-5 h-5 rounded-full bg-primary-700 mr-2 flex items-center justify-center text-xs">
                          {topic.author.name.charAt(0)}
                        </span>
                        {topic.author.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Replies */}
              <div className="col-span-2 text-center hidden md:flex items-center justify-center">
                <span className="text-dark-300">{topic.replies}</span>
              </div>
              
              {/* Views */}
              <div className="col-span-2 text-center hidden md:flex items-center justify-center">
                <span className="text-dark-300">{topic.views}</span>
              </div>
              
              {/* Date */}
              <div className="col-span-6 md:col-span-1 text-right flex items-center justify-end">
                <span className="text-dark-400 text-sm">{formatDate(topic.createdAt)}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ForumTopicList; 