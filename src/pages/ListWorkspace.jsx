import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ListWorkspace = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    category: '',
    price: '',
    priceUnit: 'per day',
    location: '',
    city: '',
    capacity: '',
    amenities: [],
    images: []
  });
  
  const workspaceTypes = ['Entire office', 'Shared space', 'Private office', 'Hot desk', 'Conference center', 'Tech workspace'];
  const categories = ['Office', 'Studio', 'Coworking', 'Business Center', 'Smart Office', 'Retreat'];
  const amenitiesList = [
    'High-speed Wi-Fi', 'Smart conference rooms', '24/7 access', 'Ergonomic furniture',
    'Break room with snacks', 'Digital drawing boards', 'Phone booths', 'Meditation room',
    'Photography studio', 'Parking', 'Mail handling', 'Coffee bar', 'Wellness area',
    'Reception services', 'Presentation equipment', 'Printing services'
  ];
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'amenities') {
      if (checked) {
        setFormData(prev => ({
          ...prev,
          amenities: [...prev.amenities, value]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          amenities: prev.amenities.filter(amenity => amenity !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleFileChange = (e) => {
    // In a real app, this would handle file uploads
    // For this demo, we'll just store the file names
    const files = Array.from(e.target.files);
    const fileNames = files.map(file => URL.createObjectURL(file));
    
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...fileNames]
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    console.log('Workspace data submitted:', formData);
    // Move to success step
    setCurrentStep(4);
  };
  
  const goToNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };
  
  const goToPrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Basic Information</h2>
              <p className="text-dark-300">Let's start with the essential details about your workspace.</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-white font-medium mb-2">Workspace Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="input w-full"
                  placeholder="e.g., Modern Tech Hub, Creative Studio Loft"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-white font-medium mb-2">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="input w-full"
                  placeholder="Describe your workspace, highlighting its unique features and appeal..."
                  required
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="type" className="block text-white font-medium mb-2">Workspace Type</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="input w-full"
                    required
                  >
                    <option value="">Select type</option>
                    {workspaceTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-white font-medium mb-2">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="input w-full"
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="capacity" className="block text-white font-medium mb-2">Capacity</label>
                  <input
                    type="text"
                    id="capacity"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    className="input w-full"
                    placeholder="e.g., 10-30 people"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="price" className="block text-white font-medium mb-2">Price</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="input w-full"
                      placeholder="e.g., 75"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="priceUnit" className="block text-white font-medium mb-2">Unit</label>
                    <select
                      id="priceUnit"
                      name="priceUnit"
                      value={formData.priceUnit}
                      onChange={handleChange}
                      className="input w-full"
                    >
                      <option value="per hour">per hour</option>
                      <option value="per day">per day</option>
                      <option value="per week">per week</option>
                      <option value="per month">per month</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button type="button" onClick={goToNextStep} className="btn btn-primary">
                Continue
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Location</h2>
              <p className="text-dark-300">Tell us where your workspace is located.</p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-white font-medium mb-2">Area/District</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="input w-full"
                    placeholder="e.g., Downtown Tech District"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-white font-medium mb-2">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="input w-full"
                    placeholder="e.g., San Francisco"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Amenities</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {amenitiesList.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`amenity-${index}`}
                        name="amenities"
                        value={amenity}
                        checked={formData.amenities.includes(amenity)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor={`amenity-${index}`} className="text-dark-300">
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button type="button" onClick={goToPrevStep} className="btn btn-outline">
                Back
              </button>
              <button type="button" onClick={goToNextStep} className="btn btn-primary">
                Continue
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Photos</h2>
              <p className="text-dark-300">Add high-quality photos to showcase your workspace.</p>
            </div>
            
            <div className="space-y-6">
              <div className="glassmorphism p-8 border-2 border-dashed border-dark-600 rounded-xl text-center">
                <input
                  type="file"
                  id="images"
                  name="images"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                
                <label htmlFor="images" className="block cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-dark-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-dark-300 block mb-2">Click to upload photos</span>
                  <span className="text-dark-500 text-sm">High-quality JPG or PNG images up to 10MB</span>
                </label>
              </div>
              
              {formData.images.length > 0 && (
                <div>
                  <h3 className="text-white font-medium mb-3">Uploaded Photos ({formData.images.length})</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative rounded-lg overflow-hidden h-24">
                        <img src={image} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-dark-900/80 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              images: prev.images.filter((_, i) => i !== index)
                            }));
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex justify-between">
              <button type="button" onClick={goToPrevStep} className="btn btn-outline">
                Back
              </button>
              <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                Submit Listing
              </button>
            </div>
          </>
        );
      case 4:
        return (
          <div className="text-center py-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-primary-500 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-white mb-4">Listing Submitted Successfully!</h2>
            <p className="text-dark-300 mb-8 max-w-md mx-auto">
              Your workspace has been submitted for review. We'll notify you once it's approved and listed on our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn btn-outline">
                Return to Home
              </Link>
              <button
                type="button"
                onClick={() => {
                  setCurrentStep(1);
                  setFormData({
                    title: '',
                    description: '',
                    type: '',
                    category: '',
                    price: '',
                    priceUnit: 'per day',
                    location: '',
                    city: '',
                    capacity: '',
                    amenities: [],
                    images: []
                  });
                }}
                className="btn btn-primary"
              >
                List Another Workspace
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentStep < 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  List Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Workspace</span>
                </h1>
                <div className="text-dark-300">
                  Step {currentStep} of 3
                </div>
              </div>
              
              <div className="w-full bg-dark-800 h-2 rounded-full mb-8">
                <div 
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
          
          <div className="glassmorphism p-8 rounded-xl">
            <form onSubmit={handleSubmit}>
              {renderStepContent()}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ListWorkspace; 