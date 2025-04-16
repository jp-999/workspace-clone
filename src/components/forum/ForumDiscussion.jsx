import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ForumDiscussion = ({ topic, posts, onBack }) => {
  const [newComment, setNewComment] = useState('');
  
  // Format date to a readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    // In a real application, this would send the comment to an API
    alert('In a real app, this would post: ' + newComment);
    setNewComment('');
  };
  
  return (
    <div>
      {/* Topic Header */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center text-dark-400 hover:text-primary-400 transition-colors mb-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Topics
        </button>
        
        <h1 className="text-2xl font-bold text-white mb-2">{topic.title}</h1>
        <div className="flex items-center justify-between text-dark-400">
          <div className="flex items-center text-sm">
            <span className="mr-3">{formatDate(topic.createdAt)}</span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {topic.views} views
            </span>
          </div>
        </div>
      </div>
      
      {/* Discussion Thread */}
      <div className="space-y-6 mb-10">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-dark-400 mb-4">No responses yet.</p>
            <p className="text-dark-500">Be the first to respond!</p>
          </div>
        ) : (
          posts.map((post, index) => (
            <motion.div 
              key={post.id}
              className={`p-6 rounded-xl ${post.isOP ? 'bg-primary-900 bg-opacity-20' : 'bg-dark-800'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center text-white text-sm mr-3">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium text-white">{post.author.name}</h3>
                      {post.isOP && (
                        <span className="ml-2 px-2 py-0.5 bg-primary-600 text-white text-xs rounded-full">
                          OP
                        </span>
                      )}
                    </div>
                    <p className="text-dark-400 text-sm">{formatDate(post.createdAt)}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="text-dark-400 hover:text-primary-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                  </button>
                  <span className="text-dark-300 text-sm">{post.likes}</span>
                </div>
              </div>
              
              <div className="text-dark-300 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </motion.div>
          ))
        )}
      </div>
      
      {/* Reply Form */}
      <motion.div 
        className="bg-dark-800 p-6 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-white mb-4">Leave a Reply</h3>
        <form onSubmit={handleSubmitComment}>
          <textarea
            className="w-full bg-dark-900 border border-dark-700 rounded-lg p-4 text-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all mb-4"
            placeholder="Share your thoughts..."
            rows={5}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <button 
              type="submit"
              className="btn btn-primary px-6"
            >
              Post Reply
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ForumDiscussion; 