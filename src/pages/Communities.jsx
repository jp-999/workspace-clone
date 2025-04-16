import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ForumCategories from '../components/forum/ForumCategories';
import ForumTopicList from '../components/forum/ForumTopicList';
import ForumDiscussion from '../components/forum/ForumDiscussion';
import CreateTopicModal from '../components/forum/CreateTopicModal';

// Mock data for forum categories
const MOCK_CATEGORIES = [
  { id: 1, name: 'Workspace Tips', icon: '💡', count: 24 },
  { id: 2, name: 'Remote Work', icon: '🌐', count: 18 },
  { id: 3, name: 'Coworking', icon: '👥', count: 15 },
  { id: 4, name: 'Tech Setup', icon: '💻', count: 12 },
  { id: 5, name: 'Work-Life Balance', icon: '⚖️', count: 9 },
];

// Mock data for forum topics
const MOCK_TOPICS = [
  {
    id: 1, 
    categoryId: 1,
    title: 'Best desk setup for productivity',
    author: { id: 1, name: 'Alex Johnson', avatar: '/avatars/alex.jpg' },
    createdAt: '2023-11-15T10:30:00',
    replies: 24,
    views: 356,
    isPinned: true
  },
  {
    id: 2, 
    categoryId: 1,
    title: 'Natural lighting vs artificial lighting',
    author: { id: 2, name: 'Samantha Lee', avatar: '/avatars/samantha.jpg' },
    createdAt: '2023-11-12T14:25:00',
    replies: 18,
    views: 243,
    isPinned: false
  },
  {
    id: 3, 
    categoryId: 2,
    title: 'Managing team across time zones',
    author: { id: 3, name: 'Michael Chen', avatar: '/avatars/michael.jpg' },
    createdAt: '2023-11-10T09:15:00',
    replies: 32,
    views: 487,
    isPinned: true
  },
  {
    id: 4, 
    categoryId: 3,
    title: 'Finding coworking buddies in your city',
    author: { id: 4, name: 'Emma Wilson', avatar: '/avatars/emma.jpg' },
    createdAt: '2023-11-08T16:40:00',
    replies: 27,
    views: 312,
    isPinned: false
  },
  {
    id: 5, 
    categoryId: 4,
    title: 'Favorite ergonomic chairs for long sessions',
    author: { id: 5, name: 'David Martinez', avatar: '/avatars/david.jpg' },
    createdAt: '2023-11-05T11:20:00',
    replies: 41,
    views: 529,
    isPinned: false
  },
];

// Mock data for forum posts/comments
const MOCK_POSTS = [
  {
    id: 1,
    topicId: 1,
    author: { id: 1, name: 'Alex Johnson', avatar: '/avatars/alex.jpg' },
    content: "I've been experimenting with different desk setups, and I've found that having a minimalist setup with good cable management really helps me focus. What are your thoughts?",
    createdAt: '2023-11-15T10:30:00',
    likes: 15,
    isOP: true
  },
  {
    id: 2,
    topicId: 1,
    author: { id: 6, name: 'Lisa Wang', avatar: '/avatars/lisa.jpg' },
    content: "I completely agree with minimalism. I've also found that adding a small plant and using a monitor arm to free up desk space makes a huge difference.",
    createdAt: '2023-11-15T11:45:00',
    likes: 8,
    isOP: false
  },
  {
    id: 3,
    topicId: 1,
    author: { id: 7, name: 'James Peterson', avatar: '/avatars/james.jpg' },
    content: "Has anyone tried standing desks? I'm thinking of investing in one but would love to hear experiences first.",
    createdAt: '2023-11-15T13:20:00',
    likes: 3,
    isOP: false
  }
];

const Communities = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [topics, setTopics] = useState(MOCK_TOPICS);
  
  // Filter topics by selected category
  const filteredTopics = selectedCategory 
    ? topics.filter(topic => topic.categoryId === selectedCategory.id)
    : topics;
  
  // Get posts for selected topic
  const topicPosts = selectedTopic 
    ? MOCK_POSTS.filter(post => post.topicId === selectedTopic.id)
    : [];
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTopic(null);
  };
  
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };
  
  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };
  
  const handleCreateTopic = (newTopic) => {
    const topicId = topics.length + 1;
    const now = new Date().toISOString();
    
    const createdTopic = {
      id: topicId,
      categoryId: newTopic.categoryId,
      title: newTopic.title,
      author: { id: 999, name: 'Current User', avatar: '/avatars/default.jpg' },
      createdAt: now,
      replies: 0,
      views: 0,
      isPinned: false
    };
    
    setTopics([createdTopic, ...topics]);
    setSelectedTopic(createdTopic);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="pt-24 pb-16 bg-dark-950 min-h-screen">
      <div className="container mx-auto">
        {/* Page header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Forum</span>
          </h1>
          <p className="text-dark-300 text-lg max-w-3xl mx-auto">
            Connect, share, and learn from our community of workspace enthusiasts and professionals.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar for categories */}
          <div className="lg:w-1/4">
            <ForumCategories 
              categories={MOCK_CATEGORIES} 
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6"
            >
              <button 
                onClick={() => setIsCreateModalOpen(true)}
                className="btn btn-primary w-full"
              >
                Create New Topic
              </button>
            </motion.div>
          </div>
          
          {/* Main content area */}
          <div className="lg:w-3/4 glassmorphism rounded-xl p-6">
            {!selectedTopic ? (
              // Topics list view
              <ForumTopicList 
                topics={filteredTopics} 
                onSelectTopic={handleTopicSelect}
                categoryName={selectedCategory ? selectedCategory.name : 'All Topics'}
              />
            ) : (
              // Discussion view for a specific topic
              <ForumDiscussion 
                topic={selectedTopic}
                posts={topicPosts}
                onBack={handleBackToTopics}
              />
            )}
          </div>
        </div>
      </div>
      
      {/* Create Topic Modal */}
      <CreateTopicModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateTopic={handleCreateTopic}
        categories={MOCK_CATEGORIES}
      />
    </div>
  );
};

export default Communities; 