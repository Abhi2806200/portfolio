import React, { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import './css/navbar.css';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true); // Initially set to true, so navbar is visible

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setScrollingUp(true); // Scrolling up
      } else {
        setScrollingUp(false); // Scrolling down
      }
      lastScrollY = window.scrollY > 0 ? window.scrollY : 0;
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setAnimateLogo(true);
    const timer = setTimeout(() => {
      setAnimateLogo(false); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  const toggleNav = useCallback(() => {
    setNav((prevNav) => !prevNav);
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 text-white fixed top-0 z-50 nav bg-opacity-90 backdrop-blur-sm shadow-lg transition-all ease-in-out duration-300 ${
        scrollingUp ? "navbar-visible" : "navbar-hidden"
      }`}
      style={{ backgroundColor: 'rgba(17, 24, 39, 0.9)' }} // Semi-transparent dark background
    >
      <div>
        <h1 className={`text-5xl font-signature ml-2 cursor-pointer ${animateLogo ? "animate-rotate" : ""}`}>
          <div onClick={refreshPage} className="link-underline link-underline-white cursor-pointer">
            Abhishek
          </div>
        </h1>
      </div>

      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <li key={id} className="nav-links cursor-pointer capitalize font-medium text-gray-300 hover:text-white hover:scale-110 transition-all duration-200 relative">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 hover:w-full"></span>
          </li>
        ))}
      </ul>

      <div onClick={toggleNav} className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul style={{ backgroundColor: 'rgba(17, 24, 39, 0.95)' }} className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-gray-900 text-gray-300 transition-all ease-in-out duration-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white transition-all duration-300">
              <Link onClick={toggleNav} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;