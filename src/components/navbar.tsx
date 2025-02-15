'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 
      rounded-full shadow-lg flex items-center justify-between w-[60%] max-w-[800px] z-50 
      lg:px-14 transition-transform duration-300 ${showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <a href="/">
          <Image src="/Logo.png" alt="Logo" width={40} height={40} className="h-10 w-9" />
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {['Amenities', 'Family', 'Prices', 'Contact us'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-black hover:text-gray-900 transition-colors duration-200 text-base font-medium"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Action Button */}
      <a
        href="#"
        className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors duration-200 hidden md:block"
      >
        Login
      </a>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-3 md:hidden">
          {['Amenities', 'Family', 'Prices', 'Contact us'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-black text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
