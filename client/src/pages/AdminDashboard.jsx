import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
        const headers = { 'Authorization': token };

        const [subsRes, msgsRes] = await Promise.all([
          fetch(`${apiUrl}/admin/subscribers`, { headers }),
          fetch(`${apiUrl}/admin/messages`, { headers })
        ]);

        if (subsRes.status === 401 || msgsRes.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
          return;
        }

        const subsData = await subsRes.json();
        const msgsData = await msgsRes.json();

        setSubscribers(subsData.subscribers);
        setMessages(msgsData.messages);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load data');
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
          <button 
            onClick={() => {
              localStorage.removeItem('adminToken');
              navigate('/admin/login');
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Subscribers Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white border-b pb-2 dark:border-gray-700">
              Subscribers ({subscribers.length})
            </h2>
            {subscribers.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">No subscribers yet.</p>
            ) : (
              <ul className="space-y-2">
                {subscribers.map((email, index) => (
                  <li key={index} className="bg-gray-50 dark:bg-gray-700 p-3 rounded text-gray-700 dark:text-gray-200">
                    {email}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Messages Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white border-b pb-2 dark:border-gray-700">
              Messages ({messages.length})
            </h2>
            {messages.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">No messages yet.</p>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-gray-700 dark:text-gray-200">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold">{msg.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(msg.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{msg.email}</p>
                    <p className="text-gray-600 dark:text-gray-300">{msg.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
