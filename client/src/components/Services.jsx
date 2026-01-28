import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Marketing Automation",
      description: "Automate your email campaigns, social media, and lead nurturing.",
      icon: "🚀"
    },
    {
      title: "Workflow Optimization",
      description: "Streamline your internal processes to save time and resources.",
      icon: "⚙️"
    },
    {
      title: "Data Analytics",
      description: "Gain actionable insights from your data to drive growth.",
      icon: "📊"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
