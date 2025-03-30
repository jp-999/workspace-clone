import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getWorkspaceById } from '../services/workspaceData';

const ListingDetails = () => {
  const { id } = useParams();
  const [workspace, setWorkspace] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedDates, setSelectedDates] = useState({
    start: '',
    end: ''
  });
  
  useEffect(() => {
    // Fetch workspace details
    const workspaceData = getWorkspaceById(id);
    setWorkspace(workspaceData);
    
    if (workspaceData && workspaceData.availableDates && workspaceData.availableDates.length > 0) {
      setSelectedDates({
        start: workspaceData.availableDates[0].start,
        end: workspaceData.availableDates[0].end
      });
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!workspace) {
    return (
      <div className="container mx-auto py-32 px-4 text-center">
        <div className="glassmorphism p-10 rounded-xl max-w-md mx-auto animate-pulse">
          <h2 className="text-2xl font-bold text-white mb-4">Loading workspace details...</h2>
          <p className="text-dark-300">Please wait while we fetch the information.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-6 text-dark-400">
          <Link to="/" className="hover:text-primary-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:text-primary-400 transition-colors">Workspaces</Link>
          <span className="mx-2">/</span>
          <span className="text-primary-400">{workspace.title}</span>
        </div>
        
        {/* Title Section */}
        <div className="mb-8">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {workspace.title}
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap items-center gap-4 text-dark-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{workspace.location}, {workspace.city}</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{workspace.type}</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{workspace.capacity}</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{workspace.rating} ({workspace.reviewCount} reviews)</span>
            </div>
          </motion.div>
        </div>
        
        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          <motion.div 
            className="lg:col-span-2 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={`${workspace.images[selectedImage]}?auto=format&fit=crop&w=1000&h=600`} 
              alt={workspace.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px]">
            {workspace.images.map((image, index) => (
              <motion.div 
                key={index}
                className={`rounded-xl overflow-hidden cursor-pointer flex-shrink-0 w-32 h-24 lg:w-full lg:h-32 ${
                  selectedImage === index ? 'ring-2 ring-primary-500' : ''
                }`}
                onClick={() => setSelectedImage(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <img 
                  src={`${image}?auto=format&fit=crop&w=300&h=200`} 
                  alt={`${workspace.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <motion.div 
              className="glassmorphism p-6 rounded-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">About this workspace</h2>
              <p className="text-dark-300 leading-relaxed mb-6">{workspace.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">Type</h3>
                  <p className="text-dark-300">{workspace.type}</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Category</h3>
                  <p className="text-dark-300">{workspace.category}</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Capacity</h3>
                  <p className="text-dark-300">{workspace.capacity}</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Location</h3>
                  <p className="text-dark-300">{workspace.location}, {workspace.city}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Amenities */}
            <motion.div 
              className="glassmorphism p-6 rounded-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workspace.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-dark-300">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Reviews */}
            <motion.div 
              className="glassmorphism p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Reviews</h2>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white font-semibold">{workspace.rating}</span>
                  <span className="text-dark-300 ml-1">({workspace.reviewCount} reviews)</span>
                </div>
              </div>
              
              {/* Sample Reviews - In a real app, these would come from an API */}
              <div className="space-y-6">
                <div className="border-b border-dark-700 pb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">ES</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Emily S.</h4>
                      <p className="text-dark-400 text-sm">2 months ago</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-dark-300">
                    "Perfect environment for our team's brainstorming session. The technology available made collaboration seamless, and the space itself inspired creativity."
                  </p>
                </div>
                
                <div className="border-b border-dark-700 pb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary-600 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">RH</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Robert H.</h4>
                      <p className="text-dark-400 text-sm">1 month ago</p>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dark-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-dark-300">
                    "The amenities were great and the location was perfect. Would've given 5 stars if the WiFi had been a bit faster during our team meeting."
                  </p>
                </div>
                
                <button className="text-primary-500 hover:text-primary-400 transition-colors font-medium">
                  Show all {workspace.reviewCount} reviews
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Sidebar - Booking Widget */}
          <motion.div 
            className="sticky top-24"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="glassmorphism p-6 rounded-xl mb-6">
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-bold text-white">${workspace.price}</span>
                <span className="text-dark-300 ml-1">/ {workspace.priceUnit}</span>
              </div>
              
              <div className="mb-4">
                <label className="block text-white font-medium mb-2">Select dates</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select 
                      className="input w-full"
                      value={selectedDates.start}
                      onChange={(e) => setSelectedDates({...selectedDates, start: e.target.value})}
                    >
                      {workspace.availableDates.map((date, index) => (
                        <option key={`start-${index}`} value={date.start}>
                          {new Date(date.start).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select 
                      className="input w-full"
                      value={selectedDates.end}
                      onChange={(e) => setSelectedDates({...selectedDates, end: e.target.value})}
                    >
                      {workspace.availableDates.map((date, index) => (
                        <option key={`end-${index}`} value={date.end}>
                          {new Date(date.end).toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-white font-medium mb-2">Number of people</label>
                <select className="input w-full">
                  <option value="1-5">1-5 people</option>
                  <option value="6-10">6-10 people</option>
                  <option value="11-20">11-20 people</option>
                  <option value="21+">21+ people</option>
                </select>
              </div>
              
              <button className="btn btn-primary w-full py-3 mb-4">Book Now</button>
              
              <div className="text-center">
                <p className="text-dark-300 text-sm">You won't be charged yet</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary-600/20 to-secondary-600/20 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-white font-semibold">Booking Protection</h3>
              </div>
              <p className="text-dark-300 text-sm mb-2">
                All bookings include our comprehensive workspace protection for hosts, amenities, and your peace of mind.
              </p>
              <Link to="/booking-protection" className="text-primary-500 text-sm font-medium hover:text-primary-400 transition-colors">
                Learn more
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails; 