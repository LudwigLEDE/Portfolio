import React from 'react';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import SkillsProgress from './components/SkillsProgress';
import FriendsReviews from './components/FriendsReviews';
import SwipeCarousel from './components/SwipeCarousel';
import './index.css';

const App = () => {
  return (
    <div className="font-host_grotesk text-primary-content bg-background">
      <header className="sticky top-0 z-50 bg-white shadow">
        {/* Header content */}
      </header>
      <main className="space-y-12">
        <Hero />
        <SocialLinks />
        <SkillsProgress />
        <FriendsReviews />
        <SwipeCarousel />
      </main>
      <footer className="text-center py-4 bg-gray-800 text-white">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default App;
