import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Elevate Your Business with Automation
        </h1>
        <p className="text-xl mb-8">
          We help digital agencies streamline their workflows and scale efficiently.
        </p>
        <Link 
          to="/contact" 
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
