import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo/logo1.jpg';

const sections = ['home', 'about', 'services', 'staffs', 'sponsors', 'footer'];

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
  
    // Scroll spy effect
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY + 120; // offset for header
  
        for (const id of sections) {
          const section = document.getElementById(id);
          if (section) {
            const { offsetTop, offsetHeight } = section;
            if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
              setActiveSection(id);
              break;
            }
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // initial check
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const navItems = [
      { name: 'Who we are', link: '#about', id: 'about' },
      { name: 'What we do', link: '#services', id: 'services' },
      { name: ' Our Staffs', link: '#staffs', id: 'staffs' },
      { name: 'Our Sponsors', link: '#sponsors', id: 'sponsors' },
      { name: 'Contact Us', link: '#footer', id: 'footer' },
    ];
  
    return (
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Tremma Logo" className="h-8 sm:h-10" />
            <span className="font-bold text-green-800 text-lg sm:text-xl">TremmaAgroHub</span>
          </a>
  
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
              key={item.id}
              href={item.link}
              className={`transition duration-200 px-2 py-1 font-medium ${
                activeSection === item.id
                  ? 'text-green-800 drop-shadow-sm'
                  : 'text-gray-700 hover:text-lime-700'
              }`}
            >
              {item.name}
            </a>
            ))}
          </nav>
  
          {/* Mobile Toggle */}
          <button
            className="md:hidden text-green-700 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
  
        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md px-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`block py-2 px-2 rounded-md transition ${
                  activeSection === item.id
                    ? 'bg-lime-300 text-green-900 shadow'
                    : 'text-gray-700 hover:text-green-800 hover:bg-lime-200'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>
    );
  }

export default Header;