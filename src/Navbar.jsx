import './Navbar.css';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`navbar ${isMobile && isOpen ? 'mobile-open' : ''}`}>
        <div className="left">
          <h2 className='title'>Portfolio</h2>
        </div>
        {isMobile ? (
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          </div>
        ) : (
          <div className="right">
            <ScrollLink
              to="mainy"
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='button'
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="aboutMey"
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='button'
            >
              About Me
            </ScrollLink>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='button'
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="project"
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='button'
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='button'
            >
              Contact Me
            </ScrollLink>
          </div>
        )}

        {isMobile && isOpen && (
          <div className="mobile-menu">
            <ScrollLink
              to="mainy"
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='mobile-button'
              onClick={toggleMenu}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="aboutMey"
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='mobile-button'
              onClick={toggleMenu}
            >
              About Me
            </ScrollLink>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='mobile-button'
              onClick={toggleMenu}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="project"
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='mobile-button'
              onClick={toggleMenu}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className='mobile-button'
              onClick={toggleMenu}
            >
              Contact Me
            </ScrollLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;