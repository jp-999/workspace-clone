import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero';
import FeaturedWorkspaces from '../components/listings/FeaturedWorkspaces';
import Features from '../components/common/Features';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <Hero />
      
      <FeaturedWorkspaces />
      
      <Features />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Clients Say</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div 
              className="glassmorphism p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Jane Doe</h4>
                  <p className="text-dark-400 text-sm">CEO, TechStart</p>
                </div>
              </div>
              <p className="text-dark-300">
                "The innovative workspaces available on this platform have transformed how our team collaborates. The modern amenities and technology integration make our work more efficient and enjoyable."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              className="glassmorphism p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-600 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MS</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Michael Smith</h4>
                  <p className="text-dark-400 text-sm">Creative Director, DesignLab</p>
                </div>
              </div>
              <p className="text-dark-300">
                "As a creative team, finding the right space that inspires is crucial. The studios available through this platform are exceptional, with natural lighting and flexible layouts that boost our creativity."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
            
            {/* Testimonial 3 */}
            <motion.div 
              className="glassmorphism p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AJ</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Alex Johnson</h4>
                  <p className="text-dark-400 text-sm">Entrepreneur, FinTech Solutions</p>
                </div>
              </div>
              <p className="text-dark-300">
                "The booking process is seamless, and the quality of workspaces consistently exceeds expectations. From high-tech meeting rooms to comfortable collaborative areas, every detail is considered."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white shadow-lg">
              Ready to Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Perfect Workspace?</span>
            </h2>
            <p className="text-lg text-dark-300 mb-10">
              Join thousands of professionals who have discovered innovative environments to enhance their productivity and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/explore" className="btn btn-primary px-8 py-3">Explore Workspaces</Link>
              <Link to="/list-workspace" className="btn btn-outline px-8 py-3">List Your Space</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 