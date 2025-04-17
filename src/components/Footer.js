import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-center py-6 text-sm text-gray-400 border-t border-gray-700">
      <p>
        © {new Date().getFullYear()} All rights reserved. Built with{'React'} and{'Tailwind CSS'}
      </p>
    </footer>
  );
};

export default Footer;
