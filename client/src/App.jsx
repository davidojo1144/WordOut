import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
          <Toaster position="top-right" />
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </main>

          <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 py-8 transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
              <p>&copy; {new Date().getFullYear()} Digital Agency. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
