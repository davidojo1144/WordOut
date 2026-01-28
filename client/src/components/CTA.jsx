import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        toast.success(data.message);
        setEmail('');
      } else {
        setStatus('error');
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      toast.error('Failed to connect to server');
    }
  };

  return (
    <div className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Automate Your Success?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8"
        >
          Subscribe to our newsletter for the latest tips and trends.
        </motion.p>
        
        <motion.form 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit} 
          className="max-w-md mx-auto flex flex-col md:flex-row gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === 'loading'}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default CTA;
