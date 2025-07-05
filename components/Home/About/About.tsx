import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import Image from 'next/image';
import { FaCheckCircle, FaGlobe, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about" className="pt-20 pb-20 bg-gray-50">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="About Tripy - Your Travel Companion" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Text Content */}
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
              Making Travel Dreams Come True Since 2020
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              At Tripy, we believe that travel is not just about visiting new places, but about creating 
              unforgettable memories and experiences that last a lifetime. Our mission is to make travel 
              accessible, affordable, and extraordinary for everyone.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              With over 100,000+ properties worldwide and partnerships with trusted hotels, airlines, 
              and local guides, we ensure that your journey is seamless from start to finish.
            </p>
            
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-rose-600 w-5 h-5" />
                <span className="text-gray-700 font-medium">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-rose-600 w-5 h-5" />
                <span className="text-gray-700 font-medium">Best Price Guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-rose-600 w-5 h-5" />
                <span className="text-gray-700 font-medium">Secure & Easy Booking</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-rose-600 w-5 h-5" />
                <span className="text-gray-700 font-medium">Trusted by 2M+ Travelers</span>
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div data-aos="fade-left">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg"
                alt="Travel team"
                width={500}
                height={400}
                className="rounded-lg object-cover w-full h-[400px]"
              />
              <div className="absolute inset-0 bg-blue-950 opacity-10 rounded-lg"></div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <FaGlobe className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-blue-950">150+</h3>
                <p className="text-gray-600">Countries</p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <FaUsers className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-blue-950">2M+</h3>
                <p className="text-gray-600">Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;