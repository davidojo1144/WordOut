import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Toaster position="top-right" />
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">Agency</Link>
            <div className="space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-gray-300 py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} Digital Agency. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
