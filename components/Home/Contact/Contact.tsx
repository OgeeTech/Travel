import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="pt-20 pb-20 bg-gray-50">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Get In Touch With Us" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">
              Let's Plan Your Next Adventure
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Have questions about your travel plans? Need help with bookings? Our travel experts 
              are here to assist you 24/7. Reach out to us and let's make your travel dreams come true.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
                  <FaPhone className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-950">Phone</h3>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-950">Email</h3>
                  <p className="text-gray-700">hello@tripy.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-950">Address</h3>
                  <p className="text-gray-700">123 Travel Street, Adventure City, AC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
                  <FaClock className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-950">Business Hours</h3>
                  <p className="text-gray-700">24/7 Customer Support</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-950 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Travel inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none transition-all duration-200 resize-none"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-rose-600 text-white py-3 px-6 rounded-lg hover:bg-rose-700 transition-all duration-300 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;