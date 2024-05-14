import React, { useState, useEffect } from 'react';

const sections = ['home', 'features', 'howToWork', 'review'];

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-10 flex flex-col md:flex-row justify-between items-center px-16 py-7 bg-white text-black rounded-none max-md:px-5">
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="text-5xl font-bold leading-5 max-md:text-4xl">
          4PET
        </div>
        <button
          className="md:hidden text-3xl ml-4"
          onClick={toggleMenu}
        >
          &#9776; {/* Unicode character for hamburger icon */}
        </button>
      </div>
      <ul className={`flex-col md:flex-row gap-5 px-2.5 py-1.5 mt-2 text-2xl leading-5 md:mt-0 md:flex md:gap-10 ${menuOpen ? 'flex' : 'hidden'} max-md:w-full`}>
        <li><a href="#home" onClick={closeMenu} className={`relative hover:underline ${activeSection === 'home' ? 'text-pink-600' : ''}`}>Home</a></li>
        <li><a href="#features" onClick={closeMenu} className={`relative hover:underline ${activeSection === 'features' ? 'text-pink-600' : ''}`}>Features</a></li>
        <li><a href="#howToWork" onClick={closeMenu} className={`relative hover:underline ${activeSection === 'howToWork' ? 'text-pink-600' : ''}`}>How To Work</a></li>
        <li><a href="#review" onClick={closeMenu} className={`relative hover:underline ${activeSection === 'review' ? 'text-pink-500' : ''}`}>Review</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
