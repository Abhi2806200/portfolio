import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf";
import "./css/social.css";

const SocialLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={24} />
        </>
      ),
      href: "https://www.linkedin.com/in/abhishek-agnihotri-b46039165/",
      style: "rounded-tr-md",
      color: "from-blue-600 to-blue-800",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={24} />
        </>
      ),
      href: "https://github.com/Abhi2806200",
      color: "from-gray-700 to-gray-900",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={24} />
        </>
      ),
      href: "mailto:abhishekagni2806@gmail.com",
      color: "from-red-500 to-red-700",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={24} />
        </>
      ),
      href: resume,
      download: true,
      color: "from-green-500 to-green-700",
    },
    {
      id: 5,
      child: (
        <>
          Twitter <FaTwitter size={24} />
        </>
      ),
      href: "https://twitter.com/Abhishe86339503?t=RqeIoMy4oko-4eHH3pIMJQ&s=09",
      style: "rounded-br-md",
      color: "from-sky-500 to-sky-700",
    },
  ];

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed left-0 top-[35%] z-50">
      <div className="relative">
        {/* Toggle Button */}
        <button
          className="flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 md:hidden" // Hide on desktop
          onClick={handleClick}
        >
          <span
            className={`text-2xl transition-transform duration-300 ${
              isVisible ? "rotate-180" : "rotate-0"
            }`}
          >
            &darr;
          </span>
        </button>

        {/* Social Links List */}
        <ul
          className={`mt-4 space-y-4 transform transition-all duration-300 ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-120px]"
          } md:opacity-100 md:translate-x-0`} // Always visible on desktop
        >
          {links.map(({ id, child, href, style, download, color }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r ${color} shadow-md hover:shadow-lg transition-all`}
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