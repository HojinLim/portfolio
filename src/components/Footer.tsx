import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <p>&copy; 2023 My Website</p>
        </div>
        <div>
          <a href="1" className="text-blue-400 hover:text-blue-600 mx-2">
            Privacy Policy
          </a>
          <a href="2" className="text-blue-400 hover:text-blue-600 mx-2">
            Terms of Service
          </a>
          <a href="3" className="text-blue-400 hover:text-blue-600 mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
