import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Have a question or want to work together? Fill out the form below.
        </p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
            <input 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="name" 
              type="text" 
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
            <input 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="email" 
              type="email" 
              placeholder="your@email.com" 
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
            <textarea 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 h-32"
              id="message" 
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button 
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            type="button"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
