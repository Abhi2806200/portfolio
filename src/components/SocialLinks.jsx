import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import resume from "../assets/abhishek_resume.pdf"; // Ensure this file exists

const SocialLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle resume download
  const handleDownloadResume = () => {
    toast.success("Downloading resume...");
    
    const link = document.createElement("a");
    link.href = resume; // Make sure the file path is correct
    link.setAttribute("download", "Abhishek_Agnihotri_Resume.pdf"); // Set download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/abhishek-agnihotri-b46039165/",
      color: "from-blue-600 to-blue-800",
    },
    {
      id: 2,
      label: "GitHub",
      icon: <FaGithub size={24} />,
      href: "https://github.com/Abhi2806200",
      color: "from-gray-700 to-gray-900",
    },
    {
      id: 3,
      label: "Email",
      icon: <HiOutlineMail size={24} />,
      href: "mailto:abhishekagni2806@gmail.com",
      color: "from-red-500 to-red-700",
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={24} />,
      onClick: handleDownloadResume,
      color: "from-green-500 to-green-700",
    },
    {
      id: 5,
      label: "Twitter",
      icon: <FaTwitter size={24} />,
      href: "https://twitter.com/Abhishe86339503?t=RqeIoMy4oko-4eHH3pIMJQ&s=09",
      color: "from-sky-500 to-sky-700",
    },
  ];

  return (
    <div className="fixed left-0 top-[35%] z-50">
      <div className="relative">
        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => setIsVisible(!isVisible)}
        >
          <span
            className={`text-2xl transition-transform duration-300 ${
              isVisible ? "rotate-180" : "rotate-0"
            }`}
          >
            &darr;
          </span>
        </button>

        {/* Social Links */}
        <ul
          className={`mt-4 space-y-4 transform transition-all duration-300 ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          } md:opacity-100 md:translate-x-0`}
        >
          {links.map(({ id, label, icon, href, onClick, color }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] rounded-md duration-300 bg-gradient-to-r ${color} shadow-md hover:shadow-lg transition-all`}
            >
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center w-full text-white"
                >
                  {label} {icon}
                </a>
              ) : (
                <button
                  onClick={onClick}
                  className="flex justify-between items-center w-full text-white"
                >
                  {label} {icon}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
