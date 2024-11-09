import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf";
import "./css/social.css";

const SocialLinks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true); // Manage blinking state

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/abhishek-agnihotri-b46039165/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Abhi2806200",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:abhishekagni2806@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/Abhishe86339503?t=RqeIoMy4oko-4eHH3pIMJQ&s=09",
      style: "rounded-br-md",
    },
  ];

  const handleClick = () => {
    setIsVisible(!isVisible);
    // Set blinking based on visibility of social links
    if (isVisible) {
      setIsBlinking(false); // Stop blinking when arrow is pointing up
    } else {
      setIsBlinking(true); // Start blinking when arrow is pointing down
    }
  };

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <div className="relative">
        {/* Arrow Button with dynamic rotation and blinking effect */}
        <button
          className="flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-110"
          onClick={handleClick}
        >
          <span
            className={`text-2xl transition-transform duration-300 ${
              isVisible ? "rotate-180" : "rotate-0"
            } ${isBlinking ? "" : "blink"}`}
          >
            &darr;
          </span>
        </button>

        {/* Social Links List */}
        <ul
          className={`flex flex-col mt-4 space-y-4 transform transition-all duration-300 ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-120px]"
          }`}
        >
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-500 ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
