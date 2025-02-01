import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import resume from "../assets/abhishek_resume.pdf"; // Import the resume file
import { toast } from "react-toastify";

const Contact = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Contact information
  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope className="text-2xl md:text-3xl" />,
      text: "abhishekagni2806@gmail.com",
      link: "mailto:abhishekagni2806@gmail.com",
      color: "hover:text-blue-400",
    },
    {
      id: 2,
      icon: <FaWhatsapp className="text-2xl md:text-3xl" />,
      text: "+91 82190 71272",
      link: "https://wa.me/918219071272",
      color: "hover:text-green-400",
    },
    {
      id: 3,
      icon: <FaLinkedin className="text-2xl md:text-3xl" />,
      text: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/abhishek-agnihotri-b46039165/",
      color: "hover:text-blue-500",
    },
    {
      id: 4,
      icon: <FaGithub className="text-2xl md:text-3xl" />,
      text: "GitHub Profile",
      link: "https://github.com/Abhi2806200",
      color: "hover:text-gray-400",
    },
  ];

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Show a toast notification
    toast.success("Downloading resume...");

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resume; // Use the imported resume file
    link.download = "Abhishek_Agnihotri_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
  };

  return (
    <section
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <motion.div
        className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div className="pb-8" variants={itemVariants}>
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </h2>
          <p className="py-6 text-gray-300">
            Let's connect! Reach out through any of these platforms.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-0"
          variants={containerVariants}
        >
          {contactInfo.map(({ id, icon, text, link, color }) => (
            <motion.a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-4 p-4 sm:p-6 rounded-lg 
                bg-gradient-to-r from-gray-800 to-gray-700 
                transform hover:scale-105 transition-all duration-300 
                cursor-pointer ${color} overflow-hidden`}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
              <span className="text-base sm:text-lg md:text-xl truncate">
                {text}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Section */}
        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-300">
            Available for freelance work and full-time positions
          </p>
          <div className="mt-4">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 
                rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 
                transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
            >
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;