import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg mb-8">Showcasing my projects and skills.</p>
      <button className="relative inline-block px-8 py-3 border-2 border-primary text-primary-content font-medium rounded-md hover:text-primary transition-colors">
        Learn More
        <span className="absolute inset-0 bg-primary-dark rounded-full transform scale-150 -translate-x-full -translate-y-full transition-transform duration-700 hover:translate-x-0 hover:translate-y-0"></span>
      </button>
    </div>
  );
};

export default Hero;
