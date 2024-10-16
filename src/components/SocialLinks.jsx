import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow text-center">
      <div className="flex justify-center gap-5 mt-4">
        <a href="https://www.linkedin.com" className="text-gray-800 text-2xl hover:text-blue-600 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://github.com" className="text-gray-800 text-2xl hover:text-blue-600 transition-colors">
          <FaGithub />
        </a>
        <a href="https://twitter.com" className="text-gray-800 text-2xl hover:text-blue-600 transition-colors">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
