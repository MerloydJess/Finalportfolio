
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'skills', 'contact'];
      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollY >= section.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'about', label: 'About' },
    { name: 'education', label: 'Education' },
    { name: 'experience', label: 'Experience' },
    { name: 'skills', label: 'Skills' },
    { name: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/10 sticky top-0 z-50 border-b border-cyan-400 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">FunkyDev</h1>
        <ul className="flex gap-6 text-sm font-medium uppercase tracking-wider">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.name}`}
                className={`transition-colors duration-300 ${
                  active === link.name
                    ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                    : 'text-gray-300 hover:text-cyan-300'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
