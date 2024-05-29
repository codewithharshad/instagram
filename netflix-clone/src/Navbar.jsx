import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const NAVBAR_HEIGHT_THRESHOLD = 100; // Threshold for when to show black navbar

const Navbar = () => {
  const [isNavbarBlack, setIsNavbarBlack] = useState(false);

  const handleScroll = useCallback(() => {
    const shouldShowBlackNavbar = window.scrollY > NAVBAR_HEIGHT_THRESHOLD;
    setIsNavbarBlack(shouldShowBlackNavbar);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`nav ${isNavbarBlack && 'nav_black'}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Avatar"
      />
    </div>
  );
};

export default Navbar;
