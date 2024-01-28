import React, { useState } from 'react';
import './Navbar.css'; // Import your stylesheet for styling
import icon from './imgs/logo_solo.png';

const Navbar = () => {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState('home');

  // Function to handle click on a navigation link
  const handleLinkClick = (link) => {
    setActiveLink(link);
    // You can add additional logic here, such as navigating to a different route.
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Define the offsets for each section based on your layout
      const homeOffset = 0; // Adjust as needed
      const aboutOffset = document.getElementById('about').offsetTop;
      const locationOffset = document.getElementById('location').offsetTop;

      // Check the scroll position and update the active link
      if (scrollPosition < aboutOffset) {
        setActiveLink('home');
      } else if (scrollPosition < locationOffset) {
        setActiveLink('about');
      } else {
        setActiveLink('location');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={icon} alt="icon" style={{ width: '50px'}}/>
      </div>
      <ul className="nav-links">
        <li className={activeLink === 'home' ? 'active' : ''}>
          <a href="#home" onClick={() => handleLinkClick('home')}>Home</a>
        </li>
        <li className={activeLink === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handleLinkClick('about')}>About</a>
        </li>
        <li className={activeLink === 'location' ? 'active' : ''}>
          <a href="#location" onClick={() => handleLinkClick('location')}>Location</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
